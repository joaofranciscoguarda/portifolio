import { t } from "@/i18n";
import { myLocation } from "@/utils/variables";
import { HomeSection } from "../../components";

export function AboutMe() {
    return (
        <HomeSection id="about">
            <h2>{t("aboutMe.head")}</h2>
            <div class="flex flex-col lg:flex-row">
                <div class="w-1/2 lg:w-1/3">
                    <img
                        src="/images/me.jpg"
                        alt="Me"
                        class="rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <h3
                        innerHTML={t("aboutMe.heading", {
                            location: myLocation,
                        })}
                    />
                    <div>
                        {t("aboutMe.text", {
                            location: myLocation,
                        })}
                    </div>
                </div>
            </div>
        </HomeSection>
    );
}
