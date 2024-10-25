import { t } from "@/i18n";
import { A } from "@solidjs/router";
import { ParentProps } from "solid-js";

export function BaseLayout(props: ParentProps) {
    return (
        <div class="flex flex-col w-full max-w-7xl self-center justify-center relative">
            <div class="flex items-center justify-between px-10 min-h-[96px] sticky top-0 backdrop-blur-sm">
                <p class="font-bebas text-[2rem]">{t("hero.myName")}</p>
                <div class="flex items-center justify-evenly min-w-[30%] ">
                    <A class="text-foreground" href="#work">
                        {t("buttons.work")}
                    </A>
                    <p>{t("buttons.about")}</p>
                    <p>{t("buttons.contact")}</p>
                </div>
            </div>
            {props.children}
        </div>
    );
}
