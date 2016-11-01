import Ember from 'ember';

export default Ember.Component.extend({

  actionBarComponentsActive: [false,false,false,false],

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
