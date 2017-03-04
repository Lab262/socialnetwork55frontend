import Base from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';
import config from '../config/environment';

export default Base.extend({

  session: Ember.inject.service(),

  authorize(data, block) {
    const  accessToken  = data.token;
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
      block(
      'X-Parse-Session-Token', accessToken,  
      'Content-type', 'application/json', 
      "X-Parse-Application-Id", config.appId);
   }
  }
});
