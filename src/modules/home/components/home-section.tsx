import { cn } from "@/utils/cn";
import { ParentProps, ComponentProps } from "solid-js";

export function HomeSection({
    children,
    class: _class,
    ...rest
}: { id?: String } & ParentProps & ComponentProps<"div">) {
    return (
        <div
            class={cn("flex flex-col pt-24 min-h-[60dvh] px-4", _class)}
            {...rest}
        >
            {children}
        </div>
    );
}
