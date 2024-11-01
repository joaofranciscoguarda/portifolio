import { t } from "@/i18n";
import { Icon } from "@/components/features";
import { Button } from "@/components/ui/button";
import me from "@/assets/photos/me.png";
import { A } from "@solidjs/router";

export function Hero() {
    // const onDesktop = `xl:grayscale xl:brightness-[0.3] group-hover:brightness-100 group-hover:grayscale-0 group-hover:opacity-100`;

    return (
        <div class="flex flex-col md:flex-row h-[calc(100dvh-96px)] relative items-center">
            {/* Arrumar isso daqui, colocar SHOW e nao renderizar se for mobile */}
            <div class="invisible md:visible md:w-[50%] flex flex-col justify-center gap-10">
                <div>
                    <p class="text-h1">{t("hero.hi")?.toUpperCase()}</p>
                    <h1 class="text-accent">
                        {t("hero.myName")?.toUpperCase()}
                    </h1>
                    <p>{t("hero.andIm")}</p>
                </div>
                <div class="flex invisible md:visible">
                    <A href="#contact">
                        <Button size="xl" class="gap-3">
                            {t("buttons.contactMe")?.toLocaleUpperCase()}
                            <div class="w-2 h-2 bg-background rounded-full" />
                        </Button>
                    </A>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center group relative h-full w-fit">
                <div class="md:invisible absolute z-40 top-80">
                    <div class="md:w-[50%] flex flex-col justify-center gap-10">
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
                                    {t(
                                        "buttons.contactMe",
                                    )?.toLocaleUpperCase()}
                                    <div class="w-2 h-2 bg-background rounded-full" />
                                </Button>
                            </A>
                        </div>
                    </div>
                </div>
                <Icon
                    icon="pintas"
                    class="absolute -z-10 -top-44 right-96 opacity-5 group-hover:opacity-75 transition"
                />
                <img
                    src={me}
                    class={`w-[80%] max-w-[600px] z-10 static transition duration-700 grayscale brightness-[0.3] group-hover:brightness-100 group-hover:grayscale-0 group-hover:opacity-100`}
                />
                <Icon
                    icon="pintas"
                    class="rotate-[200deg] absolute transition duration-500 delay-150 -z-10 -bottom-64 -right-80 opacity-5 group-hover:opacity-75"
                />
            </div>
        </div>
    );
}
