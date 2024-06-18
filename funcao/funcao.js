
function areaQuadrada (lado) {
    return lado * lado
}
console.log(areaQuadrada(5))

//Parametros e Argumentos
function imc(peso, altura) {
    const imc = peso / (altura ** 2)
    return imc
}
console.log(imc(80, 1.80))

//Argumentos podem ser função
addEventListener('click', function(){console.log('Clicou')})

//Pode ou não retornar um valor
function imc2(peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc)
}
imc2(100 , 1.80)
console.log(imc2(200, 1.80 ))

// valores retornados
function terceiraIdade (idade) {
    if (typeof idade !== 'number') {
        return 'Digite um número'
    } else if (idade >= 60){
        return true
    } else {
        return false
    }
}

console.log(terceiraIdade(60))

function perimetro (lado1, lado2, lado3, lado4) { 
    p = lado1 + lado2 + lado3 + lado4
    return p
}

console.log(perimetro(2, 2, 2, 2))
