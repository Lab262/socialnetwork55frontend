import Ember from 'ember';

export default Ember.Component.extend({

    housePlans: [{
        headerContent: {
            headerContentTitle: "MEMBERSHIP",
            headerContentPrice: "R$ 49,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerContentBackgroundUrl: "/assets/images/work-space-membership-background.jpg"
        },

        descriptionContent: "Faça parte de uma comunidade diversificada que vai te inspirar, facilitar o desenvolvimento de seus negócios e te conectar com novos parceiros.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Acesso a plataforma digital e seus benefícios + um bônus mensal de 1 hora de meeting room ou de 1 hora de open desk em qualquer espaço. Caso não seja suficiente, existe a possibilidade de adquirir mais quando for necessário."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Bônus",
            subInfoContentDescription: "1 hora de  meeting room ou 1 hora de open desk."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "Mais benefícios",
            subInfoContentDescription: "Não está disponível"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Não está disponível"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "R$ 49,00 mês. Se quiser experimentar por apenas 1 mês, você paga R$ 60,00.",
            subInfoContentActionName: "VEJA AQUI"
        }
    },
    {
        headerContent: {
            headerContentTitle: "OPEN DESK",
            headerContentPrice: "R$ 865,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerContentBackgroundUrl: "/assets/images/work-space-opendesk-background.jpg"
        },

        descriptionContent: "Acesso a qualquer desk disponível na área comum do +55Lab em três locais diferentes: .work, .house e .store. Esse plano inclui o membership do +55.community e 1 hora de meeting room por mês.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "É um espaço reservado para você chegar e produzir sem preocupações, e não precisa de agendamento. É só trazer o seu laptop, escolher uma mesa e começar a trabalhar. Você encontra as estações de trabalho nos três espaços - .work, .house e .store - e pode usá-las 24h por dia nos 7 dias na semana."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Bônus",
            subInfoContentDescription: "Por mês, você ganha 1h de meeting room."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "Mais benefícios",
            subInfoContentDescription: "Não está disponível"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Sala de reunião: a partir de R$25,00/hora, Sala de conferência: a partir de R$55/hora, Atendimento telefônico: R$60 + tarifário/mês, Serviços de caixa postal: R$50/mês, Serviços de impressão: R$25,00 + tarifário/mês."
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 865 mês. Se quiser experimentar por apenas 1 mês, você paga a partir de R$ 995,00.",
            subInfoContentActionName: "VEJA AQUI"
        }
    },

   {
        headerContent: {
            headerContentTitle: "FIXED DESK",
            headerContentPrice: "R$ 985,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerContentBackgroundUrl: "/assets/images/work-space-fixeddesk-background.jpg"
        },

        descriptionContent: "Uma mesa pra chamar de sua em um espaço compartilhado. O plano está disponível para os espaços .work e .house e também inclui o membership do +55.community e 1 hora de meeting room por mês.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Neste plano, você pode usufruir de todos os benefícios que trabalhar em um espaço compartilhado te proporciona sem abrir mão de ter uma estação de trabalho exclusiva 24h por dia nos 7 dias da semana."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Bônus",
            subInfoContentDescription: "Por mês, você ganha 1h de meeting room."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "Mais benefícios",
            subInfoContentDescription: "Serviço de impressão, atendimento telefônico e endereço fiscal."
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Sala de reunião: a partir de R$25,00/hora, Sala de conferência: a partir de R$55/hora, Sala de eventos: a partir de R$150/hora, Endereço fiscal: a partir de R$115/mês."
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 985 mês. Se você quiser experimentar por apenas um mês, você paga a partir de R$ 1.135,00.",
            subInfoContentActionName: "VEJA AQUI"
        }
    },

    {
        headerContent: {
            headerContentTitle: "PRIVATE ROOM",
            headerContentPrice: "R$ 5.200/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerContentBackgroundUrl: "/assets/images/work-space-privateroom-background.jpg"
        },

        descriptionContent: "Para você que deseja uma sala exclusiva e quer criar a sua própria cultura, mas também deseja fazer parte da comunidade e garantir todos os benefícios, este é o plano ideal para impulsionar o crescimento do seu negócio.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Salas exclusivas que podem se adaptar para 1 ou mais pessoas. Todas são equipadas e preparadas para receber você e o seu negócio, e todos os membros do seu time terão acesso 24h por dia nos 7 dias da semana."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Bônus",
            subInfoContentDescription: "Por mês, você ganha 2h de meeting room."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "Mais benefícios",
            subInfoContentDescription: "Serviço de impressão, atendimento telefônico personalizado e endereço fiscal."
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Sala de reunião: a partir de R$25,00/hora, Sala de conferência: a partir de R$55/hora"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de 5200 mês, para uma pessoa. O valor é calculado de acordo com a quantidade de pessoas que utilizarão o espaço.",
            subInfoContentActionName: "VEJA AQUI"
        }
    }
    
    ],


    storePlans: [{
        headerContent: {
            headerContentTitle: "MEMBERSHIP",
            headerContentPrice: "R$ 49,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerContentBackgroundUrl: "/assets/images/work-space-membership-background.jpg"
        },

        descriptionContent: "Faça parte de uma comunidade diversificada que vai te inspirar, facilitar o desenvolvimento de seus negócios e te conectar com novos parceiros.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Acesso a plataforma digital e seus benefícios + um bônus mensal de 1 hora de meeting room ou de 1 hora de open desk em qualquer espaço. Caso não seja suficiente, existe a possibilidade de adquirir mais quando for necessário."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Bônus",
            subInfoContentDescription: "1 hora de  meeting room ou 1 hora de open desk."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "Mais benefícios",
            subInfoContentDescription: "Não está disponível"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Não está disponível"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "R$ 49,00 mês. Se quiser experimentar por apenas 1 mês, você paga R$ 60,00.",
            subInfoContentActionName: "VEJA AQUI"
        }
    },
    {
        headerContent: {
            headerContentTitle: "OPEN DESK",
            headerContentPrice: "R$ 320,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerContentBackgroundUrl: "/assets/images/work-space-opendesk-background.jpg"
        },

        descriptionContent: "Acesso a qualquer desk disponível na área comum do +55Lab em três locais diferentes: .work, .house e .store. Esse plano inclui o membership do +55.community e 1 hora de meeting room por mês.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "É um espaço reservado para você chegar e produzir sem preocupações, e não precisa de agendamento. É só trazer o seu laptop, escolher uma mesa e começar a trabalhar. Você encontra as estações de trabalho nos três espaços - .work, .house e .store - e pode usá-las 24h por dia nos 7 dias na semana."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Bônus",
            subInfoContentDescription: "Por mês, você ganha 1h de meeting room."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "Mais benefícios",
            subInfoContentDescription: "Não está disponível"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Sala de eventos: a partir de R$150/hora, Endereço fiscal: a partir de R$115/mês, Serviços de caixa postal: R$50/mês."
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 320 mês. Se quiser experimentar por apenas 1 mês, você paga a partir de R$ 365,00.",
            subInfoContentActionName: "VEJA AQUI"
        }
    }

    ],


    workspacePlans: [{
        headerContent: {
            headerContentTitle: "MEMBERSHIP",
            headerContentPrice: "R$ 49,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerContentBackgroundUrl: "/assets/images/work-space-membership-background.jpg"
        },

        descriptionContent: "Faça parte de uma comunidade diversificada que vai te inspirar, facilitar o desenvolvimento de seus negócios e te conectar com novos parceiros.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Acesso a plataforma digital e seus benefícios + um bônus mensal de 1 hora de meeting room ou de 1 hora de open desk em qualquer espaço. Caso não seja suficiente, existe a possibilidade de adquirir mais quando for necessário."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Bônus",
            subInfoContentDescription: "1 hora de  meeting room ou 1 hora de open desk."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "Mais benefícios",
            subInfoContentDescription: "Não está disponível"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Não está disponível"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "R$ 49,00 mês. Se quiser experimentar por apenas 1 mês, você paga R$ 60,00.",
            subInfoContentActionName: "VEJA AQUI"
        }
    },
    {
        headerContent: {
            headerContentTitle: "OPEN DESK",
            headerContentPrice: "R$ 575,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerContentBackgroundUrl: "/assets/images/work-space-opendesk-background.jpg"
        },

        descriptionContent: "Acesso a qualquer desk disponível na área comum do +55Lab em três locais diferentes: .work, .house e .store. Esse plano inclui o membership do +55.community e 1 hora de meeting room por mês.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "É um espaço reservado para você chegar e produzir sem preocupações, e não precisa de agendamento. É só trazer o seu laptop, escolher uma mesa e começar a trabalhar. Você encontra as estações de trabalho nos três espaços - .work, .house e .store - e pode usá-las 24h por dia nos 7 dias na semana."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Bônus",
            subInfoContentDescription: "Por mês, você ganha 1h de meeting room."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "Mais benefícios",
            subInfoContentDescription: "Não está disponível"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Sala de reunião: a partir de R$25,00/hora, Sala de conferência: a partir de R$55/hora, Sala de eventos: a partir de R$150/hora, Endereço fiscal: a partir de R$115/mês, Atendimento telefônico: R$60 + tarifário/mês, Serviços de caixa postal: R$50/mês, Serviços de impressão: R$25,00 + tarifário/mês"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 575 mês. Se quiser experimentar por apenas 1 mês, você paga a partir de R$ 685,00.",
            subInfoContentActionName: "VEJA AQUI"
        }
    },

   {
        headerContent: {
            headerContentTitle: "FIXED DESK",
            headerContentPrice: "R$ 820,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerContentBackgroundUrl: "/assets/images/work-space-fixeddesk-background.jpg"
        },

        descriptionContent: "Uma mesa pra chamar de sua em um espaço compartilhado. O plano está disponível para os espaços .work e .house e também inclui o membership do +55.community e 1 hora de meeting room por mês.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Neste plano, você pode usufruir de todos os benefícios que trabalhar em um espaço compartilhado te proporciona sem abrir mão de ter uma estação de trabalho exclusiva 24h por dia nos 7 dias da semana."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Bônus",
            subInfoContentDescription: "Por mês, você ganha 1h de meeting room."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "Mais benefícios",
            subInfoContentDescription: "Serviço de impressão, atendimento telefônico e endereço fiscal."
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Sala de reunião: a partir de R$25,00/hora, Sala de conferência: a partir de R$55/hora, Sala de eventos: a partir de R$150/hora, Endereço fiscal: a partir de R$115/mês."
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 820 mês. Se você quiser experimentar por apenas um mês, você paga a partir de R$ 945,00.",
            subInfoContentActionName: "VEJA AQUI"
        }
    },

    {
        headerContent: {
            headerContentTitle: "PRIVATE ROOM",
            headerContentPrice: "R$ 5.200/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerContentBackgroundUrl: "/assets/images/work-space-privateroom-background.jpg"
        },

        descriptionContent: "Para você que deseja uma sala exclusiva e quer criar a sua própria cultura, mas também deseja fazer parte da comunidade e garantir todos os benefícios, este é o plano ideal para impulsionar o crescimento do seu negócio.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Salas exclusivas que podem se adaptar para 1 ou mais pessoas. Todas são equipadas e preparadas para receber você e o seu negócio, e todos os membros do seu time terão acesso 24h por dia nos 7 dias da semana."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Bônus",
            subInfoContentDescription: "Por mês, você ganha 2h de meeting room."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "Mais benefícios",
            subInfoContentDescription: "Serviço de impressão, atendimento telefônico personalizado e endereço fiscal."
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Sala de reunião: a partir de R$25,00/hora, Sala de conferência: a partir de R$55/hora, Sala de eventos: a partir de R$150/hora, Endereço fiscal: a partir de R$115/mês."
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de 1800 mês, para uma pessoa. O valor é calculado de acordo com a quantidade de pessoas que utilizarão o espaço.",
            subInfoContentActionName: "VEJA AQUI"
        }
    }
    
    ],

    selectedPlan: [],

    displayType: "none",

    didInsertElement() {
        this._super(...arguments);
        this.get('changeInfoDelegate').send('setWorkspacePlansChild', this);
    },

    actions: {
        selectPlan(currentSelectedPlan) {
            if (currentSelectedPlan === "house") {
                this.set('selectedPlan', this.housePlans);
            } else if (currentSelectedPlan === "store") {
                this.set('selectedPlan', this.storePlans);
            } else if (currentSelectedPlan === "work") {
                this.set('selectedPlan', this.workspacePlans);
            }
            this.set('displayType', "flex");
        }
    }

});
