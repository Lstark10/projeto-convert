# Convert - Conversor de Moedas 💱

Um conversor de moedas elegante e funcional que permite converter valores de moedas estrangeiras para Real Brasileiro (BRL) em tempo real.

![Convert Logo](./img/logo.svg)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Instalação e Execução](#instalação-e-execução)
- [Moedas Suportadas](#moedas-suportadas)
- [Características Técnicas](#características-técnicas)
- [Design e Interface](#design-e-interface)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## 🎯 Sobre o Projeto

O **Convert** é uma aplicação web moderna desenvolvida para conversão de moedas estrangeiras para Real Brasileiro. O projeto oferece uma interface limpa, intuitiva e responsiva, proporcionando uma experiência de usuário excepcional na conversão de valores monetários.

## ✨ Funcionalidades

- 🔄 **Conversão em Tempo Real**: Conversão instantânea de moedas para Real Brasileiro
- 💰 **Múltiplas Moedas**: Suporte para Dólar Americano (USD), Euro (EUR) e Libra Esterlina (GBP)
- 🎨 **Interface Moderna**: Design elegante com tema escuro e gradientes
- 📱 **Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- ✅ **Validação de Dados**: Validação automática de entrada de dados
- 🔢 **Formatação Automática**: Formatação automática de valores monetários no padrão brasileiro
- ⚡ **Performance Otimizada**: Carregamento rápido e operações eficientes

## 🛠 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização avançada com:
  - Flexbox para layout
  - Custom Properties (CSS Variables)
  - Gradientes e transições
  - Responsividade
- **JavaScript ES6+**: Lógica da aplicação com:
  - Manipulação do DOM
  - Event Handlers
  - Validação de formulários
  - Formatação de moedas

### Recursos Externos
- **Google Fonts**: 
  - IBM Plex Mono (fonte monoespaçada)
  - Roboto (fonte principal)

## 📁 Estrutura do Projeto

```
projeto-convert/
├── index.html          # Página principal da aplicação
├── script.js           # Lógica JavaScript da aplicação
├── styles.css          # Estilos CSS da aplicação
├── README.md           # Documentação do projeto
└── img/                # Recursos visuais
    ├── bg.png          # Imagem de fundo
    ├── check.svg       # Ícone de confirmação
    ├── chevron-down.svg # Ícone do dropdown
    └── logo.svg        # Logo da aplicação
```

## 🚀 Como Usar

1. **Inserir Valor**: Digite o valor que deseja converter no campo "valor"
2. **Selecionar Moeda**: Escolha a moeda de origem no dropdown "moeda"
3. **Converter**: Clique no botão "Converter em reais"
4. **Visualizar Resultado**: O resultado aparecerá automaticamente com:
   - Taxa de câmbio atual
   - Valor convertido em reais

### Exemplo de Uso

```
Valor: 100
Moeda: Dólar Americano (USD)
Resultado: US$ 1 = R$ 4,87
           487,00 Reais
```

## 💻 Instalação e Execução

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### Executando Localmente

1. **Clone ou baixe o projeto**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd projeto-convert
   ```

2. **Abra diretamente no navegador**
   - Abra o arquivo `index.html` diretamente no seu navegador
   
3. **Ou use um servidor local** (recomendado)
   ```bash
   # Com Python
   python -m http.server 3000
   
   # Com Node.js (http-server)
   npx http-server
   
   # Com PHP
   php -S localhost:3000
   ```

4. **Acesse a aplicação**
   - URL: `http://localhost:3000` (se usando servidor local)
   - Ou simplesmente abra o `index.html` no navegador

## 💱 Moedas Suportadas

| Moeda | Código | Símbolo | Taxa Atual* |
|-------|--------|---------|-------------|
| Dólar Americano | USD | US$ | R$ 4,87 |
| Euro | EUR | € | R$ 5,32 |
| Libra Esterlina | GBP | £ | R$ 6,08 |

*As taxas são fixas para demonstração. Em uma versão de produção, recomenda-se integrar com uma API de cotações em tempo real.

## ⚙️ Características Técnicas

### Validação de Entrada
- **Números apenas**: O campo de valor aceita somente números
- **Campos obrigatórios**: Validação de preenchimento dos campos
- **Tratamento de erros**: Mensagens de erro amigáveis ao usuário

### Formatação de Moedas
- **Padrão brasileiro**: Formatação automática no padrão `R$ 0.000,00`
- **Localização**: Uso da API `Intl.NumberFormat` para formatação precisa
- **Responsividade**: Ajuste automático para diferentes tamanhos de tela

### Performance
- **CSS otimizado**: Uso eficiente de seletores e propriedades
- **JavaScript modular**: Código organizado em funções reutilizáveis
- **Imagens otimizadas**: Uso de SVGs para ícones e logo

## 🎨 Design e Interface

### Paleta de Cores
- **Primária**: `#2f34ab` (Azul principal)
- **Secundária**: `#4a5dcd` (Azul hover)
- **Fundo**: `#141534` (Azul escuro)
- **Texto**: `#f1f2f6` (Branco/cinza claro)
- **Accent**: `#7d8dec` (Azul claro para detalhes)

### Tipografia
- **Texto principal**: Roboto (400, 500, 700)
- **Texto monoespaçado**: IBM Plex Mono (para valores)

### Layout
- **Design centrado**: Layout centralizado e focado
- **Responsivo**: Adaptável a diferentes tamanhos de tela
- **Micro-interações**: Transições suaves e feedback visual

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
