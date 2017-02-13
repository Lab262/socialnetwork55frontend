import Ember from 'ember';
import NavBarMixing from './../../mixins/nav-bar-mixin'

export default Ember.Component.extend(NavBarMixing,{

    isMenuOpen: false,

    actions: {
        openMenuAction() {
           console.log("abri o menu");
           this.set('isMenuOpen', true)
        },

        closeMenuAction() {
            console.log("fechei menu  ");
                       this.set('isMenuOpen', false)

        }
    }
    
});
