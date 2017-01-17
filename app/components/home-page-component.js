import Ember from 'ember';

export default Ember.Component.extend({

  actionBarComponentsActive: [false,false,false,false],

  contentObject: {
    mainPhraseTitle: "SONHE. FAÇA. COMPARTILHE.",
    mainPhraseDescription: "Somos uma Co-lab que oferece comunidade, espaço e conhecimento que atendem às necessidades de uma nova geração de trabalhadores: mais criativos, colaborativos e inquietos.",
    actionLeftTitle: "COMUNIDADE",
    actionCenter0Title: "ESPAÇO DE TRABALHO",
    actionCenter1Title: "CONHECIMENTO",
    actionRightTitle: "CONTATOS",
    imageLeft: "/assets/images/home-page-image-community.png",
    imageCenter0: "/assets/images/home-page-image-work-station.png",
    imageCenter1: "/assets/images/home-page-image-knowledge.png",
    imageRight: "/assets/images/home-page-image-contact.png"
  },

  leftDetailContentObject: {
    title: "UM MUNDO NO QUAL AS PESSOAS SÃO LIVRES",
    description: "Comunidade construída a partir da força do ecossistema empreendedor local, no poder da execução e na transformação pela coopetição. Venha fazer parte desse mundo.",
    subTitle: "MEMBERSHIP",
    subDescription: "Fique sabendo dos melhores eventos da região, encontre parceiros de negócios e clientes, explore todos os benefícios da nossa rede. Se você também quiser fazer parte da nossa equipe, temos as possibilidades:",
    options: ["Parceiro", "Franquiado", "Mentor"],
    itemActions: [{url: "/community", title: "Faça Parte", image: "/assets/images/work_space_button_store.png"}]
  },

  center0DetailContentObject: {
    title: "Um local que você possa chamar de seu",
    description: "Áreas de trabalho desenhados focando em produtividade, estilo, flexibilidade e vontade de partilhar experiências e serviços. Se você tem uma ideai ou empreendimento, mas só precisa de um lugar começar, aqui é esse lugar.",
    subTitle: "Planos",
    subDescription: "Temos diversos espaço para o tamanho certo do seu negócio. Nossa estrura é separa em três segmentos para atender a suas necessidades. Para conhecer melhor, Nos Visite.",
    options: [".House", ".Store", ".Work"],
    itemActions: [{url: "/work-space", title: "Saiba Mais", image: "/assets/images/home_page_button_work_space.png"}]
  },

  center1DetailContentObject: {
    title: "Compartilhamos o que temos de melhor",
    description: "Através de experiências empreendedoras em áreas-chave na implementação de negócios. Promovemos Eventos e Cursos para que cada vez mais a nossa comunidade expanda seus horizontes e conheça novos caminhos. Venha e participe desse compartilhamento de ideias.",
    subTitle: "Acelere.me",
    subDescription: "Nossa parceira em promoção de Eventos e Cursos para você compartilhar ou adquirir novas ideias empreendedoras.",
    options: [],
    itemActions: [{url:"/knowledge", title: "Saiba o que está rolando", image: "/assets/images/work_space_button_work.png"}]
  },

  rightDetailContentObject: {
    title: "entre   em  contato   conosco",
    description: "Se tiver alguma dúvida, sem medo, pode falar com a gente. Se quiser nos conhecer pessoalmente, venha Nos Visitar.",
    email: "55lab.co@emai.br",
    phone: "(61) - 00000 - 0000",
    socialMedia: {twitter: "url", facebook: "url", instagram: "url"},
    copyright: "© +55 Lab. Todos os direitos reservados. 2016"
  },

  haveActionBarComponentActive:  Ember.computed('actionBarComponentsActive', function() {
    let haveActiveComponent = this.actionBarComponentsActive.filter(function(actionBarItemIsActive){
      return (actionBarItemIsActive === true);
    }).length > 0;

    return haveActiveComponent;
  }),

  actions: {
      selectItem(item) {
        if (this.actionBarComponentsActive[item] === true) {
          this.set('actionBarComponentsActive',[false,false,false,false]);
        } else {
          this.set('actionBarComponentsActive',[false,false,false,false]);
          this.set('actionBarComponentsActive.'+item, true);
        }
      },

      unselectItems() {
        this.set('actionBarComponentsActive',[false,false,false,false]);
      }
    }
});
