// =============================================
// CONFIGURAÇÕES
// =============================================

const CONFIG = {
    estadoPadrao: "RJ",
    votosIniciais: 0
};


// =============================================
// PRESIDENTE
// =============================================

const presidentes = [

    {
        nome: "Luiz Inácio Lula da Silva",
        cargo: "Presidente",
        foto: "lula.jpg",
        numero: 13,
        partido: "PT",
        votos: 0
    },

    {
        nome: "Flávio Bolsonaro",
        cargo: "Presidente",
        foto: "flavio.jpg",
        numero: 22,
        partido: "PL",
        votos: 0
    },

    {
        nome: "Samara Martins",
        cargo: "Presidente",
        foto: "samara.webp",
        numero: 80,
        partido: "UP",
        votos: 0
    },

    {
        nome: "Romeu Zema",
        cargo: "Presidente",
        foto: "zema.jpg",
        numero: 30,
        partido: "NOVO",
        votos: 0
    },

    {
        nome: "Hertz Dias",
        cargo: "Presidente",
        foto: "hertz1.jpg",
        numero: 16,
        partido: "PSTU",
        votos: 0
    },

    {
        nome: "Edmilson Costa",
        cargo: "Presidente",
        foto: "edmilson.webp",
        numero: 21,
        partido: "PCB",
        votos: 0
    },

    {
        nome: "Renan Santos",
        cargo: "Presidente",
        foto: "renan.webp",
        numero: 14,
        partido: "MISSÃO",
        votos: 0
    },

    {
        nome: "Ronaldo Caiado",
        cargo: "Presidente",
        foto: "caiado.png",
        numero: 55,
        partido: "PSD",
        votos: 0
    },

    {
        nome: "Rui Costa Pimenta",
        cargo: "Presidente",
        foto: "rui.jpg",
        numero: 29,
        partido: "PCO",
        votos: 0
    },

    {
        nome: "Wilson Grassi",
        cargo: "Presidente",
        foto: "wilson.jpg",
        numero: 35,
        partido: "DEMOCRATA",
        votos: 0
    },

    {
        nome: "Clariana Barão",
        cargo: "Presidente",
        foto: "clariana.jpg",
        numero: 27,
        partido: "DC",
        votos: 0
    },

    {
        nome: "Augusto Cury",
        cargo: "Presidente",
        foto: "cury.jpeg",
        numero: 70,
        partido: "DC",
        votos: 0
    }

];


// =============================================
// GOVERNADOR - RIO DE JANEIRO
// =============================================

const governadoresRJ = [

    {
        nome: "Douglas Ruas",
        cargo: "Governador",
        foto: "douglas-ruas.jpg",
        numero: 22,
        partido: "PL",
        votos: 0
    },

    {
        nome: "André Marinho",
        cargo: "Governador",
        foto: "andre-marinho.webp",
        numero: 30,
        partido: "NOVO",
        votos: 0
    },

    {
        nome: "Coronel Busnello",
        cargo: "Governador",
        foto: "coronel-busnello.jpg",
        numero: 14,
        partido: "MISSÃO",
        votos: 0
    },

    {
        nome: "Cyro Garcia",
        cargo: "Governador",
        foto: "cyro-garcia.jpg",
        numero: 16,
        partido: "PSTU",
        votos: 0
    },

    {
        nome: "Eduardo Paes",
        cargo: "Governador",
        foto: "eduardo-paes.jpg",
        numero: 55,
        partido: "PSD",
        votos: 0
    },

    {
        nome: "Anthony Garotinho",
        cargo: "Governador",
        foto: "garotinho.webp",
        numero: 10,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Juliete Pantoja",
        cargo: "Governador",
        foto: "juliete-pantoja.webp",
        numero: 80,
        partido: "UP",
        votos: 0
    },

    {
        nome: "Luan Monteiro",
        cargo: "Governador",
        foto: "luan-monteiro.webp",
        numero: 29,
        partido: "PCO",
        votos: 0
    },

    {
        nome: "William Siri",
        cargo: "Governador",
        foto: "william-siri.jpg",
        numero: 50,
        partido: "PSOL",
        votos: 0
    }

];


// =============================================
// GOVERNADOR - SÃO PAULO
// =============================================

const governadoresSP = [

    {
        nome: "Tarcísio de Freitas",
        cargo: "Governador",
        foto: "tarcisio.jpg",
        numero: 10,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Fernando Haddad",
        cargo: "Governador",
        foto: "haddad.jpg",
        numero: 13,
        partido: "PT",
        votos: 0
    },

    {
        nome: "Carlos Machado",
        cargo: "Governador",
        foto: "carlos-machado.jpg",
        numero: 21,
        partido: "PCB",
        votos: 0
    },

    {
        nome: "Vivian Mendes",
        cargo: "Governador",
        foto: "vivian-mendes.jpg",
        numero: 80,
        partido: "UP",
        votos: 0
    },

    {
        nome: "Vera Lúcia",
        cargo: "Governador",
        foto: "vera-lucia.jpg",
        numero: 16,
        partido: "PSTU",
        votos: 0
    },

    {
        nome: "Izadora Dias",
        cargo: "Governador",
        foto: "izadora-dias.jpg",
        numero: 29,
        partido: "PCO",
        votos: 0
    },

    {
        nome: "Policial Edjane",
        cargo: "Governador",
        foto: "policial-edjane.jpg",
        numero: 36,
        partido: "AGIR",
        votos: 0
    }

];


// =============================================
// SENADOR - RIO DE JANEIRO
// =============================================

const senadoresRJ = [

    {
        nome: "Benedita da Silva",
        cargo: "Senador",
        foto: "benedita.jpg",
        numero: 131,
        partido: "PT",
        votos: 0
    },

    {
        nome: "Carlos Portinho",
        cargo: "Senador",
        foto: "carlos-portinho.jpg",
        numero: 222,
        partido: "PL",
        votos: 0
    },

    {
    nome: "Carlos Jordy",
    cargo: "Senador",
    foto: "carlos-jordy.jpg",
    numero: 221,
    partido: "PL",
    votos: 0
},

{
    nome: "Waguinho",
    cargo: "Senador",
    foto: "waguinho.avif",
    numero: 101,
    partido: "REPUBLICANOS",
    votos: 0
},

{
    nome: "Marcos Dias",
    cargo: "Senador",
    foto: "marcos-dias.avif",
    numero: 200,
    partido: "PODE",
    votos: 0
},

{
    nome: "Mônica Benício",
    cargo: "Senador",
    foto: "monica-benicio.jpeg",
    numero: 500,
    partido: "PSOL",
    votos: 0
},

{
    nome: "Luciano Mattos",
    cargo: "Senador",
    foto: "luciano-mattos.jpg",
    numero: 280,
    partido: "PRTB",
    votos: 0
},


    {
        nome: "Marcelo Crivella",
        cargo: "Senador",
        foto: "crivella.jpg",
        numero: 100,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Mônica Benício",
        cargo: "Senador",
        foto: "monica-benicio.jpg",
        numero: 500,
        partido: "PSOL",
        votos: 0
    },

    {
        nome: "Pedro Paulo",
        cargo: "Senador",
        foto: "pedro-paulo.jpg",
        numero: 555,
        partido: "PSD",
        votos: 0
    }

];


// =============================================
// SENADOR - SÃO PAULO
// =============================================

const senadoresSP = [

    {
        nome: "André do Prado",
        cargo: "Senador",
        foto: "andre-do-prado.jpeg",
        numero: 222,
        partido: "PL",
        votos: 0
    },

    {
    nome: "Geraldo Rufino",
    cargo: "Senador",
    foto: "geraldo-rufino.jpg",
    numero: 200,
    partido: "PODE",
    votos: 0
},


    {
        nome: "Guilherme Derrite",
        cargo: "Senador",
        foto: "guilherme-derrite.jpg",
        numero: 111,
        partido: "PP",
        votos: 0
    },

    {
        nome: "Marina Silva",
        cargo: "Senador",
        foto: "marina-silva.jpg",
        numero: 180,
        partido: "REDE",
        votos: 0
    },

    {
        nome: "Simone Tebet",
        cargo: "Senador",
        foto: "simone-tebet.jpg",
        numero: 400,
        partido: "PSB",
        votos: 0
    },

    {
        nome: "Soninha Francine",
        cargo: "Senador",
        foto: "soninha-francine.jpg",
        numero: 232,
        partido: "CIDADANIA",
        votos: 0
    }

];


// =============================================
// DEPUTADO FEDERAL - RIO DE JANEIRO
// =============================================

const deputadosFederaisRJ = [

    {
        nome: "Thiago Gagliasso",
        cargo: "Deputado Federal",
        foto: "thiago-gagliasso.webp",
        numero: 2227,
        partido: "PL",
        votos: 0
    },

    {
    nome: "Nikolas Ferreira",
    cargo: "Deputado Federal",
    foto: "nikolas-ferreira.webp",
    numero: 2222,
    partido: "PL",
    votos: 0
},

{
    nome: "Renato Cozzolino",
    cargo: "Deputado Federal",
    foto: "renato-cozzolino.webp",
    numero: 1101,
    partido: "PP",
    votos: 0
},

{
    nome: "Edmundo",
    cargo: "Deputado Federal",
    foto: "edmundo.webp", 
    numero: 4500,
    partido: "PSDB",
    votos: 0
},

{
    nome: "Otoni de Paula",
    cargo: "Deputado Federal",
    foto: "otoni-de-paula.jpg",
    numero: 5550,
    partido: "PSD",
    votos: 0
},

{
    nome: "Luiz Lima",
    cargo: "Deputado Federal",
    foto: "luiz-lima.jpg",
    numero: 3030,
    partido: "NOVO",
    votos: 0
},

{
    nome: "Eduardo Bandeira de Mello",
    cargo: "Deputado Federal",
    foto: "bandeira-de-mello.jpg",
    numero: 4333,
    partido: "PV",
    votos: 0
},

{
    nome: "Marcos Braz",
    cargo: "Deputado Federal",
    foto: "marcos-braz.jpg",
    numero: 4555,
    partido: "PSDB",
    votos: 0
},

    {
    nome: "Luan Lennon",
    cargo: "Deputado Federal",
    foto: "luan-lennon.webp",
    numero: 1188,
    partido: "PP",
    votos: 0
},

    {
        nome: "Adalberto",
        cargo: "Deputado Federal",
        foto: "adalberto.webp",
        numero: 1063,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Adele Fatima",
        cargo: "Deputado Federal",
        foto: "adele-fatima.jpeg",
        numero: 1588,
        partido: "MDB",
        votos: 0
    },

    {
        nome: "Adelson Guedes",
        cargo: "Deputado Federal",
        foto: "adelson-guedes.jpeg",
        numero: 1311,
        partido: "PT",
        votos: 0
    },

    {
        nome: "Adely Ozon",
        cargo: "Deputado Federal",
        foto: "adely-ozon.jpg",
        numero: 1537,
        partido: "MDB",
        votos: 0
    },

    {
        nome: "Ademir Máximo Respeito",
        cargo: "Deputado Federal",
        foto: "ademir-maximo-respeito.avif",
        numero: 4069,
        partido: "PSB",
        votos: 0
    }

];


// =============================================
// DEPUTADO FEDERAL - SÃO PAULO
// =============================================

const deputadosFederaisSP = [

    {
        nome: "Adams Coletivo Com Cury",
        cargo: "Deputado Federal",
        foto: "adams-coletivo-com-cury.jpeg",
        numero: 7075,
        partido: "AVANTE",
        votos: 0
    },

    {
    nome: "Manoel Gomes",
    cargo: "Deputado Federal",
    foto: "manoel-gomes.webp",
    numero: 7030,
    partido: "AVANTE",
    votos: 0
},
    {
    nome: "Alex Manente",
    cargo: "Deputado Federal",
    foto: "alex-manente.jpg",
    numero: 2323,
    partido: "CIDADANIA",
    votos: 0
},

    {
    nome: "Adrilles Jorge",
    cargo: "Deputado Federal",
    foto: "adrilles-jorge.avif",
    numero: 4401,
    partido: "UNIÃO",
    votos: 0
},

    {
    nome: "Adriana Ventura",
    cargo: "Deputado Federal",
    foto: "adriana-ventura.jpg",
    numero: 3030,
    partido: "NOVO",
    votos: 0
},
 
    {
        nome: "Abel Fiel",
        cargo: "Deputado Federal",
        foto: "abel-fiel.jpeg",
        numero: 4507,
        partido: "PSDB",
        votos: 0
    },

    {
        nome: "Abençoado da Bahia",
        cargo: "Deputado Federal",
        foto: "abencoado-da-bahia.jpeg",
        numero: 2268,
        partido: "PL",
        votos: 0
    },

    {
        nome: "Abou Anni",
        cargo: "Deputado Federal",
        foto: "abou-anni.jpg",
        numero: 2001,
        partido: "PODE",
        votos: 0
    },

    {
        nome: "Ada Xavier",
        cargo: "Deputado Federal",
        foto: "ada-xavier.jpg",
        numero: 1575,
        partido: "MDB",
        votos: 0
    }

];


// =============================================
// DEPUTADO ESTADUAL - RIO DE JANEIRO
// =============================================

const deputadosEstaduaisRJ = [

    {
        nome: "Valdecy da Saúde",
        cargo: "Deputado Estadual",
        foto: "Valdecy-da-Saúde.jpg",
        numero: 22615,
        partido: "PL",
        votos: 0
    },

    {
    nome: "Jackson Souza",
    cargo: "Deputado Estadual",
    foto: "jackson-souza.jpg",
    numero: 27027,
    partido: "DC",
    votos: 0
    },

    {
    nome: "Dra. Gabriela",
    cargo: "Deputado Estadual",
    foto: "dra-gabriela.jpeg",
    numero: 22122,
    partido: "PL",
    votos: 0
},

{
    nome: "Guilherme Delaroli",
    cargo: "Deputado Estadual",
    foto: "guilherme-delaroli.jpg",
    numero: 22222,
    partido: "PL",
    votos: 0
},

{
    nome: "Cabo Pereira",
    cargo: "Deputado Federal",
    foto: "cabo-pereira.webp",
    numero: 7062,
    partido: "AVANTE",
    votos: 0
},

    {
        nome: "Renata Souza",
        cargo: "Deputado Estadual",
        foto: "renata-souza.webp",
        numero: 50007,
        partido: "PSOL",
        votos: 0
    },

    {
        nome: "Márcio Canella",
        cargo: "Deputado Estadual",
        foto: "marcio-canella.jpg",
        numero: 44444,
        partido: "UNIÃO",
        votos: 0
    },

    {
        nome: "Dionisio de Souza Lins",
        cargo: "Deputado Estadual",
        foto: "dionisio-de-souza-lins.webp",
        numero: 11111,
        partido: "PP",
        votos: 0
    },

    {
        nome: "Jonas Fernando da Silva",
        cargo: "Deputado Estadual",
        foto: "jonas-fernando-da-silva.jpg",
        numero: 44044,
        partido: "UNIÃO",
        votos: 0
    },

    {
        nome: "Tatiana Oliveira",
        cargo: "Deputado Estadual",
        foto: "tatiana-de-paula.webp",
        numero: 11456,
        partido: "PP",
        votos: 0
    },

    {
        nome: "Cris da Sustentabilidade",
        cargo: "Deputado Estadual",
        foto: "jacivania-cristina-dias.jpg",
        numero: 25220,
        partido: "PRD",
        votos: 0
    },

    {
        nome: "Rubens da Indicação Social",
        cargo: "Deputado Estadual",
        foto: "rubens-de-araujo-pires.webp",
        numero: 11155,
        partido: "PP",
        votos: 0
    },

    {
        nome: "Alan Lopes",
        cargo: "Deputado Estadual",
        foto: "alan-lopes.jpg",
        numero: 22377,
        partido: "PL",
        votos: 0
    },

    {
        nome: "Alexandre Freitas",
        cargo: "Deputado Estadual",
        foto: "alexandre-freitas.jpg",
        numero: 30007,
        partido: "NOVO",
        votos: 0
    },

    {
        nome: "Alexandre Isquierdo Malafaia",
        cargo: "Deputado Estadual",
        foto: "alexandre-isquierdo-malafaia.jpg",
        numero: 22077,
        partido: "PL",
        votos: 0
    },

    {
        nome: "Alexandre Knoploch",
        cargo: "Deputado Estadual",
        foto: "alexandre-knoploch.jpeg",
        numero: 22722,
        partido: "PL",
        votos: 0
    },

    {
        nome: "Adilson Pires",
        cargo: "Deputado Estadual",
        foto: "adilson-pires.webp",
        numero: 13620,
        partido: "PT",
        votos: 0
    },

    {
        nome: "Alan Mansur",
        cargo: "Deputado Estadual",
        foto: "alan-mansur.jpg",
        numero: 40222,
        partido: "PSB",
        votos: 0
    },

    {
        nome: "Aguinaldo Luis",
        cargo: "Deputado Estadual",
        foto: "aguinaldo-luis.webp",
        numero: 55007,
        partido: "PSD",
        votos: 0
    },

    {
        nome: "Adriana França",
        cargo: "Deputado Estadual",
        foto: "adriana-franca.webp",
        numero: 10345,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Conrado",
        cargo: "Deputado Estadual",
        foto: "conrado.jpeg",
        numero: 27200,
        partido: "DC",
        votos: 0
    },

    {
        nome: "Sargento Britto",
        cargo: "Deputado Estadual",
        foto: "sargento-britto.jpg",
        numero: 10001,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Sargento Flavia Louzada",
        cargo: "Deputado Estadual",
        foto: "sargento-flavia-louzada.jpg",
        numero: 11190,
        partido: "PP",
        votos: 0
    },

    {
        nome: "Sargento Gustavo",
        cargo: "Deputado Estadual",
        foto: "sargento-gustavo.jpeg",
        numero: 23454,
        partido: "CIDADANIA",
        votos: 0
    },

    {
        nome: "Sérgio Fernandes",
        cargo: "Deputado Estadual",
        foto: "sergio-fernandes.jpg",
        numero: 55000,
        partido: "PSD",
        votos: 0
    },

    {
        nome: "Serginho Moreno",
        cargo: "Deputado Estadual",
        foto: "serginho-moreno.webp",
        numero: 55040,
        partido: "PSD",
        votos: 0
    },

    {
        nome: "Rui Saldanha",
        cargo: "Deputado Estadual",
        foto: "rui-saldanha.webp",
        numero: 14192,
        partido: "MISSÃO",
        votos: 0
    },

    {
        nome: "Serginho",
        cargo: "Deputado Estadual",
        foto: "serginho.webp",
        numero: 12123,
        partido: "PDT",
        votos: 0
    }

];


// =============================================
// DEPUTADO ESTADUAL - SÃO PAULO
// =============================================

const deputadosEstaduaisSP = [

{
    nome: "Eduardo Suplicy",
    cargo: "Deputado Estadual",
    foto: "eduardo-suplicy.jpeg",
    numero: 13133,
    partido: "PT",
    votos: 0
},

{
    nome: "Carlos Giannazi",
    cargo: "Deputado Estadual",
    foto: "carlos-giannazi.jpg",
    numero: 50789,
    partido: "PSOL",
    votos: 0
},

{
    nome: "Danilo Balas",
    cargo: "Deputado Estadual",
    foto: "danilo-balas.jpg",
    numero: 22007,
    partido: "PL",
    votos: 0
},

{
    nome: "Luiza Erundina",
    cargo: "Deputado Estadual",
    foto: "luiza-erundina.jpg",
    numero: 50123,
    partido: "PSOL",
    votos: 0
},

{
    nome: "Leci Brandão",
    cargo: "Deputado Estadual",
    foto: "leci-brandao.jpg",
    numero: 50555,
    partido: "PT",
    votos: 0
},
    {
        nome: "Abdul Jarour",
        cargo: "Deputado Estadual",
        foto: "abdul-jarour.webp",
        numero: 40999,
        partido: "PSB",
        votos: 0
    },

    {
        nome: "Abelardo",
        cargo: "Deputado Estadual",
        foto: "abelardo.jpg",
        numero: 10900,
        partido: "REPUBLICANOS",
        votos: 0
    },

    {
        nome: "Abidan Henrique",
        cargo: "Deputado Estadual",
        foto: "abidan-henrique.jpg",
        numero: 40000,
        partido: "PSB",
        votos: 0
    },

    {
        nome: "Acacio Coletivo do Povo",
        cargo: "Deputado Estadual",
        foto: "acacio-coletivo-do-povo.webp",
        numero: 27337,
        partido: "DC",
        votos: 0
    },

    {
        nome: "Adalberto Freitas",
        cargo: "Deputado Estadual",
        foto: "adalberto-freitas.jpg",
        numero: 15707,
        partido: "MDB",
        votos: 0
    }

];// =============================================
// CRIAR CARD
// =============================================

function criarCard(candidato) {

    const card = document.createElement("div");

    card.className = "card";


    const nome = document.createElement("h2");

    nome.textContent = candidato.nome;


    const cargo = document.createElement("p");

    cargo.textContent = "Cargo: " + candidato.cargo;


    const numero = document.createElement("p");

    numero.textContent = "Número: " + candidato.numero;


    const partido = document.createElement("p");

    partido.textContent = "Partido: " + candidato.partido;


    const imagem = document.createElement("img");

    imagem.className = "foto-candidato";

    imagem.src = candidato.foto;

    imagem.alt = candidato.nome;

    imagem.onerror = function () {
        this.style.display = "none";
    };


    const votos = document.createElement("p");

    votos.className = "votos";

    votos.textContent =
        "Votos: " +
        Number(candidato.votos || 0).toLocaleString("pt-BR");


    const porcentagem = document.createElement("p");

    porcentagem.className = "porcentagem";

    porcentagem.textContent = "0,00%";


    const barra = document.createElement("div");

    barra.className = "barra";


    const progresso = document.createElement("div");

    progresso.className = "progresso";

    progresso.style.width = "0%";


    barra.appendChild(progresso);


    card.appendChild(imagem);

    card.appendChild(nome);

    card.appendChild(cargo);

    card.appendChild(numero);

    card.appendChild(partido);

    card.appendChild(votos);

    card.appendChild(porcentagem);

    card.appendChild(barra);


    return card;

}


// =============================================
// RENDERIZAR CANDIDATOS
// =============================================

function renderizarCandidatos(lista, id) {

    const container = document.getElementById(id);


    if (!container) {

        return;

    }


    container.innerHTML = "";


    if (!lista || lista.length === 0) {

        const mensagem =
            document.createElement("p");

        mensagem.textContent =
            "Nenhum candidato cadastrado ainda.";

        container.appendChild(mensagem);

        return;

    }


    lista.forEach(function (candidato) {

        container.appendChild(
            criarCard(candidato)
        );

    });


    atualizarPorcentagens(
        container,
        lista
    );

}


// =============================================
// ATUALIZAR PORCENTAGENS
// =============================================

function atualizarPorcentagens(container, lista) {

    if (!container || !lista || lista.length === 0) {

        return;

    }


    const totalVotos = lista.reduce(
        function (total, candidato) {

            return total + Number(
                candidato.votos || 0
            );

        },
        0
    );


    const cards =
        container.querySelectorAll(".card");


    cards.forEach(function (card, index) {

        const candidato = lista[index];

        const votos =
            Number(candidato.votos || 0);


        let porcentagem = 0;


        if (totalVotos > 0) {

            porcentagem =
                (votos / totalVotos) * 100;

        }


        const textoPorcentagem =
            card.querySelector(".porcentagem");


        const progresso =
            card.querySelector(".progresso");


        if (textoPorcentagem) {

            textoPorcentagem.textContent =
                porcentagem.toFixed(2)
                .replace(".", ",") + "%";

        }


        if (progresso) {

            progresso.style.width =
                porcentagem + "%";

        }

    });

}


// =============================================
// MENU / ABAS
// =============================================

const linksMenu =
    document.querySelectorAll(".menu a");


const abas =
    document.querySelectorAll(".aba-conteudo");


function abrirAba(id) {

    abas.forEach(function (aba) {

        aba.classList.remove(
            "aba-ativa"
        );

    });


    const aba =
        document.querySelector(id);


    if (!aba) {

        return;

    }


    aba.classList.add(
        "aba-ativa"
    );


    history.replaceState(
        null,
        "",
        id
    );

}


linksMenu.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const id =
                this.getAttribute("href");


            abrirAba(id);

        }
    );

});


// =============================================
// ABRIR ABA INICIAL
// =============================================

function abrirAbaInicial() {

    const hash =
        window.location.hash;


    if (
        hash &&
        document.querySelector(hash)
    ) {

        abrirAba(hash);

    } else {

        abrirAba("#presidente");

    }

}


// =============================================
// CARREGAR DADOS
// =============================================

function carregarDados() {

    renderizarCandidatos(
        presidentes,
        "lista-presidente"
    );


    renderizarCandidatos(
        governadoresRJ,
        "lista-governador"
    );


    renderizarCandidatos(
        senadoresRJ,
        "lista-senador"
    );


    renderizarCandidatos(
        deputadosFederaisRJ,
        "lista-deputado-federal"
    );


    renderizarCandidatos(
        deputadosEstaduaisRJ,
        "lista-deputado-estadual"
    );

}


// =============================================
// GOVERNADOR - TROCA DE ESTADO
// =============================================

const selectGovernador =
    document.getElementById(
        "estado-governador"
    );


if (selectGovernador) {

    selectGovernador.addEventListener(
        "change",
        function () {

            if (this.value === "SP") {

                renderizarCandidatos(
                    governadoresSP,
                    "lista-governador"
                );

            } else {

                renderizarCandidatos(
                    governadoresRJ,
                    "lista-governador"
                );

            }

        }
    );

}


// =============================================
// SENADOR - TROCA DE ESTADO
// =============================================

const selectSenador =
    document.getElementById(
        "estado-senador"
    );


if (selectSenador) {

    selectSenador.addEventListener(
        "change",
        function () {

            if (this.value === "SP") {

                renderizarCandidatos(
                    senadoresSP,
                    "lista-senador"
                );

            } else {

                renderizarCandidatos(
                    senadoresRJ,
                    "lista-senador"
                );

            }

        }
    );

}


// =============================================
// DEPUTADO FEDERAL - TROCA DE ESTADO
// =============================================

const selectDeputadoFederal =
    document.getElementById(
        "estado-deputado-federal"
    );


if (selectDeputadoFederal) {

    selectDeputadoFederal.addEventListener(
        "change",
        function () {

            if (this.value === "SP") {

                renderizarCandidatos(
                    deputadosFederaisSP,
                    "lista-deputado-federal"
                );

            } else {

                renderizarCandidatos(
                    deputadosFederaisRJ,
                    "lista-deputado-federal"
                );

            }

        }
    );

}


// =============================================
// DEPUTADO ESTADUAL - TROCA DE ESTADO
// =============================================

const selectDeputadoEstadual =
    document.getElementById(
        "estado-deputado-estadual"
    );


if (selectDeputadoEstadual) {

    selectDeputadoEstadual.addEventListener(
        "change",
        function () {

            if (this.value === "SP") {

                renderizarCandidatos(
                    deputadosEstaduaisSP,
                    "lista-deputado-estadual"
                );

            } else {

                renderizarCandidatos(
                    deputadosEstaduaisRJ,
                    "lista-deputado-estadual"
                );

            }

        }
    );

}


// =============================================
// STATUS DA APURAÇÃO
// =============================================

function atualizarStatus() {

    const elemento =
        document.querySelector(
            ".ultima-atualizacao"
        );


    if (!elemento) {

        return;

    }


    const agora =
        new Date();


    const data =
        agora.toLocaleDateString(
            "pt-BR"
        );


    const hora =
        agora.toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    elemento.textContent =
        "Última atualização: " +
        data +
        " às " +
        hora;

}


// =============================================
// INICIAR SITE
// =============================================

carregarDados();

abrirAbaInicial();

atualizarStatus();
// =============================================
// AVISO SOBRE A FONTE DOS DADOS
// =============================================

function criarAvisoFonteTSE() {

    // Evita criar o aviso duas vezes
    if (document.getElementById("aviso-tse")) {
        return;
    }

    const status = document.querySelector(".ultima-atualizacao");

    if (!status) {
        return;
    }

    const aviso = document.createElement("div");

    aviso.id = "aviso-tse";

    aviso.innerHTML = `
    <div class="aviso-tse-icone">🛡️</div>

    <div class="aviso-tse-conteudo">

        <strong>Fonte dos dados eleitorais</strong>

        <p>
            Os dados eleitorais oficiais apresentados neste projeto
            são obtidos a partir das informações disponibilizadas
            pelo Tribunal Superior Eleitoral (TSE).
        </p>

        <p>
            O projeto utiliza os dados oficiais do TSE como fonte
            para a apresentação das informações eleitorais.
        </p>

    </div>
`;

    status.insertAdjacentElement(
        "afterend",
        aviso
    );
}


// Criar o aviso depois que a página carregar
criarAvisoFonteTSE();