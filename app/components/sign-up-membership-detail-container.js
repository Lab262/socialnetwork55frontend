import Ember from 'ember';
import ParseHelpers from '55-lab-web-front-end/helpers/parse-helpers';

export default Ember.Component.extend({
 
    memberType: Ember.computed(function () {                    
        let membershipType = ParseHelpers.urlParamWithName("memberType", window.location.href);
        let isAValidatedType = (membershipType === "PARCEIRO" || membershipType === "MENTOR" || membershipType === "INVESTIDOR" ||  membershipType === "FRANQUEADO");
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

    actions: {
        
        registerUser() {
            var data = {
                name: this.name,
                cpf: this.cpf,
                rg: this.rg,
                adress_label: this.address,
                adress_number: this.number,
                adress_mpolement: this.complement,
                adress_neighbor: this.neighbor,
                adress_state: this.state,
                adress_country: this.country,
                email: this.email,
                telephone: this.telephone,
                memberType: this.get('memberType')
            };
            console.log(this.get('memberType'));
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
        }
    }

});
