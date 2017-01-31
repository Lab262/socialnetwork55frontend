import Ember from 'ember';

export default Ember.Mixin.create({


    // these will be supplied by `create`
    parameterNameToGet: null,

    paramWithName: Ember.computed('parameterNameToGet', function () {

        var url = null
        var name = this.get('parameterNameToGet');

        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        let decoded = decodeURIComponent(results[2].replace(/\+/g, " "));
        return decoded
    }).readOnly()

});