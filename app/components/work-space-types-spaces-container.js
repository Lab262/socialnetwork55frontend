import Ember from 'ember';
import ParseHelpers from '55-lab-web-front-end/helpers/parse-helpers';

export default Ember.Component.extend({

    planSelected: [false, false, false],

    scroller: Ember.inject.service(),


    didInsertElement() {
        this._super(...arguments);
        this.selectPlanBasedOnUrl()
    },

    selectPlanBasedOnUrl() {
        console.log("ENTROU NO SELECT PLAN BY URL");
        let spaceType = ParseHelpers.urlParamWithName("spaceType", window.location.href);
        console.log("SPACE TYPE: "+spaceType);
        let isAValidatedType = (spaceType === "house" || spaceType === "store" || spaceType === "work");
        if (spaceType !== undefined && isAValidatedType) {
            this.send('didSelectPlanCallback', spaceType)
        }
    },

    actions: {  
        didSelectPlanCallback: function (selectedPlan) {
            if (selectedPlan === "house") {      
                // window.scrollTo(0, 1135);
                this.get('scroller').scrollVertical(this.$("#work-space-container"), {offset: 700, duration: 800});
                this.set('planSelected', [true, false, false]);
            } else if (selectedPlan === "store") {
                this.get('scroller').scrollVertical(this.$("#work-space-container"), {offset: 700, duration: 800});
                this.set('planSelected', [false, true, false]);
            } else if (selectedPlan === "work") {
                this.get('scroller').scrollVertical(this.$("#work-space-container"), {offset: 700, duration: 800});
                this.set('planSelected', [false, false, true]);
            }
        }
    }

});
