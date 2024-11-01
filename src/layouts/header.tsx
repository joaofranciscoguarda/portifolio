import { t } from "@/i18n";
import { A } from "@solidjs/router";
import { Button } from "@/components/ui/button";
import { SelectLang } from "@/components/features/select-lang";

export function BaseHeader() {
    return (
        <div class="z-20 sticky top-0 px-10 w-full backdrop-blur-sm drop-shadow-lg rounded-b-2xl">
            <div class="container  flex items-center justify-between px-10 min-h-[96px]">
                <A href="/">
                    <p class="font-bebas text-[2rem] lg:text-[2.5rem]">
                        {`<` + t("hero.myName") + `/>`}
                    </p>
                </A>
                <div class="flex items-center gap-5 justify-end min-w-[35%]">
                    {import.meta.env.DEV && (
                        <A href="/dict">
                            <Button variant={"link"}>Dict</Button>
                        </A>
                    )}
                    <A href="#work">
                        <Button variant={"link"}>{t("buttons.work")}</Button>
                    </A>
                    <A href="#skills">
                        <Button variant={"link"}>{t("buttons.skills")}</Button>
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
        </div>
    );
}
