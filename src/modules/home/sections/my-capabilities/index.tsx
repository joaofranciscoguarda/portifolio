import { Radar } from "@/components/features/chart";
import { useTranslation } from "@/context/i18n";
import { HomeSection } from "../../components";

export function MyCapabilities() {
    const { t } = useTranslation();

    return (
        <HomeSection id="skills">
            <div class="flex flex-col items-center">
                <h2>{t("myCapabilities.head")}</h2>
                <p>{t("myCapabilities.headSub")}</p>
            </div>
            <Radar />
        </HomeSection>
    );
}
