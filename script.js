//cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => { 
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit do formulario
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // exibindo a cotação da moeda
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    
    // aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")

  } catch (error) {
    // remove a classe do footer, removendo ele da tela
    footer.classList.remove("show-result")
    console.log(error)
    alert("Não foi possível converter.")
  }
}

// formatação da moeda em real brasileiro
function formatCurrencyBRL(value) {
  //converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00)
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}
