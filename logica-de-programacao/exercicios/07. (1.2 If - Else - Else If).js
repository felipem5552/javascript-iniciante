// 3️⃣ Verificação de Nota Anual (If, Else If e Else)

//Neste exercício, iremos utilizar mais condições com if e else, porém utilizando diversas condições com o else if.
//Else if → "senão se": ou seja, se a condição anterior do seu If não for verdadeira, ele verifica uma nova condição.
//Else → é apenas para quando nenhuma das condições anteriores do If e do Else If for verdadeira, sendo uma espécie de "Solução Final" caso nenhuma das anteriores for a correta.

// 1. Solicitar a nota anual do usuário e guarde esta informação dentro da variável nota;
let nota = parseFloat(prompt("Digite aqui sua nota anual:"))

// 2. Verificar o resultado da nota
//Condições - Nota 10 → "Perfeito"
//Nota de 7 a 9 → "Aprovado"
//Nota de 5 a 6 → "Recuperação"
//Nota abaixo de 5 → "Reprovado"
if (nota === 10) {
  alert("Sua nota foi perfeita!")
} else if (nota >= 7) {
  alert("Você foi aprovado, parabéns!")
} else if (nota >= 5) {
  alert("Você está de recuperação, tente melhorar mais")
} else {
  alert("Você foi reprovado")
}

// 3. Observações importantes:
// - prompt() retorna sempre o texto digitado em uma string, por isso usamos parseFloat no exercício para converter em um números decimais, já que se trata de notas.
// - operador === → verifica se o valor é exatamente igual (valor e tipo)
// - Sempre organize suas condições do maior para o menor: condição mais provável, para a menor provável.
// - Caso tenha dúvidas sobre como aplicar a lógica e o raciocínio dentro de um If/Else, dê uma olhada nas anotações do repositório para analisar um fluxograma que ajuda a compreender mais.



