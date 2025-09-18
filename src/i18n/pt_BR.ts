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
        buyMeCoffee: "Me pague um café",
        connectWallet: "Conectar Carteira",
        sendDonation: "Enviar Doação",
        disconnect: "Desconectar",
        close: "Fechar",
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
    works: {
        head: "Experiencia de Trabalho",
        khiza: {
            title: "Khiza DAO",
            position: "Web3 Full Stack Developer",
            startsAt: "22 Fev 2023",
            endsAt: "31 Dez 2024",
            timeDiff: "~2 anos",
        },
        psyze: {
            title: "Psyze",
            position: "Tech Lead",
            startsAt: "6 Jan 2025",
            endsAt: "Agora",
        },
    },
    letsContact: {
        head: "Entre em contato",
        sayHello:
            "Diga olá em <a href='mailto:{{email}}' style='color:#FCBC26;'>{{email}}</a>",
        hereResume:
            "Para mais informações, aqui está <a href={{curriculum}} target='_blank' style='color:#FCBC26;'> meu currículo</a>.",
    },
    myExperience: {},
    donation: {
        title: "Me pague um café",
        subtitle: "Apoie meu trabalho",
        description:
            "Se você gosta do meu trabalho e quer me apoiar, pode enviar uma doação para minha carteira Polygon. Toda contribuição me ajuda a continuar criando!",
        walletAddress: "Meu Endereço da Carteira:",
        copyAddress: "Copiar Endereço",
        connectWalletToSend:
            "Conecte sua carteira para enviar uma doação diretamente",
        amountPlaceholder: "Valor em MATIC",
        sending: "Enviando...",
        success: "Doação enviada com sucesso! Obrigado! 🎉",
        error: "Falha ao enviar doação. Tente novamente.",
        walletNotConnected: "Por favor, conecte sua carteira primeiro",
        invalidAmount: "Por favor, insira um valor válido",
        switchToPolygon: "Trocar para Rede Polygon",
        installMetaMask:
            "Por favor, instale o MetaMask para conectar sua carteira",
        connecting: "Conectando...",
        balance: "Saldo:",
        selectToken: "Selecionar Token:",
        thankYou: "Obrigado pelo seu apoio! 🙏",
        supportMessage: "Sua generosidade significa muito para mim!",
    },
};
