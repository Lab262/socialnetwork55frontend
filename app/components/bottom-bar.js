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
       options: ["55lab.co@email.br", "(61) 00000 - 00000"]
     }
});
