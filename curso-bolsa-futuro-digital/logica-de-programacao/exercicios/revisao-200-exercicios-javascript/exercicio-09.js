//Exercício 9: Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.

let num = parseInt(prompt("Digite um número de sua preferência, e direi se ele é positivo, negativo ou zero:"))

if (num > 0) {
    alert(`O número ${num} é positivo`)
}
else if (num < 0) {
    alert(`O número ${num} é negativo`)
}
else 
    alert(`O número ${num} é zero`)