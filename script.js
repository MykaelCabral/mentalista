// if = se
// condicional = if else, if, else
// == = comparaçao e nao atribuiçao
// else =  se nao
// || = ou
// innerHTML = imprimir na tela a mensagem
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "voce acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "comando invalido, digite um numero emtre 0 e 10";
  } else {
    elementoResultado.innerHTML = "errou o numero secreto era " + numeroSecreto;
  }
}