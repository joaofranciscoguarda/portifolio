import { createResource, createSignal, Show, Suspense } from "solid-js";
import { Radar } from "@/components/features/chart";
import { Icon } from "@/Icons";
import { fetchDictionary, Locale } from "./plugins/i18n";
import * as i18n from "@solid-primitives/i18n";

const [locale, setLocale] = createSignal<Locale>("en_US");
const [dict] = createResource(locale, fetchDictionary);
const t = i18n.translator(dict);

function App() {
    return (
        <Suspense>
            <Show when={dict()}>
                <h1>{t("hero.hi")}</h1>
                <Radar />
                <Icon icon="pintas" />
                <select>
                    <option value="en_US" onClick={() => setLocale("en_US")}>
                        {t("locale.en_US")}
                    </option>
                    <option value="pt_BR" onClick={() => setLocale("pt_BR")}>
                        {t("locale.pt_BR")}
                    </option>
                </select>
            </Show>
        </Suspense>
    );
}

export default App;
