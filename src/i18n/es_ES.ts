import { general } from "./general";

export const dict = {
    ...general,
    inputs: {
        name: "Nombre",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Mensaje",
    },
    buttons: {
        work: "Trabajo",
        about: "Acerca de",
        skills: "Habilidades", //corrgir
        contact: "Contacto",
        submit: "Enviar",
        contactMe: "Contáctame",
    },
    hero: {
        hi: "Hola, soy",
        myName: "João Francisco",
        andIm: "y soy Desarrollador Full Stack",
    },
    myCapabilities: {
        head: "Mis Capacidades",
        headSub: "Vamos a empezar y a lo que importa",
        softSkills: "Habilidades Blandas",
        softSkillsSub: "Más sobre mi estilo de trabajo",
        whoAmIWhileWorking: "",
        whoAmIWhileWorkingSub: "",
        hardSkills: "Habilidades Técnicas",
        hardSkillsSubs: "Más sobre lo que sé por experiencia",
    },
    aboutMe: {
        head: "Sobre mí",
        heading:
            "Soy un desarrollador fullstack basado en {{location}}.<br> Tengo formación en Contabilidad.",
        text: "Soy un desarrollador Fullstack basado en {{location}}, buscando soluciones curiosas y orientadas al futuro. Tengo formación en Contabilidad. Me gusta enfocarme en código simple, legible y duradero. Actualmente, estoy explorando el mundo de Laravel/PHP en el back-end, porque recibí buenas recomendaciones de un colega para aprender cómo maneja estructuras grandes y complejas en el back-end. En el front-end, SolidJs, porque me gusta mucho cómo funciona y parece ser el próximo React, usa JSX pero no tiene los inconvenientes de React. Cuando no estoy programando, soy esposo, un buen lector y jugador de videojuegos (como todo desarrollador).",
    },
    letsContact: {
        sayHello:
            "Saluda en {{email}} <br> Para más información, aquí está mi currículum",
    },
    myExperience: {},
};
