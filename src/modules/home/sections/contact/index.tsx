import { useTranslation } from "@/context/i18n";
import { HomeSection } from "../../components";
import { myEmail, myPhone } from "@/utils/variables";
import cv from "/cv-joaofrancisco.pdf";

export function Contact() {
    const { t } = useTranslation();
    return (
        <HomeSection class="min-h-[60dvh]" id="contact">
            <div class="flex flex-col gap-10">
                <h2>{t("letsContact.head")}</h2>
                <div>
                    <p
                        innerHTML={t("letsContact.sayHello", {
                            email: myEmail,
                        })}
                    />
                    <p
                        innerHTML={t("letsContact.orCall", {
                            phone: myPhone,
                        })}
                    />
                    <p
                        innerHTML={t("letsContact.hereResume", {
                            curriculum: cv,
                        })}
                    />
                </div>
            </div>
        </HomeSection>
    );
}
