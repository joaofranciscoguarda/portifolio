import { general } from "./general";

export const dict = {
    ...general,
    inputs: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
    },
    buttons: {
        work: "Work",
        about: "About",
        skills: "Skills",
        contact: "Contact",
        submit: "Submit",
        contactMe: "Contact me",
    },
    hero: {
        hi: "Hi, I'm",
        myName: "João Francisco",
        andIm: "and I'm a Full Stack Developer",
    },
    myCapabilities: {
        head: "My Capabilities",
        headSub: "Let's get stated and go to what's matter",
        softSkills: "Soft Skills",
        softSkillsSub: "More about my working style",
        whoAmIWhileWorking: "",
        whoAmIWhileWorkingSub: "",
        hardSkills: "Hard Skills",
        hardSkillsSubs: "More about what I know from experience",
    },
    aboutMe: {
        head: "About me",
        heading:
            "I am a fullstack developer base in {{location}}.<br> Has Accountancy background.",
        text: "I am a Fullstack developer base in {{location}}, seeking for curious and future minded solutions. Has Accountability background. Likes to focus in simple, readable and durable code.  Currently, I’m exploring Laravel/PHP world in the back-end, because I got good recommendations from my colleague to learn about how does it handle huge and complex back-end structures. In the front-end, SolidJs, because I really likes how it works, and seems to be the next React, uses JSX but dont have the downsides of React. When I’m not programming, I am a husband, a good reader and a video game player (as every developer).",
    },
    letsContact: {
        sayHello: "Say hello at {{email}} <br> For more info, here's my resume",
    },
    myExperience: {},
};
