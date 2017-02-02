import Ember from 'ember';
import ParseHelpers from '55-lab-web-front-end/helpers/parse-helpers';

export default Ember.Component.extend({

    planSelected: [false, false, false],

    didInsertElement() {
        this._super(...arguments);
        this.selectPlanBasedOnUrl()
    },

    selectPlanBasedOnUrl() {
        let spaceType = ParseHelpers.urlParamWithName("spaceType", window.location.href);
        let isAValidatedType = (spaceType === "house" || spaceType === "store" || spaceType === "work");
        if (spaceType !== undefined && isAValidatedType) {
            this.send('didSelectPlanCallback', spaceType)
        }
    },

    actions: {

        didSelectPlanCallback: function (selectedPlan) {
            if (selectedPlan === "house") {
                this.set('planSelected', [true, false, false]);
            } else if (selectedPlan === "store") {
                this.set('planSelected', [false, true, false]);
            } else if (selectedPlan === "work") {
                this.set('planSelected', [false, false, true]);
            }
        }
    }

});
