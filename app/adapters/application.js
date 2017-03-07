import Ember from 'ember';
import DS from 'ember-data';
import ParseAdapter from 'ember-parse-adapter/adapters/application';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import Config from '../config/environment';

export default ParseAdapter.extend(DataAdapterMixin,{
  namespace: '',
  host: Config.apiBaseUrl,
  applicationId:  Config.appId,
  authorizer: 'authorizer:application'
})
