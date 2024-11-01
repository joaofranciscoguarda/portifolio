import { Button } from "@/components/ui";
import { breakPoints } from "@/hooks";
import { t } from "@/i18n";
import { A } from "@solidjs/router";

export function HiIm() {
    const screen = breakPoints;

    return (
        <div
            class={`md:w-[50%] ${screen.mobile && !screen.md ? "absolute z-40 top-[17rem] backdrop-blur-sm drop-shadow-[0_20px_20px_rgba(255,255,255,0.05)] rounded-3xl p-6" : ""}`}
        >
            <div class=" flex flex-col justify-center gap-10">
                <div>
                    <p class="text-h1">{t("hero.hi")?.toUpperCase()}</p>
                    <h1 class="text-accent">
                        {t("hero.myName")?.toUpperCase()}
                    </h1>
                    <p>{t("hero.andIm")}</p>
                </div>
                <div class="flex">
                    <A href="#contact">
                        <Button size="xl" class="gap-3">
                            {t("buttons.contactMe")?.toLocaleUpperCase()}
                            <div class="w-2 h-2 bg-background rounded-full" />
                        </Button>
                    </A>
                </div>
            </div>
        </div>
    );
}
