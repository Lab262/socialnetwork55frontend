
import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
    authenticate: function (store, email, password) {

      var ParseUser  = store.modelFor('parse-user')
      var data = { username: email, password: password}

      return new Ember.RSVP.Promise(function (resolve, reject) {
        ParseUser.login( store , data ).then(
             function( user ) {
               console.log(user)
               Ember.run(function () {
                   console.log("success")
                   console.log(user)

                   console.log(user.sessionToken)
                   resolve({ token: user.sessionToken });
               });
             },
             function( error ) {
               console.log(error)
               Ember.run(function () {
                   reject(error);
               });
             }
           );
         })
    },

    restore: function (data) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            if (!Ember.isEmpty(data.sessionToken)) {
                resolve(data);
            } else {
                reject();
            }
        });

    },

    invalidate: function (data) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            if (!Ember.isEmpty(data.sessionToken)) {
                resolve(data);
            } else {
                reject();
            }
        });
    }
});
