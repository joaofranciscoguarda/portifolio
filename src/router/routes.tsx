import { Navigate, RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

export const routes: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("@/modules/home")),
    },
    {
        path: "*",
        component: () => <Navigate href="/" />,
    },
];
