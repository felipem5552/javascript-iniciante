// 5️⃣ Estruturas de Repetição - Laço "do...while"

// Neste exercício, vamos utilizar a estrutura de repetição "do...while",
// que executa o bloco de código pelo menos uma vez antes de verificar a condição.


// 1. Usando um laço do-while, imprima todos os números ímpares de 1 a 20.
let numero = 1

do {
    console.log(numero)
    numero += 2
} while (numero <= 20)


// 2. Usando um laço do-while, imprima todos os números pares de 0 a 20.
let numero = 0

do {
    console.log(numero)
    numero += 2
} while (numero <= 20)


// 3. Observações importantes:
// - O laço "do...while" executa o bloco de código pelo menos uma vez antes de verificar a condição.
// - Já o laço "for" verifica a condição antes de executar o bloco em cada repetição.
// - Por isso, o "do...while" é útil quando você quer garantir que o código rode pelo menos uma vez, mesmo que a condição inicial não seja verdadeira, como por exemplo um menu.

