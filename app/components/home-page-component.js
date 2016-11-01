import Ember from 'ember';

export default Ember.Component.extend({

  actionBarComponentsActive: [false,false,false,false],

  contentObject: {
    mainPhraseTitle: "SONHE. FAÇA. COMPARTILHE.",
    mainPhraseDescription: "Somos uma Co-lab que oferece comunidade, espaço e conhecimento que atendem às necessidades de uma nova geração de trabalhadores: mais criativos, colaborativos e inquietos.",
    actionLeftTitle: "COMUNIDADE",
    actionCenter0Title: "ESPAÇO DE TRABALHO",
    actionCenter1Title: "CONHECIMENTO",
    actionRightTitle: "CONTATO"
  },

  haveActionBarComponentActive:  Ember.computed('actionBarComponentsActive', function() {
    let haveActiveComponent = this.actionBarComponentsActive.filter(function(actionBarItemIsActive){
      return (actionBarItemIsActive == true);
    }).length > 0
    return haveActiveComponent
  }),

  actions: {
      selectItem(item) {
        if (this.actionBarComponentsActive[item] == true) {
          this.set('actionBarComponentsActive',[false,false,false,false])
        } else {
          this.set('actionBarComponentsActive',[false,false,false,false])
          this.set('actionBarComponentsActive.'+item, true)
        }

      }
    }
});
