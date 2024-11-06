import { Dictionary, fetchDictionary, Locale } from "@/plugins/i18n";
import {
    Accessor,
    createContext,
    createResource,
    createSignal,
    ParentProps,
    useContext,
} from "solid-js";
import * as i18n from "@solid-primitives/i18n";

interface TranslationContextProps {
    locale: Accessor<Locale>;
    setLocale: (locale: Locale) => void;
    t: i18n.NullableTranslator<Dictionary>;
}

const TranslationContext = createContext<TranslationContextProps>({
    locale: "en_US" as any,
    setLocale: {} as any,
    t: {} as any,
});

export function TranslationProvider(props: ParentProps) {
    const [locale, setLocale] = createSignal<Locale>("en_US");
    const [dictInUse] = createResource(locale, fetchDictionary);
    const t = i18n.translator(dictInUse, i18n.resolveTemplate);

    return (
        <TranslationContext.Provider
            value={{
                locale,
                t,
                setLocale,
            }}
        >
            {props.children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    return useContext(TranslationContext);
}
