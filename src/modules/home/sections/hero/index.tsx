import { Icon } from "@/components/features";
import me from "@/assets/photos/me.png";
import { breakPoints } from "@/hooks/useBreakpoints";
import { Show, createMemo } from "solid-js";
import { HiIm } from "./features/HiIm";
import { HomeSection } from "../../components";

export function Hero() {
    const screen = breakPoints;

    // Memoize breakpoint conditions to reduce reactivity
    const isMobile = createMemo(() => screen.mobile && !screen.md);
    const isDesktop = createMemo(() => screen.md);

    return (
        <HomeSection class="-mt-14 pb-20 flex flex-col md:flex-row relative items-center min-h-[100dvh]">
            <Show when={isDesktop()}>
                <HiIm />
            </Show>
            <div class="flex flex-col justify-center items-center group relative h-full w-fit">
                <Show when={isMobile()}>
                    <HiIm />
                </Show>
                <Icon
                    icon="pintas"
                    class="absolute -z-10 -top-44 right-44 md:right-96 opacity-5 group-hover:opacity-75 transition-opacity duration-300"
                />
                <img
                    src={me}
                    alt="João Francisco"
                    class="w-[90%] min-w-[357px] max-w-[600px] z-10 static hero-image"
                />
                <Icon
                    icon="pintas"
                    class="rotate-[200deg] absolute transition-opacity duration-300 delay-150 -z-10 -bottom-64 -right-80 opacity-5 group-hover:opacity-75"
                />
            </div>
        </HomeSection>
    );
}
