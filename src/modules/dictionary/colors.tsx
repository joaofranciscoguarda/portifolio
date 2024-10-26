const colors = [
    ["primary", "secondary", "muted", "accent"],
    [
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
    [
        "yellow-400",
        "yellow-500",
        "yellow-600",
        "yellow-700",
        "yellow-800",
        "yellow-900",
    ],
];

export function Colors() {
    return (
        <>
            {colors.map((colorGroup) => (
                <div class="flex flex-wrap items-center justify-center">
                    {colorGroup.map((color) => (
                        <div
                            class={`w-24 h-24 bg-${color} m-2 flex items-center justify-center text-red-900`}
                        >
                            {color}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}

export default Colors;
