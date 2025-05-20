"use server";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import type { AppLocale, CountryCode } from "./i18n/type";
import { countryToLocale } from "./i18n/type";

const intlMiddleware = createMiddleware(routing);

interface GeoIPResponse {
  country?: CountryCode;
  country_name?: string;
  ip?: string;
  error?: boolean;
  reason?: string;
}

interface MiddlewareParams {
  request: NextRequest;
  pathname: string;
}

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const params: MiddlewareParams = { request, pathname };

  if (shouldSkipMiddleware(params)) {
    return intlMiddleware(request);
  }

  const cookieLocale = getCookieLocale(params);
  if (cookieLocale) {
    return createLocaleRedirect(cookieLocale, params);
  }

  const ipLocale = await detectLocaleFromIP(params);
  return createLocaleRedirect(ipLocale, params);
}

function shouldSkipMiddleware({ pathname }: MiddlewareParams): boolean {
  const localePattern = `^/(${routing.locales.join("|")})(/|$)`;
  return new RegExp(localePattern).test(pathname) || /\.(.*)$/.test(pathname);
}

function getCookieLocale({ request }: MiddlewareParams): AppLocale | null {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  return cookieLocale && routing.locales.includes(cookieLocale as AppLocale)
    ? (cookieLocale as AppLocale)
    : null;
}

async function detectLocaleFromIP({
  request,
}: MiddlewareParams): Promise<AppLocale> {
  try {
    const ip = getClientIP(request);
    const geo = await fetchGeoIP(ip);
    return geo?.country ? countryToLocale[geo.country] : routing.defaultLocale;
  } catch (error) {
    console.error("GeoIP detection failed:", error);
    return routing.defaultLocale;
  }
}

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "8.8.8.8"
  );
}

async function fetchGeoIP(ip: string): Promise<GeoIPResponse | null> {
  const response = await fetch(`https://ipapi.co/${ip}/json/`);
  if (!response.ok) {
    console.warn("GeoIP API error:", await response.text());
    return null;
  }
  return (await response.json()) as GeoIPResponse;
}

function createLocaleRedirect(
  locale: AppLocale,
  { request, pathname }: MiddlewareParams
): NextResponse {
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match all pathnames except for
//   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//   // - … the ones containing a dot (e.g. `favicon.ico`)
//   matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
// };
