import { ParentProps } from "solid-js";
import { BaseHeader } from "./header";

export function BaseLayout(props: ParentProps) {
    return (
        <div id="me" class="justify-center relative">
            <BaseHeader />
            <div class="container">{props.children}</div>
        </div>
    );
}
