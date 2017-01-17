import Ember from 'ember';

export default Ember.Component.extend({

    titleImageSrc: "",
    description: "",
    buttonImageSrc: "",
    headerImageSrc: "/assets/images/knowledge_image_comentary.png",
    backgroundFilterHoverSrc: "/assets/images/workspace-option-background-image-filter-selected-green.png",
    opacityHoverProperty: "opacity: 0;",
    opacityOutHoverProperty: "opacity: 1;",

  actions: {  
    outHover: function() {  
       this.set('opacityHoverProperty','opacity: 0;')
       this.set('opacityOutHoverProperty','opacity: 1;')

    },

    onHover: function() {
         this.set('opacityHoverProperty','opacity: 1;')
         this.set('opacityOutHoverProperty','opacity: 0;')
  }
}
});
