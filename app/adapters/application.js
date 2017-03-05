import Ember from 'ember';
import DS from 'ember-data';
import ParseAdapter from 'ember-parse-adapter/adapters/application';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ParseAdapter.extend(DataAdapterMixin,{
  namespace: '',
  host: 'http://localhost:1337/parse',
  authorizer: 'authorizer:application'
})
