// Dados com coordenadas corrigidas para a planta do evento
// Coordenadas ajustadas para uma imagem de aproximadamente 800x600px
const pontosInteresse = [
    // ========================================
    // ALIMENTAÇÃO
    // ========================================
    {
        id: 1,
        nome: "Alimentação",
        categoria: "alimentacao_ouvintes",
        coordenadas: {
            x: 350, y: 75,
            lat: -23.550789, lng: -46.633012
        },
        endereco: "Área de Alimentação Norte",
        descricao: "Ponto de alimentação principal",
        horario: "07:00 - 22:00",
        distancia: null
    },
    {
        id: 2,
        nome: "Buffet",
        categoria: "alimentacao_ouvintes",
        coordenadas: {
            x: 395, y: 148,
            lat: -23.550345, lng: -46.633567
        },
        endereco: "Área do Buffet Central",
        descricao: "Buffet principal do evento",
        horario: "11:00 - 21:00",
        distancia: null
    },
    {
        id: 3,
        nome: "Alimentação dos Competidores",
        categoria: "alimentacao_jogadores",
        coordenadas: {
            x: 393, y: 201,
            lat: -23.550890, lng: -46.633890
        },
        endereco: "Área Restrita - Atletas",
        descricao: "Alimentação exclusiva para competidores",
        horario: "06:00 - 20:00",
        distancia: null
    },

    // ========================================
    // CAMPOS ESPORTIVOS
    // ========================================
    {
        id: 4,
        nome: "Campo de Futebol",
        categoria: "campo_futebol",
        coordenadas: {
            x: 345, y: 304,
            lat: -23.550567, lng: -46.633234
        },
        endereco: "Campo Principal",
        descricao: "Campo principal de futebol",
        horario: "06:00 - 22:00",
        distancia: null
    },
    {
        id: 5,
        nome: "Campo do Resende",
        categoria: "campo_futebol",
        coordenadas: {
            x: 479, y: 178,
            lat: -23.550123, lng: -46.633678
        },
        endereco: "Setor Resende",
        descricao: "Campo do Resende",
        horario: "07:00 - 21:00",
        distancia: null
    },
    {
        id: 6,
        nome: "Quadra de Tênis",
        categoria: "quadra_tenis",
        coordenadas: {
            x: 415, y: 394,
            lat: -23.550456, lng: -46.633234
        },
        endereco: "Área de Tênis",
        descricao: "Quadra oficial de tênis",
        horario: "07:00 - 21:00",
        distancia: null
    },
    {
        id: 7,
        nome: "Piscina",
        categoria: "esportes",
        coordenadas: {
            x: 495, y: 317,
            lat: -23.550678, lng: -46.633234
        },
        endereco: "Área Aquática",
        descricao: "Piscina para competições",
        horario: "06:00 - 20:00",
        distancia: null
    },

    // ========================================
    // BANHEIROS
    // ========================================
    {
        id: 8,
        nome: "Banheiros",
        categoria: "banheiros",
        coordenadas: {
            x: 350, y: 253,
            lat: -23.550234, lng: -46.633456
        },
        endereco: "Área Central",
        descricao: "Banheiros principais",
        horario: "24h",
        distancia: null
    },
    {
        id: 9,
        nome: "Banheiros",
        categoria: "banheiros",
        coordenadas: {
            x: 430, y: 410,
            lat: -23.550345, lng: -46.633567
        },
        endereco: "Área Sul",
        descricao: "Banheiros secundários",
        horario: "24h",
        distancia: null
    },

    // ========================================
    // ENTRADA E ACESSO
    // ========================================
    {
        id: 10,
        nome: "Acesso para a Área de Alimentação",
        categoria: "entrada_saida",
        coordenadas: {
            x: 395, y: 254,
            lat: -23.550234, lng: -46.633445
        },
        endereco: "Acesso Principal",
        descricao: "Entrada para área de alimentação",
        horario: "24h",
        distancia: null
    },
    {
        id: 11,
        nome: "Entrada - Tenda de Acesso",
        categoria: "entrada_saida",
        coordenadas: {
            x: 505, y: 579,
            lat: -23.550111, lng: -46.633333
        },
        endereco: "Entrada Principal",
        descricao: "Tenda de acesso principal",
        horario: "06:00 - 24:00",
        distancia: null
    },

    // ========================================
    // SERVIÇOS
    // ========================================
    {
        id: 12,
        nome: "Guarda-Volumes",
        categoria: "servicos",
        coordenadas: {
            x: 490, y: 500,
            lat: -23.550789, lng: -46.633111
        },
        endereco: "Área de Serviços",
        descricao: "Guarda-volumes para participantes",
        horario: "07:00 - 22:00",
        distancia: null
    },
    {
        id: 13,
        nome: "Espaço SESI",
        categoria: "servicos",
        coordenadas: {
            x: 440, y: 290,
            lat: -23.550345, lng: -46.633456
        },
        endereco: "Área SESI",
        descricao: "Espaço dedicado SESI",
        horario: "08:00 - 18:00",
        distancia: null
    },

    // ========================================
    // RETIRADA DE KIT
    // ========================================
    {
        id: 14,
        nome: "Retirada de Kit",
        categoria: "retirada_kit",
        coordenadas: {
            x: 490, y: 430,
            lat: -23.550123, lng: -46.633456
        },
        endereco: "Área de Credenciamento",
        descricao: "Retirada de kits dos participantes",
        horario: "07:00 - 19:00",
        distancia: null
    },

    // ========================================
    // HIDRATAÇÃO
    // ========================================
    {
        id: 15,
        nome: "Ponto de Hidratação",
        categoria: "hidratacao",
        coordenadas: {
            x: 503, y: 473,
            lat: -23.550567, lng: -46.633234
        },
        endereco: "Área Leste",
        descricao: "Ponto de hidratação",
        horario: "24h",
        distancia: null
    },
    {
        id: 16,
        nome: "Ponto de Hidratação",
        categoria: "hidratacao",
        coordenadas: {
            x: 376, y: 360,
            lat: -23.550234, lng: -46.633445
        },
        endereco: "Área Central",
        descricao: "Ponto de hidratação",
        horario: "24h",
        distancia: null
    },

    // ========================================
    // TENDAS
    // ========================================
    {
        id: 17,
        nome: "Tenda de Pagode",
        categoria: "tendas",
        coordenadas: {
            x: 502, y: 390,
            lat: -23.550111, lng: -46.633222
        },
        endereco: "Área Cultural",
        descricao: "Tenda com apresentações de pagode",
        horario: "18:00 - 23:00",
        distancia: null
    },
    {
        id: 18,
        nome: "Tenda",
        categoria: "tendas",
        coordenadas: {
            x: 391, y: 394,
            lat: -23.550333, lng: -46.633444
        },
        endereco: "Área Central",
        descricao: "Tenda de atividades",
        horario: "09:00 - 21:00",
        distancia: null
    },
    {
        id: 19,
        nome: "Tenda de Açaí/Sorvete",
        categoria: "tendas",
        coordenadas: {
            x: 342, y: 362,
            lat: -23.550555, lng: -46.633666
        },
        endereco: "Área de Lazer",
        descricao: "Tenda de açaí e sorvetes",
        horario: "10:00 - 22:00",
        distancia: null
    },
    {
        id: 20,
        nome: "Tenda",
        categoria: "tendas",
        coordenadas: {
            x: 470, y: 300,
            lat: -23.550456, lng: -46.633234
        },
        endereco: "Área Norte",
        descricao: "Tenda de atividades",
        horario: "09:00 - 21:00",
        distancia: null
    }
];

// Configurações das categorias
const categorias = {
    todas: { 
        label: 'Todos', 
        emoji: '📍',
        cor: '#3b82f6'
    },
    alimentacao_ouvintes: { 
        label: 'Alimentação', 
        emoji: '🍽️',
        cor: '#f97316'
    },
    alimentacao_jogadores: { 
        label: 'Alimentação Competidores', 
        emoji: '🥇',
        cor: '#eab308'
    },
    campo_futebol: { 
        label: 'Campos de Futebol', 
        emoji: '⚽',
        cor: '#22c55e'
    },
    quadra_tenis: { 
        label: 'Quadra de Tênis', 
        emoji: '🎾',
        cor: '#14b8a6'
    },
    esportes: { 
        label: 'Esportes', 
        emoji: '🏊',
        cor: '#06b6d4'
    },
    banheiros: { 
        label: 'Banheiros', 
        emoji: '🚻',
        cor: '#8b5cf6'
    },
    entrada_saida: { 
        label: 'Entrada e Acesso', 
        emoji: '🚪',
        cor: '#ef4444'
    },
    servicos: { 
        label: 'Serviços', 
        emoji: '🏢',
        cor: '#6b7280'
    },
    retirada_kit: { 
        label: 'Retirada de Kit', 
        emoji: '📦',
        cor: '#10b981'
    },
    hidratacao: { 
        label: 'Hidratação', 
        emoji: '💧',
        cor: '#0ea5e9'
    },
    tendas: { 
        label: 'Tendas', 
        emoji: '🏕️',
        cor: '#f59e0b'
    }
};

// Configurações do mapa sem zoom
const configMapa = {
    larguraOriginal: 800,
    alturaOriginal: 600,
    zoomFixo: true, // Sem zoom
    responsivo: {
        breakpointMobile: 768,
        ajusteAutomatico: true
    }
};

