import { t } from "@/i18n";
import { A } from "@solidjs/router";
import { Button } from "@/components/ui/button";
import { SelectLang } from "@/components/features/select-lang";
import { breakPoints } from "@/hooks";
import { Show } from "solid-js";

export function BaseHeader() {
    const screen = breakPoints;

    return (
        <div class="z-50 sticky top-0 px-4 md:px-20 w-full backdrop-blur-sm drop-shadow-lg rounded-b-2xl">
            <div class="container flex items-center justify-between h-[96px]">
                <A href="/">
                    <p class="font-bebas text-[2rem] lg:text-[2.5rem]">
                        {!screen.md ? "<JF/>" : `<${t("hero.myName")}/>`}
                    </p>
                </A>
                <Show when={screen.lg}>
                    <div class="flex flex-col lg:flex-row items-center gap-5 justify-end min-w-[35%]">
                        {import.meta.env.DEV && (
                            <A href="/dict">
                                <Button variant={"link"}>Dict</Button>
                            </A>
                        )}
                        <A href="#work">
                            <Button variant={"link"}>
                                {t("buttons.work")}
                            </Button>
                        </A>
                        <A href="#skills">
                            <Button variant={"link"}>
                                {t("buttons.skills")}
                            </Button>
                        </A>
                        <A href="#about">
                            <Button variant={"link"}>
                                {t("buttons.about")}
                            </Button>
                        </A>
                        <A href="#contact">
                            <Button variant={"link"}>
                                {t("buttons.contact")}
                            </Button>
                        </A>
                        <SelectLang />
                    </div>
                </Show>
            </div>
        </div>
    );
}
