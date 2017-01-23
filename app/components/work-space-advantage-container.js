import Ember from 'ember';

export default Ember.Component.extend({
    contentObject: {
        title: "VEJA OUTROS TIPOS DE LOCAÇÃO E VANTAGENS",
        description: "Para Membros e Não-Membros"
    },

    contentObjectDoubleTable: {
        image: "/assets/images/icon-address.png",
        title:"Endereço Fiscal",
        description:"Um bom endereço profissional é essencial para qualquer negócio. Por isso, oferecemos locação de endereço fiscal para pessoas físicas e jurídicas.",
        titleTable:"VOCÊ PODE ESCOLHER ENTRE DUAS OPÇÕES E DOIS ENDEREÇOS DIFERENTES",
        descriptionActionButton:"Para Contratar esse serviço",
        titleActionButton:"Acesse aqui",
        firstRowTitle:"Endereço fiscal",
        firstRowSubtitle:"R$ 95,00 mês - .store (315 Sul) / R$ 115 mês - .work (SAUS)",
        firstRowDescription:"Com este serviço, você pode registrar a sua empresa na junta comercial com um endereço privilegiado e, ainda, pode contar com o serviço de Caixa Postal para recebimento de correspondências. Ah, e não precisa ter pressa para fazer a retirada dos recebimentos, nossa equipe os gerencia e armazena por até 30 dias.",
        secondRowTitle:"Endereço fiscal e atendimento telefônico personalizado",
        secondRowSubtitle:"R$ 320,00 MÊS - serviço disponível apenas no .work (SAUS)",
        secondRowDescription:"Agora ficou fácil ter uma equipe administrativa sem sair de casa. Com este pacote, você poderá registrar e divulgar o endereço privilegiado de sua empresa, ter o serviço de gerenciamento e armazenamento de caixa postal e, além disso, contar com um(a) profissional responsável por atender uma linha telefônica exclusiva e encaminhar seus recados por e-mail."
    },

    contentObjectOneTable: {
        image: "/assets/images/icon-space.png",
        title:"Espaço de Eventos",
        firstSubtitle:"Membros:",
        firstSubtitleDescription:" a partir de R$ 150,00 / hora ou 1 crédito",
        secondSubtitle:"Não-Membros:",
        secondSubtitleDescription:" a partir de R$ 150,00",
        description:"Um bom endereço profissional é essencial para  qualquer negócio. Por isso, oferecemos pacotes para a contratação de endereço fiscal.",
        descriptionActionButton:"Se quiser alugar uma de nossas sala",
        titleActionButton:"Faça aqui",
        titleTable:"ACOMODAÇÕES E SUPORTES DISPONÍVEIS:",
        itensTable:["Work (30 pessoas)","Ar Condicionado","30 mesas e cadeiras","TV","Projetor + Tela","Cabos HDMI VGA","Água e café","Local para coffee break","Serviço de limpeza"]
    },

    contentObjectWithoutTable: {
        image: "/assets/images/meeting-icon.png",
        title:"Sala de Reunião",
        
        firstSubtitle:".WORK",
        firstSubsubtitle:"Sala de reunião para 5 pessoas",
        firstPriceFirstSubsubtitle:" R$25,00 hora",
        secondPriceFirstSubsubtitle:" R$35,00 hora",

        secondSubtitle:".HOUSE (ventilador, mesa e cadeira)",
        secondSubsubtitle:"Sala de reunião para 2 pessoas",
        firstPriceSecondSubsubtitle:" R$15,00 hora",
        secondPriceSecondSubsubtitle:" R$25,00 hora",
        thirdSubsubtitle:"Sala de reunião para 4 pessoas",
        firstPriceThirdSubsubtitle:" R$25,00 hora",
        secondPriceThirdSubsubtitle:" R$35,00 hora",

        firstTitlePriceSubsubtitle:"Membros:",
        secondTitlePriceSubsubtitle:"Não-Membros:",

        description:"Uma reunião precisa ser produtiva, mesmo. E nossas salas de reuniões, que acomodam até 5 pessoas, são preparadas para isso. Elas são completamente equipadas com tudo o que você precisa em um local de  reunião: água, café, equipamentos audiovisuais e internet dedicada. Temos salas de reunião em dois espaços diferentes: .work e .house, com diferenças nos recursos disponíveis e nos preços.",
        descriptionActionButton:"Se quiser alugar uma de nossas sala",
        titleActionButton:"Faça aqui"
        
    },

    contentSecondObjectWithoutTable: {
        image: "/assets/images/icon-conference.png",
        title:"Sala de Conferência",
        
        firstSubtitle:".HOUSE (para até 6 pessoas)",
        firstPriceFirstSubtitle:" R$55,00 hora",
        secondPriceFirstSubtitle:" R$65,00 hora",

        secondSubtitle:".WORK (para até 10 pessoas)",
        firstPriceSecondSubtitle:" R$55,00 hora",
        secondPriceSecondSubtitle:" R$65,00 hora",

        firstTitlePriceSubtitle:"Membros:",
        secondTitlePriceSubtitle:"Não-Membros:",

        description:"Entendemos as dificuldades que podem surgir quando precisamos reunir todo mundo. Por isso, também temos salas preparadas para a realização de videoconferências que acomodam até 10 pessoas disponíveis para locação em nossos espaços.",
        descriptionActionButton:"Se quiser alugar uma de nossas sala",
        titleActionButton:"Faça aqui"
    },

    contentSecondObjectOneTable: {
        image: "/assets/images/showroom-icon.png",
        title:"Showroom",
        description:"Nesse espaço seu produto fica exposto com a visibilidade que precisa, em um box do tamanho ideal para você. Não vamos ficar com qualquer percentual de venda e nem fazer estoque… a ideia aqui é que os clientes comprem direto com você usando o canal de sua preferência – loja online, whatsapp, facebook, etc. Ah, e nossa equipe estará preparada para fazer a ponte entre os visitantes e você!",
        descriptionActionButton:"Se quiser alugar uma de nossas acomodações",
        titleActionButton:"Faça aqui",
        titleTable:"INCLUI E ACOMODAÇÕES PARA O SEU PRODUTO:",
        itensWithIconTable:["Nichos 0,40m x 0,40m","Nichos 1,36m x 1,10m","Nichos 0,60m x 0,60m","Nichos 1,00m x 0,30m","Nichos 0,90m x 0,30m","Carrinho","Prateleira 1,85m x 0,70m","Prateleira 2,05m x 0,40m"],
        itensTable:["8 unidades","2 unidades","2 unidades","2 unidades","2 unidades","1 unidade","2 unidades","1 unidade","R$ 175,00","R$ 350,00","R$ 220,00","R$ 280,00","R$ 280,00","R$ 535,00","R$ 390,00","R$ 430,00"]
    }
    
});
