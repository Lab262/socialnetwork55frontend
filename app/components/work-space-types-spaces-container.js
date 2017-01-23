import Ember from 'ember';

export default Ember.Component.extend({


    planSelected: [false,false,false],

    actions: {

        didSelectPlanCallback: function(selectedPlan) {
             if (selectedPlan === "house") {
                this.set('planSelected',[true, false, false]);
            } else if (selectedPlan === "store") {
                this.set('planSelected',[false, true, false]);
            } else if (selectedPlan === "work") {
                this.set('planSelected',[false, false, true]);
            }
        }
    }

});
