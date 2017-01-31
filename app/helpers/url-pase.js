import Ember from 'ember';

/**
   * Returns true if models in the model array contains a true value for the given property name.
   * @param flag {String} - The Ember Data Model Flag to check if anything is
   * @returns {Ember.ComputedProperty}
   */
function urlParamWithName(name,url) {

    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

