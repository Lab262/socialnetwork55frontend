import Ember from 'ember';

export default Ember.Component.extend({


    actions: {
        selectPlanAction(selectedPlan) {
            this.get('workspacePlansChild').send("selectPlan", selectedPlan);
        },

        setWorkspacePlansChild(workspacePlansChild) {
            this.set("workspacePlansChild",workspacePlansChild);
        }
    }


});
