import { Radar } from "@/components/features/chart";
import { Button } from "@/components/ui/button";
import { setLocale, t } from "@/i18n";
import { Icon } from "@/Icons";
import { useColorMode } from "@kobalte/core";

export function Home() {
    const { toggleColorMode } = useColorMode();

    return (
        <>
            <h1>{t("hero.hi")}</h1>
            <Button variant={"destructive"} onClick={() => toggleColorMode()}>
                TEMA
            </Button>
            <select>
                <option value="en_US" onClick={() => setLocale("en_US")}>
                    {t("locale.en_US")}
                </option>
                <option value="pt_BR" onClick={() => setLocale("pt_BR")}>
                    {t("locale.pt_BR")}
                </option>
            </select>
            <Radar />
            <Icon icon="pintas" />
        </>
    );
}

export default Home;
