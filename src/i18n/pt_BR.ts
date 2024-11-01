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
        work: "Trabalho",
        about: "Sobre",
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
        text: "Sou um desenvolvedor Fullstack baseado em {{location}}, buscando soluções curiosas e voltadas para o futuro. Tenho formação em Contabilidade. Gosto de focar em código simples, legível e duradouro. Atualmente, estou explorando o mundo do Laravel/PHP no back-end, porque recebi boas recomendações de um colega para aprender como ele lida com grandes e complexas estruturas de back-end. No front-end, SolidJs, porque gosto muito de como funciona e parece ser o próximo React, usa JSX mas não tem os pontos negativos do React. Quando não estou programando, sou marido, um bom leitor e jogador de videogame (como todo desenvolvedor).",
    },
    letsContact: {
        sayHello:
            "Diga olá em {{email}} <br> Para mais informações, aqui está meu currículo",
    },
    myExperience: {},
};
