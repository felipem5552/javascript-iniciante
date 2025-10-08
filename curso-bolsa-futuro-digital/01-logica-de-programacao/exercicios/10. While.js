// 6️⃣ Estruturas de Repetição - Laço "while"

// Neste exercício, vamos utilizar a estrutura de repetição "while",
// que executa o bloco de código enquanto a condição for verdadeira.


// 1. Usando um laço while, imprima os números de 10 a 1 (em ordem decrescente).
var n = 0; 
var x = 11; // "x" começa em 11 para imprimir de 10 a 1.

while (n < 10) { // Enquanto "n" for menor que 10, o laço continua executando.
    n++;         // Incrementa "n" para controlar as repetições.
    x--;         // Decrementa "x" para imprimir números em ordem decrescente.
    console.log(x); 
}

// 2. Usando um laço while, imprima os números pares de 20 a 0 (em ordem decrescente).
var n = 0;
var x = 22; // "x" começa em 22 para imprimir pares de 20 a 0.

while (x > 0) { // O laço continua enquanto "x" for maior que 0.
    n++;        // Incrementa "n" para contar as repetições (não interfere na condição).
    x -= 2;     // Decrementa "x" de 2 em 2 para imprimir apenas números pares.
    console.log(x); 
}


// 3. Observações importantes:
// - O laço "for" executa um código com controle de início, condição e incremento, ideal quando sabemos o número exato de repetições.
// - O laço "while" verifica a condição antes de executar o código e pode não executar nenhuma vez se a condição for falsa inicialmente.
// - O laço "do...while" executa o código pelo menos uma vez antes de verificar a condição, garantindo uma execução inicial.
// - Todos podem ser usados para repetir código, mas a escolha depende da necessidade de controle e da lógica do problema.

