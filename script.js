// Variáveis globais
let posicaoUsuario = null;
let pontoSelecionado = null;
let categoriaAtiva = 'todas';
let pontosVisiveis = [];

// Elementos DOM
const mapa = document.getElementById('mapa');
const imagemMapa = document.getElementById('imagemMapa');
const pontosContainer = document.getElementById('pontosContainer');
const popup = document.getElementById('popup');
const inputBusca = document.getElementById('inputBusca');
const contadorPontos = document.getElementById('contadorPontos');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    inicializarMapa();
    configurarEventos();
    criarPontos();
    atualizarContadores();
    ajustarResponsividade();
});

// Ajuste de responsividade sem zoom
function ajustarResponsividade() {
    const ajustar = () => {
        const larguraTela = window.innerWidth;
        const isMobile = larguraTela <= 768;
        
        // Ajustar tamanho do mapa baseado na tela
        if (isMobile) {
            mapa.style.maxHeight = '60vh';
            mapa.style.maxWidth = '95vw';
        } else {
            mapa.style.maxHeight = '70vh';
            mapa.style.maxWidth = '90vw';
        }
        
        // Reposicionar pontos após redimensionamento
        setTimeout(() => {
            atualizarPosicoesPontos();
        }, 100);
    };
    
    ajustar();
    window.addEventListener('resize', debounce(ajustar, 250));
}

// Função para reposicionar pontos mantendo proporção (SEM ZOOM)
function atualizarPosicoesPontos() {
    const imagemRect = imagemMapa.getBoundingClientRect();
    
    // Calcular escala baseada no tamanho atual da imagem
    const escalaX = imagemRect.width / configMapa.larguraOriginal;
    const escalaY = imagemRect.height / configMapa.alturaOriginal;
    
    pontosVisiveis.forEach(ponto => {
        const elemento = document.getElementById(`ponto-${ponto.id}`);
        if (elemento) {
            // Calcular posição proporcional
            const x = (ponto.coordenadas.x * escalaX);
            const y = (ponto.coordenadas.y * escalaY);
            
            elemento.style.left = `${x}px`;
            elemento.style.top = `${y}px`;
        }
    });
}

// Inicializar mapa
function inicializarMapa() {
    // Configurar pontos visíveis iniciais
    pontosVisiveis = [...pontosInteresse];
}

// Configurar eventos (SEM ZOOM)
function configurarEventos() {
    // Botões de controle (removidos zoom in/out)
    document.getElementById('btnHome').addEventListener('click', resetarVisualizacao);
    document.getElementById('btnLocalizacao').addEventListener('click', obterLocalizacao);
    
    // Busca
    inputBusca.addEventListener('input', debounce(buscarPontos, 300));
    
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoria = e.currentTarget.dataset.categoria;
            filtrarPorCategoria(categoria);
        });
    });
    
    // Popup
    document.getElementById('btnFecharPopup').addEventListener('click', fecharPopup);
    document.getElementById('btnNavegar').addEventListener('click', navegarGPS);
    document.getElementById('btnRota').addEventListener('click', mostrarRota);
    
    // Fechar popup ao clicar fora
    document.addEventListener('click', (e) => {
        if (!popup.contains(e.target) && !e.target.closest('.point')) {
            fecharPopup();
        }
    });
    
    // Redimensionamento da janela
    window.addEventListener('resize', debounce(() => {
        atualizarPosicoesPontos();
    }, 250));
}

// Criar pontos no mapa
function criarPontos() {
    pontosContainer.innerHTML = '';
    
    pontosVisiveis.forEach(ponto => {
        const elemento = document.createElement('div');
        elemento.id = `ponto-${ponto.id}`;
        elemento.className = `point categoria-${ponto.categoria}`;
        elemento.title = ponto.nome;
        
        // Posicionar ponto
        posicionarPonto(elemento, ponto);
        
        // Evento de clique
        elemento.addEventListener('click', (e) => {
            e.stopPropagation();
            mostrarPopup(ponto);
        });
        
        pontosContainer.appendChild(elemento);
    });
    
    // Atualizar posições após criação
    setTimeout(() => {
        atualizarPosicoesPontos();
    }, 50);
}

// Posicionar ponto com responsividade (SEM ZOOM)
function posicionarPonto(elemento, ponto) {
    const imagemRect = imagemMapa.getBoundingClientRect();
    
    // Calcular escala atual
    const escalaX = imagemRect.width / configMapa.larguraOriginal;
    const escalaY = imagemRect.height / configMapa.alturaOriginal;
    
    // Posição proporcional
    const x = ponto.coordenadas.x * escalaX;
    const y = ponto.coordenadas.y * escalaY;
    
    elemento.style.left = `${x}px`;
    elemento.style.top = `${y}px`;
    elemento.style.position = 'absolute';
}

// Resetar visualização (substitui o reset de zoom)
function resetarVisualizacao() {
    // Centralizar mapa e resetar filtros se necessário
    filtrarPorCategoria('todas');
    inputBusca.value = '';
    fecharPopup();
}

// Filtros
function filtrarPorCategoria(categoria) {
    categoriaAtiva = categoria;
    
    // Atualizar botões
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-categoria="${categoria}"]`).classList.add('active');
    
    // Filtrar pontos
    if (categoria === 'todas') {
        pontosVisiveis = [...pontosInteresse];
    } else {
        pontosVisiveis = pontosInteresse.filter(ponto => ponto.categoria === categoria);
    }
    
    criarPontos();
    atualizarContador();
    fecharPopup();
}

// Busca
function buscarPontos() {
    const termo = inputBusca.value.toLowerCase().trim();
    
    if (termo === '') {
        filtrarPorCategoria(categoriaAtiva);
        return;
    }
    
    pontosVisiveis = pontosInteresse.filter(ponto => {
        const nomeMatch = ponto.nome.toLowerCase().includes(termo);
        const enderecoMatch = ponto.endereco.toLowerCase().includes(termo);
        const descricaoMatch = ponto.descricao.toLowerCase().includes(termo);
        
        const categoriaMatch = categoriaAtiva === 'todas' || ponto.categoria === categoriaAtiva;
        
        return (nomeMatch || enderecoMatch || descricaoMatch) && categoriaMatch;
    });
    
    criarPontos();
    atualizarContador();
}

// Popup
function mostrarPopup(ponto) {
    pontoSelecionado = ponto;
    
    // Preencher informações
    document.getElementById('popupTitulo').textContent = ponto.nome;
    document.getElementById('popupCategoria').textContent = categorias[ponto.categoria].emoji + ' ' + categorias[ponto.categoria].label;
    document.getElementById('popupEndereco').textContent = ponto.endereco;
    document.getElementById('popupDescricao').textContent = ponto.descricao;
    document.getElementById('popupHorario').textContent = ponto.horario;
    
    // Mostrar distância se disponível
    const distanciaDiv = document.getElementById('popupDistancia');
    if (ponto.distancia) {
        distanciaDiv.textContent = `📍 ${ponto.distancia}m de você`;
        distanciaDiv.classList.remove('hidden');
    } else {
        distanciaDiv.classList.add('hidden');
    }
    
    // Mostrar popup
    popup.classList.remove('hidden');
    popup.classList.add('show');
}

function fecharPopup() {
    popup.classList.remove('show');
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 300);
    pontoSelecionado = null;
}

// Navegação GPS
function navegarGPS() {
    if (!pontoSelecionado) return;
    
    const lat = pontoSelecionado.coordenadas.lat;
    const lng = pontoSelecionado.coordenadas.lng;
    
    // Detectar dispositivo e abrir app apropriado
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    let url;
    if (isIOS) {
        url = `maps://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`;
    } else if (isAndroid) {
        url = `geo:${lat},${lng}?q=${lat},${lng}`;
    } else {
        url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    }
    
    window.open(url, '_blank');
}

// Mostrar rota
function mostrarRota() {
    if (!pontoSelecionado || !posicaoUsuario) {
        alert('Localização não disponível. Ative a localização para ver rotas.');
        return;
    }
    
    // Desenhar linha da rota
    const svg = document.getElementById('rotaSvg');
    const path = document.getElementById('rotaPath');
    
    const imagemRect = imagemMapa.getBoundingClientRect();
    const escalaX = imagemRect.width / configMapa.larguraOriginal;
    const escalaY = imagemRect.height / configMapa.alturaOriginal;
    
    const inicioX = posicaoUsuario.x * escalaX;
    const inicioY = posicaoUsuario.y * escalaY;
    const fimX = pontoSelecionado.coordenadas.x * escalaX;
    const fimY = pontoSelecionado.coordenadas.y * escalaY;
    
    const pathData = `M ${inicioX} ${inicioY} L ${fimX} ${fimY}`;
    path.setAttribute('d', pathData);
    
    svg.style.display = 'block';
    
    // Ocultar rota após 5 segundos
    setTimeout(() => {
        svg.style.display = 'none';
    }, 5000);
}

// Geolocalização
function obterLocalizacao() {
    const btn = document.getElementById('btnLocalizacao');
    const texto = document.getElementById('textLocalizacao');
    const loading = document.getElementById('loading');
    
    if (!navigator.geolocation) {
        alert('Geolocalização não suportada neste navegador.');
        return;
    }
    
    btn.disabled = true;
    texto.textContent = 'Obtendo...';
    loading.classList.remove('hidden');
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            posicaoUsuario = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                x: 400, // Posição padrão no mapa
                y: 300
            };
            
            calcularDistancias();
            ordenarPorProximidade();
            
            btn.disabled = false;
            texto.textContent = 'Localização Obtida';
            loading.classList.add('hidden');
            
            document.getElementById('statusLocalizacao').classList.remove('hidden');
        },
        (error) => {
            console.error('Erro ao obter localização:', error);
            btn.disabled = false;
            texto.textContent = 'Erro na Localização';
            loading.classList.add('hidden');
            
            alert('Não foi possível obter sua localização. Verifique as permissões.');
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000
        }
    );
}

// Calcular distâncias
function calcularDistancias() {
    if (!posicaoUsuario) return;
    
    pontosInteresse.forEach(ponto => {
        const distancia = calcularDistanciaHaversine(
            posicaoUsuario.lat, posicaoUsuario.lng,
            ponto.coordenadas.lat, ponto.coordenadas.lng
        );
        ponto.distancia = Math.round(distancia);
    });
}

function calcularDistanciaHaversine(lat1, lng1, lat2, lng2) {
    const R = 6371000; // Raio da Terra em metros
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Ordenar por proximidade
function ordenarPorProximidade() {
    pontosVisiveis.sort((a, b) => (a.distancia || Infinity) - (b.distancia || Infinity));
    criarPontos();
}

// Contadores
function atualizarContadores() {
    Object.keys(categorias).forEach(categoria => {
        const count = categoria === 'todas' 
            ? pontosInteresse.length 
            : pontosInteresse.filter(p => p.categoria === categoria).length;
        
        const elemento = document.getElementById(`count-${categoria}`);
        if (elemento) {
            elemento.textContent = count;
        }
    });
}

function atualizarContador() {
    contadorPontos.textContent = `${pontosVisiveis.length} pontos encontrados`;
}

// Utilitários
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

