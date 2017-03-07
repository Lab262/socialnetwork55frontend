import Ember from 'ember';
import ParseHelpers from '../helpers/parse-helpers';

export default Ember.Component.extend({

    spaceType: Ember.computed(function () {
        return "LOGIN";
    }),

    contentTitleButton: "ENTRAR",
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
    store: Ember.inject.service(),

    actions: {
        authenticate() {

          const { username, password } = this.getProperties('email', 'password');
          var data = { username: this.email, password: this.password}

            var formIsValid = this.clearFieldValidation[0].validate(this.password) && this.emailValidation[0].validate(this.email)

            if (formIsValid == true) {

                this.get('authManager').authenticate('authenticator:parse-session', this.get('store'),  this.email, this.password).then(() => {
                    console.log("successs")
                }, (err) => {
                    console.log(err)
                });

            } else {
                var error = "";

                if (!this.clearFieldValidation[0].validate(this.email)) {
                    error += 'Campo *Email* é obrigatório\n';
                }

                if (!this.clearFieldValidation[0].validate(this.password)) {
                    error += 'Campo *Password* é obrigatório\n';
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
