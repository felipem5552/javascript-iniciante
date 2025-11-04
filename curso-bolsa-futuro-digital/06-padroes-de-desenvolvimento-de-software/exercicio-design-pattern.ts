interface Pagina {
    exibir(): void
}

// Elementos necessários para Currículos
class PaginaHabilidades implements Pagina {
    exibir(): void {
        console.log("Página de Habilidades")
    }
}

class PaginaEducacao implements Pagina {
    exibir(): void {
        console.log("Página de Educação")
    }
}

class PaginaExperiencia implements Pagina {
    exibir(): void {
        console.log("Página de Experiência")
    }
}

// Elementos necessários para Relatórios
class PaginaIntroducao implements Pagina {
    exibir(): void {
        console.log("Página de Introdução")
    }
}

class PaginaResultados implements Pagina {
    exibir(): void {
        console.log("Página de Resultados")
    }
}

class PaginaConclusao implements Pagina {
    exibir(): void {
        console.log("Página de Conclusão")
    }
}

class PaginaResumo implements Pagina {
    exibir(): void {
        console.log("Página de Resumo")
    }
}

class PaginaBibliografia implements Pagina {
    exibir(): void {
        console.log("Página de Bibliografia")
    }
}

// Factory Metod
abstract class Documento {
    protected paginas: Pagina[] = []

    abstract criarPaginas(): void

    public mostrarPaginas(): void {
        console.log(`${this.constructor.name} -------`)
        this.paginas.forEach(p => p.exibir())
    }
}

class Curriculo extends Documento {
    criarPaginas(): void {
        this.paginas.push(
            new PaginaHabilidades(),
            new PaginaEducacao(),
            new PaginaExperiencia()
        )
    }
}

class Relatorio extends Documento {
    criarPaginas(): void {
        this.paginas.push(
            new PaginaIntroducao(),
            new PaginaResultados(),
            new PaginaConclusao(),
            new PaginaResumo(),
            new PaginaBibliografia()
        )
    }
}


function main() {
    // Criando e exibindo o Currículo
    const curriculo = new Curriculo()
    curriculo.criarPaginas()
    curriculo.mostrarPaginas()

    console.log("")

    // Criando e exibindo o Relatório
    const relatorio = new Relatorio()
    relatorio.criarPaginas()
    relatorio.mostrarPaginas()
}

main()
