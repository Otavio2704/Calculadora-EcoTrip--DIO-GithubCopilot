// ===================================
// LÓGICA DE CÁLCULOS
// ===================================

// Calcula as emissões de CO2 para uma viagem
function calculateCO2(distance, transport, passengers = 1) {
    if (!distance || !transport) return null;
    
    const emissionRate = CO2_CONFIG.emissions[transport];
    if (emissionRate === undefined) return null;
    
    // Para carro, divide pela quantidade de passageiros
    if (transport === 'car' && passengers > 1) {
        return (distance * emissionRate) / passengers;
    }
    
    return distance * emissionRate;
}

// Calcula emissões para todos os transportes
function calculateAllTransports(distance, passengers = 1) {
    const results = {};
    
    for (const transport in CO2_CONFIG.emissions) {
        results[transport] = calculateCO2(distance, transport, 
            transport === 'car' ? passengers : 1);
    }
    
    return results;
}

// Calcula as equivalências
function calculateEquivalences(co2Amount) {
    const equivalences = {};
    
    for (const key in CO2_CONFIG.equivalences) {
        const eq = CO2_CONFIG.equivalences[key];
        equivalences[key] = {
            value: co2Amount / eq.factor,
            label: eq.label,
            icon: eq.icon
        };
    }
    
    return equivalences;
}

// Obtém mensagem de feedback baseada na emissão
function getFeedbackMessage(co2Amount) {
    const messages = CO2_CONFIG.feedbackMessages;
    
    if (co2Amount <= messages.veryLow.threshold) {
        return messages.veryLow;
    } else if (co2Amount <= messages.low.threshold) {
        return messages.low;
    } else if (co2Amount <= messages.medium.threshold) {
        return messages.medium;
    } else if (co2Amount <= messages.high.threshold) {
        return messages.high;
    } else {
        return messages.veryHigh;
    }
}

// Formata número com decimais
function formatNumber(number, decimals = 2) {
    return number.toFixed(decimals).replace('.', ',');
}

// Formata número grande com separador de milhares
function formatLargeNumber(number, decimals = 0) {
    return number.toFixed(decimals)
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Valida se os dados estão completos para cálculo
function validateCalculationData(origin, destination, transport) {
    if (!origin || !destination || !transport) {
        return {
            valid: false,
            message: 'Por favor, preencha todos os campos'
        };
    }
    
    if (origin === destination) {
        return {
            valid: false,
            message: 'Origem e destino devem ser diferentes'
        };
    }
    
    const distance = ROUTES_DATA.getDistance(origin, destination);
    if (!distance) {
        return {
            valid: false,
            message: 'Rota não encontrada'
        };
    }
    
    return {
        valid: true,
        distance: distance
    };
}

// Encontra o transporte mais e menos poluente
function getTransportExtremes(allEmissions) {
    let min = { transport: null, value: Infinity };
    let max = { transport: null, value: -Infinity };
    
    for (const transport in allEmissions) {
        const value = allEmissions[transport];
        
        if (value < min.value) {
            min = { transport, value };
        }
        if (value > max.value) {
            max = { transport, value };
        }
    }
    
    return { min, max };
}

// Calcula a porcentagem relativa ao máximo
function calculatePercentage(value, maxValue) {
    if (maxValue === 0) return 0;
    return (value / maxValue) * 100;
}
