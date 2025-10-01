// Exercício 9: Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.

let numero = prompt("Digite um número:");

if (numero > 0) {
    alert(`O número ${numero} é POSITIVO.`);
} else if (numero < 0) {
    alert(`O número ${numero} é NEGATIVO.`);
} else { 
    alert(`O número é ZERO.`);
}
