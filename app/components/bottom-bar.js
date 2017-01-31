import Ember from 'ember';

export default Ember.Component.extend({
    backgroundColor: "#000000",

     footerContentObjectFirst: {
       title: "Comunidade",
       options: ["Membership"]
     },

     footerContentObjectSecond: {
       title: "Espaço de Trabalho",
       options: ["House", "Store", "Work"]
     },

     footerContentObjectThird: {
       title: "Conhecimento",
       options: ["Acelere.me"]
     },

     footerContentObjectFourth: {
       title: "Contato",
       options: ["hi@55lab.co", "(61) 3217-6800"]
     }

});
