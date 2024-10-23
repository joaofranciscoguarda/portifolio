import { For } from "solid-js";
import { Dynamic } from "solid-js/web";

const map = [
    {
        h1: ["primary", "secondary", "muted", "accent"],
        h2: ["primary", "secondary", "muted", "accent"],
        h3: ["primary", "secondary", "muted", "accent"],
        p: ["primary", "secondary", "muted", "accent"],
        a: ["primary", "secondary", "muted", "accent"],
    },
    {
        h1: ["grey-100", "grey-500", "grey-900"],
        h2: ["grey-100", "grey-200", "grey-500", "grey-800", "grey-900"],
        h3: [
            "grey-100",
            "grey-200",
            "grey-300",
            "grey-400",
            "grey-500",
            "grey-600",
            "grey-700",
            "grey-800",
            "grey-900",
        ],
        p: [
            "grey-100",
            "grey-200",
            "grey-300",
            "grey-400",
            "grey-500",
            "grey-600",
            "grey-700",
            "grey-800",
            "grey-900",
        ],
        a: [
            "grey-100",
            "grey-200",
            "grey-300",
            "grey-400",
            "grey-500",
            "grey-600",
            "grey-700",
            "grey-800",
            "grey-900",
        ],
    },
] as const;

type fontMap = (typeof map)[number]; // Adjust to iterate over array elements
type keys = keyof fontMap;

export function Fonts() {
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
                                                const className = `
                                                    text-${color}`;
                                                return (
                                                    <Dynamic
                                                        component={key}
                                                        class={className}
                                                    >
                                                        {color}
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
