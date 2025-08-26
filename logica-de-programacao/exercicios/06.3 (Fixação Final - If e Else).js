// 4️⃣ Adivinhação de Número (If, Else e Else If)

// Neste exercício, vamos aprender a usar várias estruturas condicionais aninhadas (if dentro de if).
// OBS: if → verifica se uma condição é verdadeira e executa um bloco de código
// OBS: else if → "senão se": ou seja, se a condição anterior não for verdadeira, ele verifica uma nova condição
// OBS: else → é apenas para quando nenhuma das condições anteriores for verdadeira; ele executa o bloco sem verificar condição
// OBS: Podemos colocar if dentro de outro if para criar decisões mais complexas (aninhamento)

// 1. Mensagem inicial para o usuário
alert("Irei tentar descobrir em qual número você está pensando de 1 a 10, vamos lá.")

// 2. Perguntar se o número é par
let par = prompt("Responda só com Sim ou Não: O número que você está pensando é par?")

// 3. Estruturas condicionais aninhadas
if (par === "Sim") {
    // Se o número for par
    let maiorque5 = prompt("Responda só com Sim ou Não: o número que você está pensando é maior que 5?")

    if (maiorque5 === "Sim") {
        // Se o número par for maior que 5, pode ser 6, 8 ou 10
        let num6 = prompt("Responda só com Sim ou Não: o número que você está pensando é o 6?")
        
        if (num6 === "Sim") 
            alert("Acertei! É o 6")
        else {
            // Se não for 6, verificar se é 8
            let num8 = prompt("Responda só com Sim ou Não: o número que você está pensando é o 8?")
            
            if (num8 === "Sim") 
                alert("Acertei! É o 8")
            else 
                // Se não for 6 nem 8, então só pode ser 10
                alert("Então deve ser 10!")
        }

    } else {
        // Se o número par for menor ou igual a 5, pode ser 2 ou 4
        let num2 = prompt("Responda só com Sim ou Não: o número que você está pensando é o 2?")
        
        if (num2 === "Sim") 
            alert("Acertei! É o 2")
        else {
            // Se não for 2, verificar se é 4
            let num4 = prompt("Responda só com Sim ou Não: o número que você está pensando é o 4?")
            
            if (num4 === "Sim") 
                alert("Acertei! É o 4")
            else 
                // Se não for 2 nem 4, o usuário digitou um número fora de 1 a 10
                alert("Então você está pensando em um número que não seja de 1 a 10!")
        }
    }

} else {
    // Se o número não for par (impar)
    let maiorque5 = prompt("Responda só com Sim ou Não: o número que você está pensando é maior que 5?")
    
    if (maiorque5 === "Sim") {
        // Se o número ímpar for maior que 5, pode ser 7 ou 9
        let num7 = prompt("Responda só com Sim ou Não: o número que você está pensando é o 7?")
        
        if (num7 === "Sim") 
            alert("Acertei! É o 7")
        else 
            // Se não for 7, então só pode ser 9
            alert("Então deve ser 9!")
    } else {
        // Se o número ímpar for menor ou igual a 5, pode ser 1, 3 ou 5
        let num1 = prompt("Responda só com Sim ou Não: o número que você está pensando é o 1?")
        
        if (num1 === "Sim") 
            alert("Acertei! É o 1")
        else {
            // Se não for 1, verificar se é 3
            let num3 = prompt("Responda só com Sim ou Não: o número que você está pensando é o 3?")
            
            if (num3 === "Sim") 
                alert("Acertei! É o 3")
            else 
                // Se não for 1 nem 3, então só pode ser 5
                alert("Então deve ser 5!")
        }
    }
}

// OBS: Estruturas if/else → permitem decisões mais complexas com várias verificações
