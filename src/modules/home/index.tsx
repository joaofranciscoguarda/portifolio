import { Hero } from "./sections/hero";
import { MyCapabilities } from "./sections/my-capabilities";
import { AboutMe } from "./sections/about-me";
import { Contact } from "./sections/contact";

export function Home() {
    return (
        <>
            <Hero />
            <MyCapabilities />
            <AboutMe />
            <Contact />
            <p class="text-sm mb-20">© 2024 João Francisco</p>
        </>
    );
}

export default Home;
