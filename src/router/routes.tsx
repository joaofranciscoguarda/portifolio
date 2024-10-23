import { Navigate, RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

export const routes: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("@/modules/home")),
    },
    {
        path: "/dict",
        component: lazy(() => import("@/modules/dictionary")),
    },
    {
        path: "*",
        component: () => <Navigate href="/" />,
    },
];
