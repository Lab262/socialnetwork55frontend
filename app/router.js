import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home-page', { path: '/' });
  this.route('visit-us', { path: '/nos-visite' });

});

export default Router;
