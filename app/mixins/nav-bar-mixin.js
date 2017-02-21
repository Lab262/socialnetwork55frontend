import Ember from 'ember';

export default Ember.Mixin.create({

    responsiveMode: Ember.computed(function () {

        if (window.innerWidth < 680) {
            return true;
        } else {
            return false;
        }
    }),

    init() {
        this._super(...arguments);
        
        var currentResponsiveMode = this.responsiveMode;
        this.handleResize = function () {
           this.notifyPropertyChange('responsiveMode');
           if (this.responsiveMode !== currentResponsiveMode) {
               window.location.reload();
           }
        };
        Ember.run.next(this, this.handleResize);
        $(window).on('resize', Ember.run.bind(this, this.handleResize));

    }

});