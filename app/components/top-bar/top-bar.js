import Ember from 'ember';

export default Ember.Component.extend({
    showLeftMenu: true,
    // style: "",

    responsiveMode: Ember.computed(function () {

        if (window.innerWidth < 600) {
            return true;
        } else {
            return false;
        }
    }),

    session: Ember.inject.service('session'),

    actions: {
        logout() {
            this.get('session').invalidate();
        }
    }

});
