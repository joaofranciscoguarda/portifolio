import { Hero } from "./sections/hero";
// import { MyCapabilities } from "./sections/my-capabilities";
import { AboutMe } from "./sections/about-me";
import { Contact } from "./sections/contact";
import { WorkExp } from "./sections/work-exp";

export function Home() {
    return (
        <>
            <Hero />
            {/* <MyCapabilities /> */}
            <WorkExp />
            <AboutMe />
            <Contact />
            <p class="text-sm mb-20 text-center">© 2024 João Francisco</p>
        </>
    );
}

export default Home;
