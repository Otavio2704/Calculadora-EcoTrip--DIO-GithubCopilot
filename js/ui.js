// ===================================
// MANIPULAÇÃO DO DOM
// ===================================

// Popula os selects de origem e destino
function populateCitySelects() {
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');
    
    ROUTES_DATA.cities.forEach(city => {
        const option1 = new Option(city.name, city.id);
        const option2 = new Option(city.name, city.id);
        originSelect.add(option1);
        destinationSelect.add(option2);
    });
}

// Cria os botões de transporte
function createTransportButtons() {
    const grid = document.getElementById('transportGrid');
    grid.innerHTML = '';
    
    for (const key in CO2_CONFIG.transports) {
        const transport = CO2_CONFIG.transports[key];
        
        const button = document.createElement('button');
        button.className = 'transport-btn';
        button.setAttribute('data-transport', transport.id);
        button.style.setProperty('color', transport.color);
        button.type = 'button';
        
        button.innerHTML = `
            <span class="transport-icon">${transport.icon}</span>
            <span class="transport-name">${transport.name}</span>
            <span class="transport-emission">${formatNumber(CO2_CONFIG.emissions[transport.id])} kg/km</span>
        `;
        
        grid.appendChild(button);
    }
}

// Atualiza a informação da rota selecionada
function updateRouteInfo(distance) {
    const routeInfo = document.getElementById('routeInfo');
    const routeDistance = document.getElementById('routeDistance');
    
    if (distance) {
        routeDistance.textContent = formatLargeNumber(distance, 0);
        routeInfo.style.display = 'block';
    } else {
        routeInfo.style.display = 'none';
    }
}

// Mostra/esconde seção de passageiros
function togglePassengersSection(show) {
    const section = document.getElementById('passengersSection');
    section.style.display = show ? 'block' : 'none';
}

// Atualiza o estado do botão de calcular
function updateCalculateButton(enabled) {
    const button = document.getElementById('calculateBtn');
    button.disabled = !enabled;
}

// Exibe os resultados
function displayResults(co2, distance, transport, passengers) {
    const resultsSection = document.getElementById('resultsSection');
    const co2Result = document.getElementById('co2Result');
    const resultDescription = document.getElementById('resultDescription');
    const resultDistance = document.getElementById('resultDistance');
    const resultTransport = document.getElementById('resultTransport');
    const resultPassengers = document.getElementById('resultPassengers');
    const resultPassengersDetail = document.getElementById('resultPassengersDetail');
    const resultEmissionRate = document.getElementById('resultEmissionRate');
    
    // Valor principal
    co2Result.textContent = formatNumber(co2);
    
    // Mensagem de feedback
    const feedback = getFeedbackMessage(co2);
    resultDescription.textContent = `${feedback.emoji} ${feedback.message}`;
    
    // Detalhes
    resultDistance.textContent = `${formatLargeNumber(distance, 0)} km`;
    resultTransport.textContent = CO2_CONFIG.transports[transport].name;
    
    // Passageiros (apenas para carro)
    if (transport === 'car') {
        resultPassengers.textContent = passengers;
        resultPassengersDetail.style.display = 'flex';
    } else {
        resultPassengersDetail.style.display = 'none';
    }
    
    resultEmissionRate.textContent = `${formatNumber(CO2_CONFIG.emissions[transport])} kg/km`;
    
    // Mostra a seção
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Exibe as equivalências
function displayEquivalences(co2) {
    const grid = document.getElementById('equivalenceGrid');
    grid.innerHTML = '';
    
    const equivalences = calculateEquivalences(co2);
    
    for (const key in equivalences) {
        const eq = equivalences[key];
        
        const item = document.createElement('div');
        item.className = 'equivalence-item';
        item.innerHTML = `
            <div class="equivalence-icon">${eq.icon}</div>
            <div class="equivalence-value">${formatLargeNumber(eq.value, 1)}</div>
            <div class="equivalence-label">${eq.label}</div>
        `;
        
        grid.appendChild(item);
    }
}

// Exibe a comparação entre todos os transportes
function displayComparison(distance, currentTransport, passengers) {
    const section = document.getElementById('comparisonSection');
    const chart = document.getElementById('comparisonChart');
    chart.innerHTML = '';
    
    const allEmissions = calculateAllTransports(distance, passengers);
    const extremes = getTransportExtremes(allEmissions);
    
    // Ordena os transportes por emissão (do menor para o maior)
    const sortedTransports = Object.keys(allEmissions).sort((a, b) => {
        return allEmissions[a] - allEmissions[b];
    });
    
    sortedTransports.forEach(transportId => {
        const co2 = allEmissions[transportId];
        const transport = CO2_CONFIG.transports[transportId];
        const percentage = calculatePercentage(co2, extremes.max.value);
        const isCurrent = transportId === currentTransport;
        
        const bar = document.createElement('div');
        bar.className = 'comparison-bar';
        bar.innerHTML = `
            <div class="comparison-header">
                <div class="comparison-transport">
                    <span>${transport.icon}</span>
                    <span>${transport.name}</span>
                    ${isCurrent ? '<span style="color: var(--primary-color); margin-left: 0.5rem;">✓ Selecionado</span>' : ''}
                </div>
                <div class="comparison-value" style="color: ${transport.color};">
                    ${formatNumber(co2)} kg
                </div>
            </div>
            <div class="comparison-bar-bg">
                <div class="comparison-bar-fill" 
                     data-transport="${transportId}"
                     style="width: 0%; background: ${transport.color};">
                </div>
            </div>
        `;
        
        chart.appendChild(bar);
        
        // Anima a barra após um pequeno delay
        setTimeout(() => {
            const fill = bar.querySelector('.comparison-bar-fill');
            fill.style.width = `${percentage}%`;
        }, 100);
    });
    
    section.style.display = 'block';
}

// Limpa os resultados
function clearResults() {
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('comparisonSection').style.display = 'none';
}

// Seleciona um transporte
function selectTransport(transportId) {
    // Remove seleção anterior
    document.querySelectorAll('.transport-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Adiciona seleção ao clicado
    const button = document.querySelector(`[data-transport="${transportId}"]`);
    if (button) {
        button.classList.add('active');
    }
    
    // Mostra/esconde seção de passageiros
    const transport = CO2_CONFIG.transports[transportId];
    togglePassengersSection(transport.allowPassengers);
}

// Mostra mensagem de erro
function showError(message) {
    alert(message); // Você pode substituir por um toast/modal mais elegante
}
