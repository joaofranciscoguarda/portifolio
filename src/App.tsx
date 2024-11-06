import { Router } from "@solidjs/router";
// import { ColorModeProvider, ColorModeScript } from "@kobalte/core";
import { routes } from "./router/routes";
import { TranslationProvider } from "./context/i18n";

function App() {
    return (
        <>
            {/* <ColorModeScript />
            <ColorModeProvider> */}
            <Router
                root={(props) => {
                    return (
                        <TranslationProvider>
                            {props.children}
                        </TranslationProvider>
                    );
                }}
            >
                {routes}
            </Router>
            {/* </ColorModeProvider> */}
        </>
    );
}

export default App;
