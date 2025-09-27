// Dados do Mapa Interativo - Jogos Internos 2025
// Coordenadas exatas fornecidas pelo usuário

const pontosInteresse = [
    // ========================================
    // ALIMENTAÇÃO
    // ========================================
    {
        id: 1,
        nome: "Alimentação",
        categoria: "alimentacao_ouvintes",
        coordenadas: {
            x: 410, y: 140,
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
            x: 490, y: 240,
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
            x: 479, y: 320,
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
        categoria: "esportes",
        coordenadas: {
            x: 300, y: 500,
            lat: -23.550456, lng: -46.633234
        },
        endereco: "Campo Principal",
        descricao: "Campo principal de futebol",
        horario: "06:00 - 22:00",
        distancia: null
    },
    {
        id: 5,
        nome: "Campo do Resende",
        categoria: "cerimonia_abertura",
        coordenadas: {
            x: 800, y: 290,
            lat: -23.550123, lng: -46.633678
        },
        endereco: "Setor Resende",
        descricao: "Campo do Resende - Local da Cerimônia de Abertura dos Jogos Internos 2025",
        horario: "10:00 ",
        evento_especial: "Cerimônia de Abertura dos Jogos Internos 2025",
        horario_cerimonia: "10:00",
        distancia: null
    },
    {
        id: 6,
        nome: "Quadra de Tênis",
        categoria: "esportes",
        coordenadas: {
            x: 550, y: 650,
            lat: -23.550456, lng: -46.633234
        },
        endereco: "Complexo Esportivo",
        descricao: "Quadra oficial de tênis",
        horario: "06:00 - 22:00",
        distancia: null
    },
    {
        id: 7,
        nome: "Piscina",
        categoria: "esportes",
        coordenadas: {
            x: 800, y: 530,
            lat: -23.550567, lng: -46.633123
        },
        endereco: "Complexo Aquático",
        descricao: "Piscina para atividades aquáticas",
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
            x: 360, y: 415,
            lat: -23.550234, lng: -46.633456
        },
        endereco: "Bloco Central",
        descricao: "Banheiros centrais",
        horario: "24 horas",
        distancia: null
    },
    {
        id: 9,
        nome: "Banheiros",
        categoria: "banheiros",
        coordenadas: {
            x: 600, y: 675,
            lat: -23.550678, lng: -46.633789
        },
        endereco: "Bloco Sul",
        descricao: "Banheiros do setor sul",
        horario: "24 horas",
        distancia: null
    },

    // ========================================
    // ENTRADA E ACESSO
    // ========================================
    {
        id: 10,
        nome: "Acesso para a Área de Alimentação",
        categoria: "entrada_acesso",
        coordenadas: {
            x: 470, y: 450,
            lat: -23.550345, lng: -46.633234
        },
        endereco: "Corredor Principal",
        descricao: "Acesso direto para área de alimentação",
        horario: "06:00 - 23:00",
        distancia: null
    },
    {
        id: 11,
        nome: "Entrada - Tenda de Acesso",
        categoria: "entrada_acesso",
        coordenadas: {
            x: 830, y: 950,
            lat: -23.550890, lng: -46.633456
        },
        endereco: "Entrada Principal",
        descricao: "Tenda de acesso principal ao evento",
        horario: "05:00 - 24:00",
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
            x: 790, y: 850,
            lat: -23.550567, lng: -46.633345
        },
        endereco: "Área de Serviços",
        descricao: "Guarda-volumes para participantes",
        horario: "06:00 - 22:00",
        distancia: null
    },
    {
        id: 13,
        nome: "Espaço SESI",
        categoria: "servicos",
        coordenadas: {
            x: 630, y: 490,
            lat: -23.550568, lng: -46.633346
        },
        endereco: "Bloco SESI",
        descricao: "Espaço dedicado SESI",
        horario: "07:00 - 19:00",
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
            x: 780, y: 730,
            lat: -23.550678, lng: -46.633567
        },
        endereco: "Área de Credenciamento",
        descricao: "Local para retirada de kits dos participantes",
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
            x: 830, y: 800,
            lat: -23.550789, lng: -46.633678
        },
        endereco: "Setor Leste",
        descricao: "Ponto de hidratação leste",
        horario: "24 horas",
        distancia: null
    },
    {
        id: 16,
        nome: "Ponto de Hidratação",
        categoria: "hidratacao",
        coordenadas: {
            x: 430, y: 600,
            lat: -23.550456, lng: -46.633123
        },
        endereco: "Setor Central",
        descricao: "Ponto de hidratação central",
        horario: "24 horas",
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
            x: 830, y: 740,
            lat: -23.550678, lng: -46.633789
        },
        endereco: "Área de Entretenimento",
        descricao: "Tenda com apresentações de pagode",
        horario: "18:00 - 23:00",
        distancia: null
    },
    {
        id: 18,
        nome: "Tenda",
        categoria: "tendas",
        coordenadas: {
            x: 500, y: 650,
            lat: -23.550567, lng: -46.633345
        },
        endereco: "Área Central",
        descricao: "Tenda de atividades gerais",
        horario: "08:00 - 20:00",
        distancia: null
    },
    {
        id: 19,
        nome: "Tenda de Açaí/Sorvete",
        categoria: "tendas",
        coordenadas: {
            x: 325, y: 580,
            lat: -23.550456, lng: -46.633234
        },
        endereco: "Área de Alimentação",
        descricao: "Tenda especializada em açaí e sorvetes",
        horario: "10:00 - 22:00",
        distancia: null
    },
    {
        id: 20,
        nome: "Tenda",
        categoria: "tendas",
        coordenadas: {
            x: 720, y: 480,
            lat: -23.550345, lng: -46.633456
        },
        endereco: "Setor Norte",
        descricao: "Tenda de apoio norte",
        horario: "08:00 - 20:00",
        distancia: null
    }
];

// Configurações das categorias
const categorias = {
    cerimonia_abertura: {
        nome: "Cerimônia de Abertura",
        cor: "#dc2626",
        icone: "🎭"
    },
    todos: {
        nome: "Todos",
        cor: "#3b82f6",
        icone: "📍"
    },
    alimentacao_ouvintes: {
        nome: "Alimentação",
        cor: "#f97316",
        icone: "🍽️"
    },
    alimentacao_jogadores: {
        nome: "Alim. Competidores",
        cor: "#eab308",
        icone: "🥇"
    },
    campo_futebol: {
        nome: "Campos Futebol",
        cor: "#22c55e",
        icone: "⚽"
    },
    quadra_tenis: {
        nome: "Quadra Tênis",
        cor: "#14b8a6",
        icone: "🎾"
    },
    esportes: {
        nome: "Esportes",
        cor: "#06b6d4",
        icone: "🏊"
    },
    banheiros: {
        nome: "Banheiros",
        cor: "#8b5cf6",
        icone: "🚻"
    },
    entrada_acesso: {
        nome: "Entrada/Acesso",
        cor: "#ef4444",
        icone: "🚪"
    },
    servicos: {
        nome: "Serviços",
        cor: "#6b7280",
        icone: "🏢"
    },
    retirada_kit: {
        nome: "Retirada Kit",
        cor: "#10b981",
        icone: "📦"
    },
    hidratacao: {
        nome: "Hidratação",
        cor: "#0ea5e9",
        icone: "💧"
    },
    tendas: {
        nome: "Tendas",
        cor: "#f59e0b",
        icone: "🏕️"
    }
};

// Configuração do mapa - SEM ZOOM
const configMapa = {
    zoom: {
        habilitado: false,  // ZOOM COMPLETAMENTE DESABILITADO
        inicial: 1,
        minimo: 1,
        maximo: 1
    },
    pontos: {
        tamanhoBase: 24,
        animacao: true,
        fixos: true  // PONTOS COMPLETAMENTE FIXOS
    },
    responsivo: {
        habilitado: true,
        breakpoints: {
            mobile: 768,
            tablet: 1024
        }
    },
    // Dimensões originais da imagem da planta
    larguraOriginal: 1000,
    alturaOriginal: 1000
};

