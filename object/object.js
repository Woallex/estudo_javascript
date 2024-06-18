var menu = {
    width:800,
    height:50,
    backgroundColor: '#84e'
}

// Do notation GET (add)
menu.color = 'blue' //add novo elemento a variavel menu
menu.esconder = function() {
    console.log('escondi')
} //add novo elemento a variavel menu


// Do notation SET (modifcar/substituir)
menu.backgroundColor = '#000' //modificando a cor


//Uso do THIS
var height = 120
var menu = {
    width:800,
    height:50,
    metadeHeigth(){
        return this.height / 2
    }
}

manu.metadeHeigth() // 25
// sem o this, seria 60


// -----------------Exercício------------------
/*
    Crie um objeto com os seus dados pessoais deve possui pelo menos duas propriedades nome e sobrenome.

    Crie um método no objeto anterior, que mostre o seu nome completo.

    Modifique o valor da propriedade preco para 3000.
    carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
    }

    Crie um objeto de um cochorro que represente um labrador, preto com 10 anos, que late ao ver um home. 
*/

dados = {
    nome:'Alex',
    sobrenome:'Pereira',
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
} 
console.log(dados.nomeCompleto())


carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}
carro.preco = '3000'
console.log(carro.preco)

cachorro = {
    cor: 'preto',
    idade: 10,
    latir: true,
    verHomem() {
        return this.latir
    }
}

console.log(cachorro.verHomem())

//  ou

carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
    latir(pessoa) {
        if (pessoa === 'home') {
            return 'latir'
        } else {
            return 'nada'
        }
    }
}