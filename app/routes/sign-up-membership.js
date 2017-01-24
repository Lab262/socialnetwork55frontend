import Ember from 'ember';

export default Ember.Route.extend({

    contentObject: {
        title: "MEMBERSHIP",
        description: "Faça o seu cadastro inicial, com apenas algumas informações:"
    },

    getText() {
        if (parameter==="title"){
            return this.contentObject.title;
        }else if(parameter==="description"){
            return this.contentObject.description;
        }
    }

    name: "Thiago",
    cpf: "000.000.000-00",
    rg: "000000-0",
    address: "",
    number: "",
    complement: "",
    neighbor: "",
    state: "",
    country: "",

    actions: {
        registerUser() {


        }
    }
});
