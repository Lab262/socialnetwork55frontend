import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model() {

    var addressRecord = this.store.query('person', {
      include: 'addressPoint'
    }).then(function(item) {
      alert(item.get('addressPoint'))
    });
    // ...after the record has loaded
  return addressRecord;
}
});
