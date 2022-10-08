class Aluna {
    constructor(nome, idade) { //é necessário em toda classe
        this.nome = nome   //this faz referência à propriedade da classe
        this.idade = idade
        this.notas = [8, 9, 7]
    }

    pegarMedia() {  //método
        console.log()
    }

    calcularMedia() {   //método
        let somaNotas = 0;
        this.notas.forEach(nota => {
            somaNotas += nota
        })
    }
}