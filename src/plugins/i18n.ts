import * as i18n from "@solid-primitives/i18n";
import * as en from "../i18n/en_US.ts";

export type Dict = typeof en.dict;
export type Locale = "en_US" | "pt_BR" | "es_ES";
export type Dictionary = i18n.Flatten<Dict>;

export async function fetchDictionary(locale: Locale): Promise<Dictionary> {
    const dict: Dictionary = (await import(`../i18n/${locale}.ts`)).dict;
    return i18n.flatten(dict);
}
