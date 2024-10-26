import { t } from "@/i18n";
import { A } from "@solidjs/router";
import { Button } from "@/components/ui/button";
import { SelectLang } from "@/components/features/select-lang";

export function BaseHeader() {
    return (
        <div class="flex items-center justify-between px-10 min-h-[96px] sticky top-0 backdrop-blur-sm">
            <p class="font-bebas text-[2rem]">{t("hero.myName")}</p>
            <div class="flex items-center gap-5 justify-end min-w-[35%]">
                {import.meta.env.DEV && (
                    <A href="/dict">
                        <Button variant={"link"}>Dict</Button>
                    </A>
                )}
                <A href="#work">
                    <Button variant={"link"}>{t("buttons.work")}</Button>
                </A>
                <A href="#about">
                    <Button variant={"link"}>{t("buttons.about")}</Button>
                </A>
                <A href="#contact">
                    <Button variant={"link"}>{t("buttons.contact")}</Button>
                </A>
                <SelectLang />
            </div>
        </div>
    );
}
