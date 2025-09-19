// 8️⃣ Funções - Cálculo de Fatorial

// Neste exercício, vamos criar uma função que calcula o fatorial de um número inteiro.

// 1. Escreva uma função que calcule e retorne o fatorial de um número fornecido pelo usuário.
function fatorial(numero) {
  let resultado = 1
  let contador = 1

  while (contador <= numero) {
    resultado = resultado * contador
    contador = contador + 1
  }

  return resultado
}


// 2. Solicite ao usuário um número inteiro com prompt() e converta para número usando parseInt().
let numerodigitado = parseInt(prompt("Digite um número:"))


// 3. Chame a função passando o número digitado como parâmetro e exiba o resultado.
let resultadofinal = fatorial(numerodigitado)
alert("O fatorial de " + numerodigitado + " é: " + resultadofinal)


// 4. Observações importantes:
// - A função recebe um parâmetro: `numero`, que é o valor usado no cálculo.
// - O while repete a multiplicação até alcançar o valor do parâmetro.
// - O return devolve o resultado para ser usado fora da função.

