import Ember from 'ember';
import ParseHelpers from '../helpers/parse-helpers';

export default Ember.Component.extend({

    spaceType: Ember.computed(function () {
        return "NOS VISITE";
    }),

    contentTitleButton: "AGENDAR VISITA",
    email: "",
    password: "",

    emailValidation: [{
        message: 'Entre com um email válido',
        validate: (inputValue) => {
            let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(inputValue);
        }
    }],

    clearFieldValidation: [{
        message: 'Campo obrigatório',
        validate: (inputValue) => {
            let validFieldPattern = /^(?!\s*$)/g;
            return validFieldPattern.test(inputValue);
        }
    }],

    authManager: Ember.inject.service('session'),

    actions: {
        authenticate() {
            const { email, password } = this.getProperties('email', 'password');
            this.get('authManager').authenticate('authenticator:parse-session', email, password).then(() => {
                console.log("successs")
            }, (err) => {
                var error = err.responseJSON.error;
                console.log(error)
            });
        },

        makeAppointmentUser() {

            var formIsValid = this.clearFieldValidation[0].validate(this.name) && this.emailValidation[0].validate(this.email)

            if (formIsValid == true) {

                var data = {
                    name: this.name,
                    email: this.email
                };

                var self = this

                $.ajax({
                    type: "POST",
                    url: "https://s55labinstitutionalwebback-prd.herokuapp.com/api/v0/users",
                    data: data,
                    beforeSend: function (xhr) { xhr.setRequestHeader('main-token', 'ZRCNAamAQ$yTv6&2VQ4eR*f?437w[FkF/gktDTg6#GunNQuE8@#]MC9B3NBTxifH'); },
                    success: function () {
                        alert('Formulário enviado com sucesso!');

                        self.set('name', '');
                        self.set('email', '');
                    },
                    error: function (jqXHR, exception) { console.log("error"); alert("Erro:" + jqXHR); console.log(jqXHR); console.log(exception) }
                });


            } else {
                var error = "";
                if (!this.clearFieldValidation[0].validate(this.name)) {
                    error += 'Campo *Nome* é obrigatório\n';
                }
                if (!this.clearFieldValidation[0].validate(this.email)) {
                    error += 'Campo *Email* é obrigatório\n';
                }
                if (error === "") {

                    if (!this.emailValidation[0].validate(this.email)) {
                        error += 'Campo *Email* não contém um email válido\n';
                    }
                    if (error != "") {
                        alert(error);
                    }
                } else {
                    alert(error);
                }
            }
        },
    }

});

