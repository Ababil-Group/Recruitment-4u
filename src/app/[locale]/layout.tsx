import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { routing } from "@/i18n/routing";
import "./globals.css";

// Optional: dynamically import messages if you want to pass them manually
// const messages = (await import(`../../messages/${locale}.json`)).default;

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound(); // Correct way to show 404
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
