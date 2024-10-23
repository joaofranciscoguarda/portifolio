import { Radar } from "@/components/features/chart";
import { Button } from "@/components/ui/button";
import { setLocale, t } from "@/i18n";
import { Icon } from "@/Icons";

export function Home() {
    return (
        <div class="w-full h-[600dvh] flex flex-col">
            <h1 class="text-accent">{t("hero.hi")?.toUpperCase()}</h1>
            <h1>{t("hero.myName")?.toUpperCase()}</h1>
            <Button>A</Button>
            <select class="p-5">
                <option value="en_US" onClick={() => setLocale("en_US")}>
                    {t("locale.en_US")}
                </option>
                <option value="pt_BR" onClick={() => setLocale("pt_BR")}>
                    {t("locale.pt_BR")}
                </option>
                <option value="es_ES" onClick={() => setLocale("es_ES")}>
                    {t("locale.es_ES")}
                </option>
            </select>
            <Radar />
            <Icon icon="pintas" />
        </div>
    );
}

export default Home;
