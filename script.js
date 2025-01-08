"use Strict";

const calcular = () => {

    //transforma as strings capturadas em valores
  const precoGasolina = parseFloat(document.getElementById("precoGasolina").value);
  const consumoGasolina = parseFloat(document.getElementById("consumoGasolina").value);
  const precoAlcool = parseFloat(document.getElementById("precoAlcool").value);
  const consumoAlcool = parseFloat(document.getElementById("consumoAlcool").value);

    //verifica se existe algum campo vazio
  if (isNaN(precoGasolina) || isNaN(consumoGasolina) || isNaN(precoAlcool) || isNaN(consumoAlcool)) {
    alert('Preencha todos os campos com números válidos')
  }

    //Calcula os custos por km
  let custoGasolina = precoGasolina / consumoGasolina;
  let custoAlcool = precoAlcool / consumoAlcool;

  console.log(custoGasolina);
  console.log(custoAlcool);

    //determina a mensagem que o usuário irá receber
  let retornaMensagem;

  if (custoGasolina < custoAlcool) {
    retornaMensagem = `A gasolina é mais vantajoso. (R$ ${custoGasolina.toFixed(2)}/km)`;
  } else {
    retornaMensagem = `O álcool é mais vantajoso. (R$ ${custoAlcool.toFixed(2)}/km)`;
  }

    //exibe a mensagem ao usuário
  document.getElementById('resultado').textContent = retornaMensagem
};