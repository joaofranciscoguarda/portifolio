import { createEffect, For } from "solid-js";
import { Dynamic } from "solid-js/web";

const map = [
    {
        h1: ["text-primary", "text-secondary", "text-muted", "text-accent"],
        h2: ["text-primary", "text-secondary", "text-muted", "text-accent"],
        h3: ["text-primary", "text-secondary", "text-muted", "text-accent"],
        p: ["text-primary", "text-secondary", "text-muted", "text-accent"],
        a: ["text-primary", "text-secondary", "text-muted", "text-accent"],
    },
    {
        h1: ["text-grey-100", "text-grey-500", "text-grey-900"],
        h2: [
            "text-grey-100",
            "text-grey-200",
            "text-grey-500",
            "text-grey-800",
            "text-grey-900",
        ],
        h3: [
            "text-grey-100",
            "text-grey-200",
            "text-grey-300",
            "text-grey-400",
            "text-grey-500",
            "text-grey-600",
            "text-grey-700",
            "text-grey-800",
            "text-grey-900",
        ],
        p: [
            "text-grey-100",
            "text-grey-200",
            "text-grey-300",
            "text-grey-400",
            "text-grey-500",
            "text-grey-600",
            "text-grey-700",
            "text-grey-800",
            "text-grey-900",
        ],
        a: [
            "text-grey-100",
            "text-grey-200",
            "text-grey-300",
            "text-grey-400",
            "text-grey-500",
            "text-grey-600",
            "text-grey-700",
            "text-grey-800",
            "text-grey-900",
        ],
    },
] as const;

type fontMap = (typeof map)[number]; // Adjust to iterate over array elements
type keys = keyof fontMap;

export function Fonts() {
    createEffect(() => console.log(map));
    return (
        <div class="flex flex-col gap-20">
            <For each={map}>
                {(mapEntry) => {
                    const keys = Object.keys(mapEntry) as keys[];
                    return (
                        <div class="flex flex-col gap-10">
                            <For each={keys}>
                                {(key) => (
                                    <div class="flex items-center justify-between">
                                        <Dynamic component={key}>{key}</Dynamic>
                                        <For each={mapEntry[key]}>
                                            {(color) => {
                                                return (
                                                    <Dynamic
                                                        component={key}
                                                        class={color}
                                                    >
                                                        {color.replace(
                                                            "text-",
                                                            "",
                                                        )}
                                                    </Dynamic>
                                                );
                                            }}
                                        </For>
                                    </div>
                                )}
                            </For>
                        </div>
                    );
                }}
            </For>
        </div>
    );
}

export default Fonts;
