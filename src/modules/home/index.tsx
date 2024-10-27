import { Hero } from "./sections/hero";
import { MyCapabilities } from "./sections/my-capabilities";
import { AboutMe } from "./sections/about-me";
import { Contact } from "./sections/contact";

export function Home() {
    return (
        <div class="w-full flex flex-col">
            <Hero />
            <MyCapabilities />
            <AboutMe />
            <Contact />
        </div>
    );
}

export default Home;
