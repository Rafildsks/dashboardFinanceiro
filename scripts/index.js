// function nomeDaFuncao () [
//  bloco de execução
// }

// Para executar a função é preciso chamar

// nomeDaFuncao ()

// prompt() // input
// alert() // output
// confirm() // input
// console.log() // output
// Number() conversor em número
// String() conversor em Texto
// parseInt() conversor em inteiro
// parseFloat() conversor em numeros flutuantes (com decimal)
// tofixed(2) fixa o número de casas decimais

// função sem parâmetro e sem retorno
function dizerOi() {
  alert("Olá, boa noite!");
}

dizerOi();

// função com parâmetro
function soma(num1, num2) {
  let resultado = num1 + num2;
  console.log(resultado);
}

soma(1, 1); // valores alteraveis

// funçao com retorno

function subtracao(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
}

console.log("resultado:", subtracao(20, 10));

// função tipo "arrom function"
// hosting - função do tipo function que o arquivo consegue identificar a função antes da declaração
const multiplicacao = (num1, num2) => {
  let resultado = num1 * num2;
  return resultado;
};

console.log(multiplicacao(3, 3));

// função de callback

const frutas = ["Banana", "Maçã", "Pêra", "Mamão"]; // array -> Lista

const filtroFrutas = frutas.filter((item) => {
  return item === "Maçã";
});

console.log(filtroFrutas);
