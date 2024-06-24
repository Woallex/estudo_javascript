//Permite executar uma função para cada elemento de um array. 
var frutas = ['Banan', 'Maçã', 'laranja'];

frutas.forEach(function(frutas) {
    console.log(frutas)
});

//Outros parametros são o 'indix' e o 'array'
var frutas = ['Banan', 'Maçã', 'laranja'];

frutas.forEach(function(frutas, index, array) {
    console.log(frutas, index, array)
});