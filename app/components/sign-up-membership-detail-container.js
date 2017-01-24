import Ember from 'ember';

export default Ember.Component.extend({

contentTitle: "Memebership",
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
    telefphone: "",

    actions: {
        registerUser() {

            var data =  { 
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
                        telephone: this.telephone
                    }
                    console.log(data)
             $.ajax({
                    type: "POST",
                    url: "https://s55labinstitutionalwebback-prd.herokuapp.com/api/v0/users",
                    data: data
                })
        }
    }

});
