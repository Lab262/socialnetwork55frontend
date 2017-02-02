import Ember from 'ember';
import ParseHelpers from '55-lab-web-front-end/helpers/parse-helpers';

export default Ember.Component.extend({
 
    spaceType: Ember.computed(function () {                    
        // let spaceTypeSelected = ParseHelpers.urlParamWithName("spaceType", window.location.href);
        // let isAValidatedType = (spaceTypeSelected === "PARCEIRO" || spaceTypeSelected === "MENTOR" || spaceTypeSelected === "INVESTIDOR" ||  spaceTypeSelected === "FRANQUEADO");
        // if (spaceTypeSelected !== undefined && isAValidatedType) {
        //     return spaceTypeSelected;
        // } else {
        //     return "NOS VISITE";
        // }

        return "NOS VISITE";
    }),

    contentDescription: "Venha conheçer o melhor no mundo, vamos te receber de braços abertos:",
    contentSecondDescription: "Não perca a oportunidade de expandir seu negócio",
    name: "",
    email: "",
    telephone: "",
    number_people:"",
    date:"",
    hour:"",
    name_space:"",

    actions: {
        
        makeAppointmentUser() {
            var data = {
                name: this.name,
                email: this.email,
                telephone: this.telephone,
                number_people: this.number_people,
                date: this.date,
                hour: this.hour,
                name_space: this.name_space,
            };

            $.ajax({
                type: "POST",
                url: "https://s55labinstitutionalwebback-prd.herokuapp.com/api/v0/users",
                data: data
            });

            this.set('name', '');
            this.set('email', '');
            this.set('telephone', '');
            this.set('number_people', '');
            this.set('date', '');
            this.set('hour', '');
            this.set('name_space', '');
        }
    }

});

