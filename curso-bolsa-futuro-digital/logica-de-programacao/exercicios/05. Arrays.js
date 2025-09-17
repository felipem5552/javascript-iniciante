// 📌 Atividade: Rotina diária com horários

// Neste exercício, vamos aprender a usar **arrays** e **objetos** em JavaScript.
// Cada elemento do array representa uma atividade da rotina com seu respectivo horário.
// Assim, conseguimos organizar informações em pares: "atividade" e "horario".

// 1. Crie um array chamado "rotina" que guarda objetos, cada um com duas propriedades:
// - atividade: o que será feito
// - horario: o horário correspondente
var rotina = [
  { atividade: "acordar", horario: "06:00" },
  { atividade: "escovar os dentes", horario: "06:10" },
  { atividade: "trocar de roupa", horario: "06:15" },
  { atividade: "tomar café da manhã", horario: "06:30" },
  { atividade: "estudar", horario: "07:00" }
]

// 2. Acesse somente o horário de uma atividade específica dentro do array.
// Lembre-se: usamos o índice para escolher a posição do array.
// Exemplo: rotina[3] pega o quarto item da lista.
console.log(rotina[3].horario) // Resultado esperado: 06:30

// 3. Observações importantes:
// - Arrays são listas em JavaScript, e cada item tem um índice (começa do 0).
// - Objetos dentro do array permitem guardar pares de informações (atividade + horário).
// - Para acessar: rotina[indice].propriedade
