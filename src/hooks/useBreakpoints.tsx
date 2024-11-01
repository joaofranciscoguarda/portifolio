import { createBreakpoints } from "@solid-primitives/media";

const breakpoints = {
    mobile: "0px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
};

export const breakPoints = createBreakpoints(breakpoints);
