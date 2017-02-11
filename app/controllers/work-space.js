import Ember from 'ember';

export default Ember.Controller.extend({

    responsiveMode: Ember.computed(function () { 
        if (window.innerWidth < 680) {
                return true;
        }else{
            return false;
        }
    })

});
