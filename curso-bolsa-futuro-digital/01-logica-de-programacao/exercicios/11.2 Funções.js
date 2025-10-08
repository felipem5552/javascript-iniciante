// 7️⃣ Funções - Cálculo de Área do Triângulo

// Neste exercício, vamos criar uma função que calcula a área de um triângulo
// a partir dos valores de base e altura fornecidos pelo usuário.


// 1. Escreva uma função que retorne a área de um triângulo.
//  Fórmula: A = (base × altura) / 2
function areatriangulo(base, altura) {
  let area = (base * altura) / 2
  alert(`A área do seu triângulo é: ${area} cm²`)
}

// 2. Solicite ao usuário os valores de base e altura.
let base = parseFloat(prompt("Digite aqui a base do seu triângulo:")) || 0
let altura = parseFloat(prompt("Digite aqui a altura do seu triângulo:")) || 0

// 3. Chame a função passando os valores digitados como parâmetros.
areatriangulo(base, altura)


// 4. Observações importantes:
// - A função recebe dois parâmetros: base e altura.
// - Parâmetros são valores de entrada que uma função precisa para realizar seu trabalho.
// - Eles funcionam como caixinhas temporárias que guardam valores enviados na hora de chamar a função.
// - Exemplo: em `areatriangulo(base, altura)`, os valores digitados pelo usuário vão direto para essas caixinhas.
// - O cálculo da área é feito usando a fórmula matemática: (base * altura) / 2.
// - O operador "|| 0" evita que valores inválidos resultem em NaN, substituindo-os por zero.

