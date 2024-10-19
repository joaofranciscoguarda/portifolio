import { Show, Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { ColorModeProvider, ColorModeScript } from "@kobalte/core";
import { routes } from "./router/routes";
import { dictInUse } from "./i18n";

function App() {
    return (
        <>
            <ColorModeScript />
            <ColorModeProvider>
                <Router
                    root={(props) => {
                        return (
                            <Suspense>
                                <Show when={dictInUse()}>{props.children}</Show>
                            </Suspense>
                        );
                    }}
                >
                    {routes}
                </Router>
            </ColorModeProvider>
        </>
    );
}

export default App;
