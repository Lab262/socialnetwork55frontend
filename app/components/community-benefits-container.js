import Ember from 'ember';

export default Ember.Component.extend({
    contentMainObject:{
        title:"MOTIVOS DE SOBRA PARA SE CONECTAR",
        firstButton:"FAÇA PARTE",
        secondButton:"CONHEÇA NOSSOS PLANOS"
    },
    
    contentObjectLeftUp: {
        title: "NETWORKING",
        description: "Conexão on e offline com uma base que já começa com mais de 400 empreendedores, mentores, colaboradores e investidores para compartilhar ideias, experiências e oportunidades de trabalho.",
        image:"/assets/images/icon_network.png"
    },

    contentObjectRightUp: {
        title: "ACESSO AO ESPAÇO",
        descriptionOne: "Acesso flexível ao espaço: como membro, você terá 01 hora em ",
        linkOne:"meeting room ou open desk",
        descriptionTwo: " por mês e ficará por dentro de tudo que rola nos espaços de trabalho com exclusividade.",
        image:"/assets/images/icon_space.png"
    },

    contentObjectLeftDown: {
        title: "EVENTOS EXCLUSIVOS",
        description: "A +55Lab.co promove uma série de eventos sociais, palestras, programas de captação de workshops e cursos nos quais você pode adquirir conhecimento e compartilhar ideias sobre o universo empreendedor.",
        image:"/assets/images/icon_events.png"
    },

    contentObjectRightDown: {
        title: "DESCONTOS ESPECIAIS",
        descriptionOne: "Quem é membro tem a sua disposição uma rede de descontos em serviços que ajudam o empreendedor a cuidar melhor de si, da sua empresa e de seus colaboradores. Serviços jurídicos e de comunicação a um preço mais em conta e descontos em planos de saúde, seguros e ferramentas são alguns benefícios que estão disponíveis. Acompanhe no ",
        linkOne:"blog",
        descriptionTwo: " as novidades.",
        image:"/assets/images/icon_discounts.png"
    }

});
