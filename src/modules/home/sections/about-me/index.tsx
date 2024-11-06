import { myLocation } from "@/utils/variables";
import { HomeSection } from "../../components";
import { useTranslation } from "@/context/i18n";

export function AboutMe() {
    const { t } = useTranslation();

    return (
        <HomeSection id="about" class="gap-10 lg:gap-20">
            <h2>{t("aboutMe.head")}</h2>
            <div class="flex flex-col-reverse lg:flex-row items-center gap-10">
                <img
                    src="src/assets/photos/me.png"
                    alt="Me"
                    class="rounded-lg shadow-lg max-w-[min(100%,450px)]"
                />
                <div class="flex flex-col gap-5">
                    <h3
                        innerHTML={t("aboutMe.heading", {
                            location: myLocation,
                        })}
                    />
                    <p class="text-grey-100">
                        {t("aboutMe.text", {
                            location: myLocation,
                        })}
                    </p>
                </div>
            </div>
        </HomeSection>
    );
}
