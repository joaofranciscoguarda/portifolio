import { t } from "@/i18n";
import { Icon } from "@/Icons";
import { Button } from "@/components/ui/button";
import me from "@/assets/photos/me.png";
import { A } from "@solidjs/router";

export function Hero() {
    return (
        <div class="flex h-[calc(100dvh-96px)] relative items-center">
            <div class="w-[50%] flex flex-col justify-center gap-10">
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
            <div class="flex flex-col justify-center group relative h-fit">
                <Icon
                    icon="pintas"
                    class="absolute -z-10 -top-44 right-96 opacity-5 group-hover:opacity-75 transition"
                />
                <img
                    src={me}
                    class="z-10 static transition duration-700 grayscale brightness-[0.3] group-hover:brightness-100 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <Icon
                    icon="pintas"
                    class="rotate-[200deg] absolute transition duration-500 delay-150 -z-10 -bottom-64 -right-80 opacity-5 group-hover:opacity-75"
                />
            </div>
        </div>
    );
}
