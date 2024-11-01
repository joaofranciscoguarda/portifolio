import { Icon } from "@/components/features";
import me from "@/assets/photos/me.png";
import { breakPoints } from "@/hooks/useBreakpoints";
import { Show } from "solid-js";
import { HiIm } from "./features/HiIm";
import { HomeSection } from "../../components";

export function Hero() {
    const screen = breakPoints;

    return (
        <HomeSection class="-mt-14 pb-20 md:my-0">
            <div class="flex flex-col md:flex-row relative items-center">
                <Show when={screen.md}>
                    <HiIm />
                </Show>
                <div class="flex flex-col justify-center items-center group relative h-full w-fit">
                    <Show when={screen.mobile && !screen.md}>
                        <HiIm />
                    </Show>
                    <Icon
                        icon="pintas"
                        class="absolute -z-10 -top-44 right-44 md:right-96 opacity-5 group-hover:opacity-75 transition"
                    />
                    <img
                        src={me}
                        class={`w-[90%] min-w-[375px] max-w-[600px] z-10 static transition duration-700 grayscale brightness-[0.3] group-hover:brightness-100 group-hover:grayscale-0 group-hover:opacity-100`}
                    />
                    <Icon
                        icon="pintas"
                        class="rotate-[200deg] absolute transition duration-500 delay-150 -z-10 -bottom-64 -right-80 opacity-5 group-hover:opacity-75"
                    />
                </div>
            </div>
        </HomeSection>
    );
}
