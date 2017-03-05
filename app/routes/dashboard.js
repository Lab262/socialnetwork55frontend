import Ember from 'ember';

export default Ember.Route.extend({
    model() {

        this.get('session')
        return this.store.findAll('user-address');
    },
    session: Ember.inject.service(),

    beforeModel: function() {
      console.log("PASSSEI")
    if (this.get('session.isAuthenticated') == false) {
      return this.transitionTo('/nos-visite');
    }
  }
});
