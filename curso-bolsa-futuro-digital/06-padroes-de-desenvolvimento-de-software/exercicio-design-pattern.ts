// Produto abstrato (o que precisa acontecer no final de tudo = gerar uma lista)
interface Pagina {
    lista(): void
}


// Produtos concretos (onde vai ser criado os elementos necessários que precisam estar dentro da lista solicitada)

// Elementos necessários para Currículos
class PaginaHabilidades implements Pagina {
    exibir(): void {
        console.log("Página de Habilidades")
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

class PaginaIntroducao implements Pagina {
    exibir(): void {
        console.log("Página de Resultado")
    }
}







}
