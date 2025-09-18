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
        work: "Trabajos",
        about: "De mí",
        skills: "Habilidades", //corrgir
        contact: "Contacto",
        submit: "Enviar",
        contactMe: "Contáctame",
        buyMeCoffee: "Cómprame un café",
        connectWallet: "Conectar Cartera",
        sendDonation: "Enviar Donación",
        disconnect: "Desconectar",
        close: "Cerrar",
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
        texto: "Soy un desarrollador Fullstack basado en {{location}}, en busca de soluciones curiosas y orientadas al futuro. Tengo formación en Contabilidad. Me gusta centrarme en código simple, legible y duradero. Actualmente, estoy explorando el mundo de Laravel/PHP en el back-end, como me sugirió un colega sénior. El propósito es aprender cómo maneja estructuras de back-end grandes y complejas. En el front-end, estoy explorando SolidJS, que me gusta mucho cómo funciona, usa JSX pero sin las desventajas de React. Para mí, parece ser el próximo React. Cuando no estoy programando, soy esposo, buen lector y jugador de videojuegos (como todo desarrollador).",
    },
    works: {
        head: "Experiencia Laboral",
        khiza: {
            title: "Khiza DAO",
            position: "Web3 Full Stack Developer",
            startsAt: "22 Feb 2023",
            endsAt: "31 Dic 2024",
            timeDiff: "~2 años",
        },
        psyze: {
            title: "Psyze",
            position: "Tech Lead",
            startsAt: "Ene 6s 2025",
            endsAt: "Now",
        },
    },
    letsContact: {
        head: "Contáctame",
        sayHello:
            "Saluda en <a href='mailto:{{email}}' style='color:#FCBC26;'>{{email}}</a>",
        hereResume:
            "Para más información, aquí está <a href={{curriculum}} target='_blank' style='color:#FCBC26;'> mi currículum</a>.",
    },
    myExperience: {},
    donation: {
        title: "Cómprame un café",
        subtitle: "Apoya mi trabajo",
        description:
            "Si te gusta mi trabajo y quieres apoyarme, puedes enviar una donación a mi cartera de Polygon. ¡Cada contribución me ayuda a seguir creando!",
        walletAddress: "Mi Dirección de Cartera:",
        copyAddress: "Copiar Dirección",
        connectWalletToSend:
            "Conecta tu cartera para enviar una donación directamente",
        amountPlaceholder: "Cantidad en MATIC",
        sending: "Enviando...",
        success: "¡Donación enviada exitosamente! ¡Gracias! 🎉",
        error: "Error al enviar la donación. Por favor, inténtalo de nuevo.",
        walletNotConnected: "Por favor, conecta tu cartera primero",
        invalidAmount: "Por favor, ingresa una cantidad válida",
        switchToPolygon: "Cambiar a Red Polygon",
        installMetaMask: "Por favor, instala MetaMask para conectar tu cartera",
        connecting: "Conectando...",
        balance: "Saldo:",
        selectToken: "Seleccionar Token:",
        thankYou: "¡Gracias por tu apoyo! 🙏",
        supportMessage: "¡Tu generosidad significa mucho para mí!",
    },
};
