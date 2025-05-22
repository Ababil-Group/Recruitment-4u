
export type AppLocale = "en" | "bg" | "bs" | "sr" | "hr" | "ro" | "sl" | "sk";

export type CountryCode = keyof typeof countryToLocale;

export const countryToLocale = {
  BG: "bg",
  BA: "bs",
  RS: "sr",
  HR: "hr",
  RO: "ro",
  SI: "sl",
  SK: "sk",
  US: "en",
  GB: "en",
  DE: "en",
  FR: "en",
} as const satisfies Record<string, AppLocale>;
