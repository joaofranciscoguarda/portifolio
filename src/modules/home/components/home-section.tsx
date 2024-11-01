import { cn } from "@/utils/cn";
import { ParentProps, JSX } from "solid-js";

export function HomeSection({
    children,
    class: className,
    ...rest
}: ParentProps & JSX.HTMLElementTags["div"]) {
    return (
        <div class={cn("pt-24", className)} {...rest}>
            {children}
        </div>
    );
}
