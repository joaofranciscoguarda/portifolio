import { general } from "./general";

export const dict = {
    ...general,
    inputs: {
        name: "Nome",
        email: "Email",
        subject: "Assunto",
        message: "Mensagem",
    },
    buttons: {
        work: "Trabalhos",
        about: "Sobre mim",
        skills: "Habilidades",
        contact: "Contato",
        submit: "Enviar",
        contactMe: "Contate-me",
    },
    hero: {
        hi: "Oi, eu sou",
        myName: "João Francisco",
        andIm: "e sou Desenvolvedor Full Stack",
    },
    myCapabilities: {
        head: "Minhas Capacidades",
        headSub: "Vamos começar e ir direto ao que importa",
        softSkills: "Habilidades Interpessoais",
        softSkillsSub: "Mais sobre meu estilo de trabalho",
        whoAmIWhileWorking: "",
        whoAmIWhileWorkingSub: "",
        hardSkills: "Habilidades Técnicas",
        hardSkillsSubs: "Mais sobre o que sei por experiência",
    },
    aboutMe: {
        head: "Sobre mim",
        heading:
            "Sou um desenvolvedor fullstack baseado em {{location}}.<br> Tenho formação em Contabilidade.",
        texto: "Sou um desenvolvedor Fullstack baseado em {{location}}, buscando soluções curiosas e voltadas para o futuro. Tenho formação em Contabilidade. Gosto de focar em código simples, legível e durável. Atualmente, estou explorando o mundo de Laravel/PHP no back-end, como sugerido por um colega mais experiente. O objetivo é aprender como ele lida com estruturas de back-end grandes e complexas. No front-end, estou explorando o SolidJS, que gosto muito de como funciona: utiliza JSX, mas sem as desvantagens do React. Para mim, parece ser o próximo React. Quando não estou programando, sou marido, um bom leitor e um jogador de videogame (como todo desenvolvedor).",
    },
    letsContact: {
        head: "Entre em contato",
        sayHello:
            "Diga olá em <a href='mailto:{{email}}' style='color:#FCBC26;'>{{email}}</a> <br> Para mais informações, aqui está meu currículo",
    },
    myExperience: {},
};
