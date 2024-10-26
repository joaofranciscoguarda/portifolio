const colors = [
    ["bg-primary", "bg-secondary", "bg-muted", "bg-accent"],
    [
        "bg-grey-100",
        "bg-grey-200",
        "bg-grey-300",
        "bg-grey-400",
        "bg-grey-500",
        "bg-grey-600",
        "bg-grey-700",
        "bg-grey-800",
        "bg-grey-900",
    ],
    [
        "bg-yellow-400",
        "bg-yellow-500",
        "bg-yellow-600",
        "bg-yellow-700",
        "bg-yellow-800",
        "bg-yellow-900",
    ],
];

export function Colors() {
    return (
        <>
            {colors.map((colorGroup) => (
                <div class="flex flex-wrap items-center justify-center">
                    {colorGroup.map((color) => (
                        <div
                            class={`w-24 h-24 ${color} m-2 flex items-center justify-center text-red-900`}
                        >
                            {color.replace("bg-", "")}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}

export default Colors;
