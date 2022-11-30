var pessoa = {
    nome: 'bruna',
    idade: 19,
}

console.log(pessoa)

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro: function(lado) {
        return this.lados * lado 
    },
    cinco() {
        return 5;
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))


const livro = {
    nome: "O Senhor dos Anéis",
    ano: 1954,
    autor: "J. R. R. Tolkien"
}

const filme = {
    nome: "O Senhor dos Anéis",
    ano: 2001,
    diretor: "Peter Jackson"
}

console.log(livro.nome)