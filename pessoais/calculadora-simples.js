function somar(a,b) {
    return a + b
}

function subtrair(a,b) {
    return a - b
}

function dividir(a,b) {
    return a / b
}

function multiplicar(a,b) {
    return a * b
}


function menucalculadora() {
    let executando = true

    alert("Calculadora Simples entre dois números")

    while (executando) {

        let opcao = prompt(`\n--- Menu ---
1. Somar
2. Subtrair
3. Multiplicar
4. Dividir
5. Sair`)

        if (opcao === "1") {
            let a = prompt(`Digite o primeiro numero`)
            let b = prompt(`1° ${a}
                Segundo número:.....`)
            let resultado = somar(Number(a), Number(b))

            alert(resultado) }

        else if (opcao === "2") {
            let a = prompt(`Digite o primeiro numero`)
            let b = prompt(`1° ${a}
                Segundo número:.....`)
            let resultado = subtrair(Number(a), Number(b))

            alert(resultado) }
        
        else if (opcao === "3") {
            let a = prompt(`Digite o primeiro numero`)
            let b = prompt(`1° ${a}
                Segundo número:.....`)
            let resultado = multiplicar(Number(a), Number(b))

            alert(resultado) }
        
        else if (opcao === "4") {
            let a = prompt(`Digite o primeiro numero`)
            let b = prompt(`1° ${a}
                Segundo número:.....`)
            let resultado = dividir(Number(a), Number(b))

            alert(resultado) }

        else if (opcao === "5") { 
            executando = false
            alert("Obrigado por usar a calculadora. Saindo...")}
    
        else { alert("Opção inválida. Por favor, escolha um número de 1 a 5.")}
        
        }

}

menucalculadora()
