import { createResource, createSignal, Show, Suspense } from "solid-js";
import { Radar } from "./chart";
import { Icon } from "@/Icons";
import { fetchDictionary, Locale } from "./i18n";
import * as i18n from "@solid-primitives/i18n";
function App() {
  const [locale, setLocale] = createSignal<Locale>("en_US");
  const [dict] = createResource(locale, fetchDictionary);

  const t = i18n.translator(dict);

  return (
    <Suspense>
      <Show when={dict()}>
        <h1>{t("hero.hi")}</h1>
        <Radar />
        <Icon icon="pintas" />
      </Show>
    </Suspense>
  );
}

export default App;
