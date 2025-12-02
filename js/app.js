// ===================================
// INICIALIZAÇÃO E EVENTOS
// ===================================

// Estado da aplicação
const appState = {
    origin: null,
    destination: null,
    transport: null,
    passengers: 1,
    distance: null
};

// Inicializa a aplicação
function initApp() {
    populateCitySelects();
    createTransportButtons();
    attachEventListeners();
    updateCalculateButton(false);
}

// Anexa todos os event listeners
function attachEventListeners() {
    // Selects de origem e destino
    document.getElementById('origin').addEventListener('change', handleOriginChange);
    document.getElementById('destination').addEventListener('change', handleDestinationChange);
    
    // Botões de transporte
    document.getElementById('transportGrid').addEventListener('click', handleTransportClick);
    
    // Input de passageiros
    document.getElementById('passengers').addEventListener('input', handlePassengersChange);
    
    // Botão de calcular
    document.getElementById('calculateBtn').addEventListener('click', handleCalculate);
}

// Handler: mudança na origem
function handleOriginChange(e) {
    appState.origin = e.target.value;
    updateRouteDistance();
    clearResults();
    checkFormValidity();
}

// Handler: mudança no destino
function handleDestinationChange(e) {
    appState.destination = e.target.value;
    updateRouteDistance();
    clearResults();
    checkFormValidity();
}

// Handler: clique em transporte
function handleTransportClick(e) {
    const button = e.target.closest('.transport-btn');
    if (!button) return;
    
    const transportId = button.getAttribute('data-transport');
    appState.transport = transportId;
    
    selectTransport(transportId);
    clearResults();
    checkFormValidity();
    
    // Reset passengers se não for carro
    if (transportId !== 'car') {
        appState.passengers = 1;
    }
}

// Handler: mudança no número de passageiros
function handlePassengersChange(e) {
    const value = parseInt(e.target.value);
    appState.passengers = value > 0 ? value : 1;
    clearResults();
}

// Handler: cálculo
function handleCalculate() {
    const validation = validateCalculationData(
        appState.origin,
        appState.destination,
        appState.transport
    );
    
    if (!validation.valid) {
        showError(validation.message);
        return;
    }
    
    const distance = validation.distance;
    const co2 = calculateCO2(distance, appState.transport, appState.passengers);
    
    if (co2 === null) {
        showError('Erro ao calcular emissões');
        return;
    }
    
    // Exibe resultados
    displayResults(co2, distance, appState.transport, appState.passengers);
    displayEquivalences(co2);
    displayComparison(distance, appState.transport, appState.passengers);
}

// Atualiza a distância da rota
function updateRouteDistance() {
    if (!appState.origin || !appState.destination) {
        appState.distance = null;
        updateRouteInfo(null);
        return;
    }
    
    if (appState.origin === appState.destination) {
        appState.distance = null;
        updateRouteInfo(null);
        return;
    }
    
    const distance = ROUTES_DATA.getDistance(appState.origin, appState.destination);
    appState.distance = distance;
    updateRouteInfo(distance);
}

// Verifica se o formulário está válido
function checkFormValidity() {
    const isValid = appState.origin && 
                    appState.destination && 
                    appState.transport &&
                    appState.origin !== appState.destination &&
                    appState.distance !== null;
    
    updateCalculateButton(isValid);
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
