import { ParentProps } from "solid-js";

export function GlassCard(props: ParentProps) {
    return (
        <div class="relative border-2 border-[#3b3b3b] from-[rgba(17,17,15,0.8)] to-[rgba(36,36,36,0.4)] bg-gradient-to-br p-8 rounded-3xl w-fit mx-auto w-full">
            <div class="top-0 right-0 absolute w-full h-full blur-xl opacity-70 z-10 bg-[#232323]"></div>
            <div class="grid-rows-3 sm:grid-rows-none sm:grid-cols-3 grid text-center items-center z-30 relative gap-6">
                {props.children}
            </div>
        </div>
    );
}
