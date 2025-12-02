# 🌍 Calculadora EcoTrip - Emissões de CO₂

Uma calculadora interativa de emissões de carbono para diferentes meios de transporte entre as principais cidades brasileiras. Desenvolvida com foco em conscientização ambiental e educação sobre sustentabilidade.

![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

A **Calculadora EcoTrip** permite que usuários calculem e comparem as emissões de CO₂ de diferentes meios de transporte para viagens entre cidades brasileiras. O projeto visa aumentar a conscientização sobre o impacto ambiental das escolhas de transporte e incentivar alternativas mais sustentáveis.

### ✨ Funcionalidades

- 🗺️ **Seleção de Rotas**: Escolha entre 15 cidades brasileiras com mais de 100 rotas pré-cadastradas
- 🚗 **Múltiplos Transportes**: Compare emissões entre carro, ônibus, trem, avião e bicicleta
- 👥 **Cálculo por Passageiros**: Para viagens de carro, calcule emissões divididas por número de passageiros
- 📊 **Visualização de Dados**: Gráficos comparativos animados entre todos os meios de transporte
- 🌳 **Equivalências Ambientais**: Contextualização das emissões em termos práticos (árvores, smartphones, etc.)
- 💡 **Feedback Inteligente**: Mensagens personalizadas baseadas no nível de emissão
- 📱 **Design Responsivo**: Interface adaptável para desktop, tablet e mobile

## 🚀 Demonstração

### Interface Principal
- Seleção intuitiva de origem e destino
- Cards interativos para escolha de transporte
- Animações suaves e feedback visual

### Resultados Detalhados
- Valor principal de emissão em destaque
- Detalhamento completo da viagem
- Equivalências ambientais para melhor compreensão
- Comparação visual entre todos os transportes

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com variáveis CSS, gradientes e animações
- **JavaScript (Vanilla)**: Lógica de cálculo e manipulação do DOM sem dependências
- **Design Responsivo**: Mobile-first approach com media queries

## 📁 Estrutura do Projeto
```
carbon-calculator/
├── index.html              # Estrutura principal da aplicação
├── css/
│   └── style.css          # Estilos completos com variáveis CSS
├── js/
│   ├── routes-data.js     # Dados de rotas e cidades
│   ├── config.js          # Constantes e configurações de CO₂
│   ├── calculator.js      # Lógica de cálculos de emissões
│   ├── ui.js              # Manipulação do DOM e interface
│   └── app.js             # Inicialização e gerenciamento de eventos
├── LICENSE                 # Licença MIT
└── README.md              # Documentação do projeto
```

## 🎯 Como Usar

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Otavio2704/Calculadora-EcoTrip--DIO-GithubCopilot.git
```

2. Navegue até a pasta do projeto:
```bash
cd Calculadora-EcoTrip--DIO-GithubCopilot
```

3. Abra o arquivo `index.html` em seu navegador preferido

**Nota**: Não há necessidade de instalação de dependências, servidor local ou build. O projeto roda diretamente no navegador!

### Utilização

1. **Selecione a Origem e Destino**: Escolha as cidades de partida e chegada
2. **Escolha o Meio de Transporte**: Clique no card do transporte desejado
3. **Configure Passageiros** (opcional): Para carro, informe o número de passageiros
4. **Calcule**: Clique no botão "Calcular Emissões"
5. **Analise os Resultados**: Visualize as emissões, equivalências e comparações

## 📊 Dados de Emissões

Os valores de emissão de CO₂ são baseados em médias da indústria:

| Transporte | Emissão (kg CO₂/km) |
|-----------|---------------------|
| Carro     | 0.192               |
| Ônibus    | 0.089               |
| Trem      | 0.041               |
| Avião     | 0.255               |
| Bicicleta | 0.000               |

*Valores por passageiro. Para carros, a emissão é dividida pelo número de passageiros.*

## 🌆 Cidades Disponíveis

- São Paulo
- Rio de Janeiro
- Belo Horizonte
- Brasília
- Curitiba
- Porto Alegre
- Salvador
- Fortaleza
- Recife
- Manaus
- Belém
- Goiânia
- Campinas
- Santos
- Florianópolis

## 🎨 Características Técnicas

### CSS
- Sistema de variáveis CSS para fácil customização de cores e espaçamentos
- Gradientes e sombras para profundidade visual
- Animações suaves em transições e carregamentos
- Grid e Flexbox para layouts responsivos

### JavaScript
- Código modular organizado em arquivos separados por responsabilidade
- Funções globais reutilizáveis sem dependências externas
- Validação de dados e tratamento de erros
- Cálculos precisos com formatação localizada (pt-BR)

### UX/UI
- Interface intuitiva e auto-explicativa
- Feedback visual imediato em todas as interações
- Scroll automático para resultados
- Estados visuais claros (hover, active, disabled)

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você tem sugestões de melhorias, correções ou novas funcionalidades:

1. Faça um Fork do projeto
2. Crie uma Branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Otavio2704**

- GitHub: [@Otavio2704](https://github.com/Otavio2704)

## 🙏 Agradecimentos

- Projeto desenvolvido como parte do desafio da DIO (Digital Innovation One)
- Dados de emissões baseados em estudos ambientais e médias da indústria
- Inspirado pela necessidade crescente de conscientização ambiental

## 📧 Contato

Para dúvidas, sugestões ou feedback, sinta-se à vontade para abrir uma issue no repositório.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

🌱 **Juntos por um planeta mais sustentável!**
