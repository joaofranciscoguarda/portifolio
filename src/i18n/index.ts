import * as i18n from "@solid-primitives/i18n";
import * as en from "./en_US";

export type Dict = typeof en.dict;
export type Locale = "en_US" | "pt_BR";
export type Dictionary = i18n.Flatten<Dict>;

export async function fetchDictionary(locale: Locale) {
  const dict: Dictionary = (await import(`/src/i18n/${locale}.ts`)).dict;
  return i18n.flatten(dict);
}
