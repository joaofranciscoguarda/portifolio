import { Radar } from "@/components/features/chart";
import { t } from "@/i18n";
import { Icon } from "@/Icons";

export function Home() {
    return (
        <div class="w-full flex flex-col">
            <h1 class="text-accent">{t("hero.hi")?.toUpperCase()}</h1>
            <h1>{t("hero.myName")?.toUpperCase()}</h1>
            <Radar />
            <Icon icon="pintas" />
        </div>
    );
}

export default Home;
