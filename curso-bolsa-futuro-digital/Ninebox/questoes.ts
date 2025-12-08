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
         console.log("Texto e Eixo da questão são obrigatórios.")
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
  
    atualizarQuestao(id, novoTexto, novoEixo) {
        // Encontra a questão pelo ID
        const questao = this.questoes.find(q => q.id === id)

        if (!questao) {
            console.log(`Erro: Questão com ID ${id} não encontrada.`)
            return false
        }

        if (novoTexto) {
            questao.texto = novoTexto
        }
        
        if (novoEixo && (novoEixo === 'Desempenho' || novoEixo === 'Potencial')) {
            questao.eixo = novoEixo
        }

        console.log(`Questão ID ${id} atualizada.`)
        return true
    }

    excluirQuestao(id) {
        const tamanhoInicial = this.questoes.length
        // Filtra apenas as questões que não têm o ID 
        this.questoes = this.questoes.filter(q => q.id !== id)
        
        if (this.questoes.length < tamanhoInicial) {
            console.log(`Questão ID ${id} excluída.`)
            return true
        } else {
            console.log(`Erro: Questão com ID ${id} não encontrada.`)
            return false
        }
    }
}

// Teste de funcionalidade
const banco = new BancoDeQuestoes()
banco.listarQuestoes()
banco.criarQuestao("É um gestor eficaz para novos colaboradores?", "Potencial")
banco.atualizarQuestao(1, "O funcionário cumpre os objetivos do trimestre.", "Desempenho")
banco.excluirQuestao(4)
banco.listarQuestoes()
