import { fetchDictionary, Locale } from "@/plugins/i18n";
import { createResource, createSignal } from "solid-js";
import * as i18n from "@solid-primitives/i18n";

export const [locale, setLocale] = createSignal<Locale>("en_US");
export const [dictInUse] = createResource(locale, fetchDictionary);
export const t = i18n.translator(dictInUse);
