import Ember from 'ember';

export default Ember.Component.extend({

  actionBarComponentsActive: [false,false,false,false],

  actions: {
      selectItem(item) {
        this.set('actionBarComponentsActive',[false,false,false,false])
        this.set('actionBarComponentsActive.'+item, !this.actionBarComponentsActive[item])
      }
    }
});
