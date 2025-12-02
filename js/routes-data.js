// ===================================
// DADOS DE ROTAS
// ===================================

const ROUTES_DATA = {
    cities: [
        { id: 'sao-paulo', name: 'São Paulo' },
        { id: 'rio-janeiro', name: 'Rio de Janeiro' },
        { id: 'belo-horizonte', name: 'Belo Horizonte' },
        { id: 'brasilia', name: 'Brasília' },
        { id: 'curitiba', name: 'Curitiba' },
        { id: 'porto-alegre', name: 'Porto Alegre' },
        { id: 'salvador', name: 'Salvador' },
        { id: 'fortaleza', name: 'Fortaleza' },
        { id: 'recife', name: 'Recife' },
        { id: 'manaus', name: 'Manaus' },
        { id: 'belem', name: 'Belém' },
        { id: 'goiania', name: 'Goiânia' },
        { id: 'campinas', name: 'Campinas' },
        { id: 'santos', name: 'Santos' },
        { id: 'florianopolis', name: 'Florianópolis' }
    ],

    routes: {
        // São Paulo
        'sao-paulo-rio-janeiro': 430,
        'sao-paulo-belo-horizonte': 586,
        'sao-paulo-brasilia': 1015,
        'sao-paulo-curitiba': 408,
        'sao-paulo-porto-alegre': 1120,
        'sao-paulo-salvador': 1962,
        'sao-paulo-fortaleza': 3127,
        'sao-paulo-recife': 2660,
        'sao-paulo-manaus': 3935,
        'sao-paulo-belem': 3250,
        'sao-paulo-goiania': 926,
        'sao-paulo-campinas': 95,
        'sao-paulo-santos': 72,
        'sao-paulo-florianopolis': 705,

        // Rio de Janeiro
        'rio-janeiro-belo-horizonte': 434,
        'rio-janeiro-brasilia': 1148,
        'rio-janeiro-curitiba': 852,
        'rio-janeiro-porto-alegre': 1553,
        'rio-janeiro-salvador': 1649,
        'rio-janeiro-fortaleza': 2808,
        'rio-janeiro-recife': 2338,
        'rio-janeiro-manaus': 4390,
        'rio-janeiro-belem': 2933,
        'rio-janeiro-goiania': 1338,
        'rio-janeiro-campinas': 520,
        'rio-janeiro-santos': 490,
        'rio-janeiro-florianopolis': 1145,

        // Belo Horizonte
        'belo-horizonte-brasilia': 716,
        'belo-horizonte-curitiba': 1004,
        'belo-horizonte-porto-alegre': 1712,
        'belo-horizonte-salvador': 1372,
        'belo-horizonte-fortaleza': 2528,
        'belo-horizonte-recife': 2072,
        'belo-horizonte-manaus': 3970,
        'belo-horizonte-belem': 2824,
        'belo-horizonte-goiania': 906,
        'belo-horizonte-campinas': 590,
        'belo-horizonte-santos': 850,
        'belo-horizonte-florianopolis': 1301,

        // Brasília
        'brasilia-curitiba': 1366,
        'brasilia-porto-alegre': 2027,
        'brasilia-salvador': 1446,
        'brasilia-fortaleza': 2200,
        'brasilia-recife': 2200,
        'brasilia-manaus': 3490,
        'brasilia-belem': 2120,
        'brasilia-goiania': 209,
        'brasilia-campinas': 878,
        'brasilia-santos': 1300,
        'brasilia-florianopolis': 1673,

        // Curitiba
        'curitiba-porto-alegre': 711,
        'curitiba-salvador': 2390,
        'curitiba-fortaleza': 3555,
        'curitiba-recife': 3088,
        'curitiba-manaus': 4343,
        'curitiba-belem': 3658,
        'curitiba-goiania': 1334,
        'curitiba-campinas': 502,
        'curitiba-santos': 480,
        'curitiba-florianopolis': 300,

        // Porto Alegre
        'porto-alegre-salvador': 3090,
        'porto-alegre-fortaleza': 4247,
        'porto-alegre-recife': 3780,
        'porto-alegre-manaus': 5055,
        'porto-alegre-belem': 4370,
        'porto-alegre-goiania': 2046,
        'porto-alegre-campinas': 1025,
        'porto-alegre-santos': 1192,
        'porto-alegre-florianopolis': 476,

        // Salvador
        'salvador-fortaleza': 1389,
        'salvador-recife': 839,
        'salvador-manaus': 3970,
        'salvador-belem': 2040,
        'salvador-goiania': 1531,
        'salvador-campinas': 1962,
        'salvador-santos': 2033,
        'salvador-florianopolis': 2481,

        // Fortaleza
        'fortaleza-recife': 800,
        'fortaleza-manaus': 4377,
        'fortaleza-belem': 1607,
        'fortaleza-goiania': 2200,
        'fortaleza-campinas': 3032,
        'fortaleza-santos': 3200,
        'fortaleza-florianopolis': 3846,

        // Recife
        'recife-manaus': 4627,
        'recife-belem': 2140,
        'recife-goiania': 2200,
        'recife-campinas': 2565,
        'recife-santos': 2733,
        'recife-florianopolis': 3379,

        // Manaus
        'manaus-belem': 1294,
        'manaus-goiania': 3380,
        'manaus-campinas': 3840,
        'manaus-santos': 4007,
        'manaus-florianopolis': 4235,

        // Belém
        'belem-goiania': 2015,
        'belem-campinas': 3155,
        'belem-santos': 3322,
        'belem-florianopolis': 3550,

        // Goiânia
        'goiania-campinas': 817,
        'goiania-santos': 1091,
        'goiania-florianopolis': 1582,

        // Campinas
        'campinas-santos': 167,
        'campinas-florianopolis': 610,

        // Santos
        'santos-florianopolis': 633
    },

    // Função para obter a distância entre duas cidades
    getDistance: function(origin, destination) {
        if (origin === destination) return 0;
        
        // Tenta primeiro na ordem direta
        const key1 = `${origin}-${destination}`;
        if (this.routes[key1]) return this.routes[key1];
        
        // Tenta na ordem inversa
        const key2 = `${destination}-${origin}`;
        if (this.routes[key2]) return this.routes[key2];
        
        return null;
    },

    // Função para obter o nome da cidade pelo ID
    getCityName: function(cityId) {
        const city = this.cities.find(c => c.id === cityId);
        return city ? city.name : null;
    }
};
