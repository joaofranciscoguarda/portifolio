/* @refresh reload */
import { render } from "solid-js/web";

import "./styles/app.css";
import App from "./App";

const root = document.getElementById("root");

root?.classList.add("flex");
root?.classList.add("flex-col");

render(() => <App />, root!);
