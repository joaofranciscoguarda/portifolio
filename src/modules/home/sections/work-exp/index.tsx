import { useTranslation } from "@/context/i18n";
import { HomeSection } from "../../components";

export function WorkExp() {
    const { t } = useTranslation();

    return (
        <HomeSection id="work">
            <div class="flex flex-col items-center">
                <h2>{t("works.head")}</h2>
                <p>{t("works.khiza.title")}</p>
                <p>{t("works.khiza.position")}</p>
                <p>{`${t("works.khiza.startAt")} - ${t("works.khiza.endAt")}`}</p>
                <p></p>
            </div>
        </HomeSection>
    );
}
