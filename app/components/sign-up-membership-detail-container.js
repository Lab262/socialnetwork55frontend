import Ember from 'ember';
import ParseHelpers from '55-lab-web-front-end/helpers/parse-helpers';

export default Ember.Component.extend({

    memberType: Ember.computed(function () {
        let membershipType = ParseHelpers.urlParamWithName("memberType", window.location.href);
        let isAValidatedType = (membershipType === "PARCEIRO" || membershipType === "MENTOR" || membershipType === "INVESTIDOR" || membershipType === "FRANQUEADO");
        if (membershipType !== undefined && isAValidatedType) {
            return membershipType;
        } else {
            return "MEMBERSHIP";
        }
    }),

    contentDescription: "Faça o seu cadastro inicial, com apenas algumas informações:",
    contentSecondDescription: "Não perca a oportunidade de expandir seu negócio",
    name: "",
    cpf: "",
    rg: "",
    address: "",
    number: "",
    complement: "",
    neighbor: "",
    state: "",
    country: "",
    email: "",
    telephone: "",

    emailValidation: [{
        message: 'Entre com um email válido',
        validate: (inputValue) => {
            let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(inputValue);
        }
    }],

    phoneNumberValidation: [{
        message: 'Entre com um telfone válido',
        validate: (inputValue) => {
            let emailPattern = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
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

    maskPhoneNumber(number) {
        var v = number;
        v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
        this.set('telephone', v);
    },


    actions: {

        registerUser() {


            var formIsValid = this.clearFieldValidation[0].validate(this.name)
                && this.phoneNumberValidation[0].validate(this.telephone)
                && this.emailValidation[0].validate(this.email)

            if (formIsValid == true) {

                var data = {
                    name: this.name,
                    cpf: this.cpf,
                    rg: this.rg,
                    adress_label: this.address,
                    adress_number: this.number,
                    adress_complement: this.complement,
                    adress_neighbor: this.neighbor,
                    adress_state: this.state,
                    adress_country: this.country,
                    email: this.email,
                    telephone: this.telephone,
                    memberType: this.get('memberType')
                };

                $.ajax({
                    type: "POST",
                    url: "https://s55labinstitutionalwebback-prd.herokuapp.com/api/v0/users",
                    data: data
                });

                this.set('name', '');
                this.set('cpf', '');
                this.set('rg', '');
                this.set('address', '');
                this.set('number', '');
                this.set('complement', '');
                this.set('neighbor', '');
                this.set('state', '');
                this.set('country', '');
                this.set('email', '');
                this.set('telephone', '');

            } else {
                if (!this.clearFieldValidation[0].validate(this.name)) {
                    alert('Campo *Nome* é obrigatório')
                } else if (!this.phoneNumberValidation[0].validate(this.telephone)) {
                    alert('Campo *Telefone* não contém um número de telefone válido')
                } else if (!this.emailValidation[0].validate(this.email)) {
                    alert('Campo *Email* não contém um número de telefone válido')
                }
                
            }

        },


    }



});
