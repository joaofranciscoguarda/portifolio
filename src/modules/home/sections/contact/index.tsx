import { useTranslation } from "@/context/i18n";
import { HomeSection } from "../../components";
import { myEmail } from "@/utils/variables";

export function Contact() {
    const { t } = useTranslation();
    return (
        <HomeSection class="min-h-[90dvh]" id="contact">
            <div class="flex flex-col gap-10">
                <h2>{t("letsContact.head")}</h2>
                <p innerHTML={t("letsContact.sayHello", { email: myEmail })} />
            </div>
        </HomeSection>
    );
}
