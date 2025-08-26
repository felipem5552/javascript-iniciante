// 2️⃣ Verificação de Idade (If e Else)

// Neste exercício, vamos aprender a usar a estrutura condicional "if" (Se) e "else" (Senão).
// Usaremos apenas uma condição com "if" e uma com "else", para que você compreenda a lógica de forma simplificada e direta.
// Trabalhar com apenas uma condição de cada nesse momento facilita o entendimento e ajuda a praticar a sintaxe básica.

// 1. Solicite ao usuário que digite sua idade e guarde esta informação dentro da variável idade
let idade = parseInt(prompt("Digite aqui sua idade:"))

// 2. Verifique se o usuário é maior de idade
if (idade >= 18) {
  console.log("Você é maior de idade")
} else {
  console.log("Você é menor de idade")
}

// 3. Observações importantes:
// - prompt() retorna sempre o texto digitado em uma string, por isso usamos parseInt no exercício para converter em um número inteiro.
// - O operador >= verifica se a idade é maior ou igual a 18.
// - console.log() ou Alert() exibe mensagens no console do navegador ou terminal.
