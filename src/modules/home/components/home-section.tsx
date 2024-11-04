import { cn } from "@/utils/cn";
import { ParentProps, ComponentProps } from "solid-js";

export function HomeSection({
    children,
    class: _class,
    ...rest
}: { id?: String } & ParentProps & ComponentProps<"div">) {
    return (
        <div class={cn("pt-24 min-h-[100dvh]", _class)} {...rest}>
            {children}
        </div>
    );
}
