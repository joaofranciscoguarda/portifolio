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
        work: "Works",
        about: "About me",
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
            "I am a full-stack developer based in {{location}}.<br> I have a background in Accounting.",
        text: "I'm a Fullstack developer based in {{location}}, seeking for curious and future minded solutions. I have Accountability background. I like to focus in simple, readable and durable code.  Currently, I’m exploring Laravel/PHP world in the back-end as suggested by my senior colleague. The purpose is to learn about how does it handle huge and complex back-end structures. While in the front-end, I'm exploring SolidJs, which I really like how it works, uses JSX but doesn't has the downsides of React. For me, it seems to be the next React. When I’m not programming, I'm a husband, a good reader and a video game player (as every developer).",
    },
    works: {
        head: "Work Experience",
        khiza: {
            title: "Khiza DAO",
            position: "Full Stack Developer",
            startAt: "22 Feb 2022",
            endAt: "31 Dec 2024",
        },
    },
    letsContact: {
        head: "Let's contact",
        sayHello:
            "Say hello at <a href='mailto:{{email}}' style='color:#FCBC26;'>{{email}}</a>",
        hereResume:
            "For more information, here's <a href={{curriculum}} target='_blank' style='color:#FCBC26;'> my resume</a>.",
    },
    myExperience: {},
};
