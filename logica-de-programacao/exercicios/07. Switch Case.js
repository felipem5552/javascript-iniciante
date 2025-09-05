// 3️⃣ Consulta de Preços com switch

// Neste exercício, vamos utilizar a estrutura condicional "switch"
// ideal para trabalhar com diversas opções de forma mais organizada do que vários "if...else"

// 1. Solicite ao usuário que escolha uma fruta a partir de um menu com numeração
let fruta = prompt(`Tabela de preços - Frutas:

Digite o número referente a fruta para consultar seu valor
-----------------------------------------------------------
1. 🍊 Laranja
2. 🍎 Maçã
3. 🍌 Banana
4. 🍒 Cereja
5. 🥭 Manga
6. Sair da Janela`)

// 2. Utilize a estrutura "switch" para comparar o valor digitado com as opções disponíveis
// Cada "case" representa uma fruta. Quando há correspondência, o programa exibe o preço com alert()
switch (fruta) {
    case "1":
        alert("🍊 Laranja custa R$0,59")
        break
    case "2":
        alert("🍎 Maçã custa R$9,99")
        break
    case "3":
        alert("🍌 Banana custa R$3,99")
        break
    case "4":
        alert("🍒 Cereja custa R$19,99")
        break
    case "5":
        alert("🥭 Manga custa R$4,99")
        break
    case "6":
        // Nenhuma mensagem será exibida se o usuário escolher sair.
        break
    default:
        // Se o valor digitado não corresponder a nenhuma opção válida, esta mensagem será mostrada.
        alert("Opção não identificada")
}

// 3. Observações importantes:
// - O prompt() sempre retorna uma string. Por isso, os valores dos "case" são comparados como strings ("1", "2", etc).
// - O comando break é usado para encerrar cada caso. Sem ele, as outras opções seguintes também seriam executadas.
// - O case "6" funciona como uma opção para o usuário encerrar a interação sem exibir mensagens.
// - O default é usado como uma opção final, caso nenhuma das anteriores seja satisfeita.
