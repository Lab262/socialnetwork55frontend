
import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';


var host = config.apiBaseUrl,
    loginUrl = [host, 'login'].join('/'),
    appId = config.appId;

export default Base.extend({
    authenticate: function (email, password) {

        return new Ember.RSVP.Promise(function (resolve, reject) {
            Ember.$.ajax({
                url: loginUrl + "?username=" + email + "&password=" + password,
                type: 'GET',
                contentType: "application/json;charset=utf-8",
                dataType: 'json',
                beforeSend: function (xhr) { xhr.setRequestHeader('X-Parse-Application-Id', appId); },
            }).then(function (response/*, statusText, jqXHR*/) {
                Ember.run(function () {
                    console.log("success")
                    console.log(response)

                    resolve({ token: response.sessionToken });
                });
            }, function (jqXHR, textStatus, errorThrown) {
                Ember.run(function () {
                    reject(jqXHR);
                });
            });
        });
    },

    restore: function (data) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();

            }
        });

    },

    invalidate: function (data) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    }

});
