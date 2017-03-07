import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user-edit', { path: '/edicao-usuario' });
  this.route('login', { path: '/' });

});

export default Router;
