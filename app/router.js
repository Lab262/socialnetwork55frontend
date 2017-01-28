import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home-page', {
    path: '/'
  });
  this.route('community');
  this.route('work-space');
  this.route('knowledge');
  this.route('sign-up-membership');
  this.route('blog');
});

export default Router;
