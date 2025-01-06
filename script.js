"use Strict"

// cálculos do gasolina

function calculaGasolina() {

    let precoKm = 0
    let precoGasolina = 5.89
    let consumoGasolina = 36

    precoKm = (precoGasolina / consumoGasolina)
    console.log(precoKm)
    return precoKm

}

let resultadoGasolina = calculaGasolina()


// cálculos do álcool

function calculaAlcool() {

    let precoKm = 0
    let precoAlcool = 4.00
    let consumoAlcool = 25

    precoKm = (precoAlcool / consumoAlcool)
    console.log(precoKm)
    return precoKm

}

let resultadoAlcool = calculaAlcool()


// calcula o mais barato

let resuladoFinal = (resultadoGasolina < resultadoAlcool ? console.log("É melhor colocar gasolina") : console.log("É melhor colocar álcool"));