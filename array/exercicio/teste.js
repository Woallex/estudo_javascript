//Crie um array com os anos que o Brasil ganhou a copa 1959, 1962, 1970, 1994, 2002
var copaBrasil = ['1959', '1962', '1970', '1994', '2002'];

//Interaja com o array utilizando o um loop para mostrar no console a seguinte mensagem: `O Brasil ganhou a copa de ${ano}`
for(var i = 0; i < copaBrasil.length; i++) {
    console.log(`O Brasil ganhou a copa de ${copaBrasil[i]}. `);
}

//Interaja com um loop nas frutas abaixo e pare ao chega em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva'];
for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if (frutas[i] === 'Pera') {
        break;
    }
}

//Coloque a ultima fruta do array acima em uma variável sem remover o mesmo do array
var ultimaFruta = frutas[frutas.length-1];
console.log(ultimaFruta);