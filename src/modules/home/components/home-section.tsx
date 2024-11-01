import { ParentProps, JSX } from "solid-js";

export function HomeSection({
    children,
    ...rest
}: ParentProps & JSX.HTMLElementTags["div"]) {
    return (
        <div class="mt-24 pt-24" {...rest}>
            {children}
        </div>
    );
}
