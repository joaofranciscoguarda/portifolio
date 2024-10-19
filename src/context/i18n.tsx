// import { fetchDictionary, Locale, Dictionary } from "@/plugins/i18n";
// import {
//     Accessor,
//     createContext,
//     createResource,
//     createSignal,
//     ParentProps,
//     Resource,
//     Setter,
//     useContext,
// } from "solid-js";
// import * as i18n from "@solid-primitives/i18n";
// type I18nContext = {
//     t: i18n.NullableTranslator<Dictionary>;
//     locale: Accessor<Locale>;
//     setLocale: Setter<Locale>;
//     dictInUse: Resource<Dictionary>;
// };
// const i18nContext = createContext<I18nContext>();
// export function I18nProvider(props: ParentProps) {
//     const [locale, setLocale] = createSignal<Locale>("en_US");
//     const [dictInUse] = createResource(locale, fetchDictionary);
//     const t = i18n.translator(dictInUse);
//     const values = {
//         t,
//         locale,
//         setLocale,
//         dictInUse,
//     };
//     return (
//         <i18nContext.Provider value={values}>
//             {props.children}
//         </i18nContext.Provider>
//     );
// }
// export function useI18n() {
//     return useContext<I18nContext>(i18nContext);
// }
