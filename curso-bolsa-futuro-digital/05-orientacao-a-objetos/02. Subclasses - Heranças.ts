interface Animal {
    nome: string
    emitirSom(): void
}

class Gato implements Animal {
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    emitirSom(): void {
        console.log(`Miau!`)
    }

    arranhar(): void {
        console.log(`${this.nome} está arranhando o sofá!`)
    }
}

////////////////////////////////////////////////////

class Passaro implements Animal {
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    emitirSom(): void {
        console.log(`Piu piu!`)
    }

    voar(): void {
        console.log(`${this.nome} está voando!`)
    }
}

////////////////////////////////////////////

const gato = new Gato("Frajola")
gato.emitirSom()
gato.arranhar()

const passaro = new Passaro("Louro José")
passaro.emitirSom()
passaro.voar()
