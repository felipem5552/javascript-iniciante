class BancoDeQuestoes {
    constructor() {
        this.questoes = []
        this.proximoId = 1 

        // Questões iniciais
        this.criarQuestao("Atinge consistentemente suas metas de produtividade?", "Desempenho")
        this.criarQuestao("A qualidade do trabalho entregue está acima do esperado?", "Desempenho")
        this.criarQuestao("Busca ativamente por aprendizado e novas competências?", "Potencial")
        this.criarQuestao("Demonstra capacidade de assumir responsabilidades mais complexas?", "Potencial")
    }

    criarQuestao(texto, eixo) {
        if (!texto || (eixo !== 'Desempenho' && eixo !== 'Potencial')) {
            throw new Error("Texto e Eixo da questão são obrigatórios.")
        }
        
        const novaQuestao = {
            id: this.proximoId++,
            texto: texto,
            eixo: eixo
        }
        
        this.questoes.push(novaQuestao)
        return novaQuestao
    }

    listarQuestoes() {
        console.log("\n--- BANCO DE QUESTÕES ---")
        if (this.questoes.length === 0) {
            console.log("O banco de questões está vazio.")
        }
        this.questoes.forEach(q => {
            console.log(`[ID: ${q.id}] Eixo: ${q.eixo.padEnd(11)} | Pergunta: ${q.texto}`)
        })
        console.log("-------------------------\n")
        return this.questoes
    }
  
    
