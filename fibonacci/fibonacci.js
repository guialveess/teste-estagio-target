"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function pertenceFibonacci(numero) {
  function gerarFibonacci(max) {
    var fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] < max) {
      var proximo =
        fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      fibonacci.push(proximo);
    }
    return fibonacci;
  }
  var fibonacci = gerarFibonacci(numero);
  return fibonacci.includes(numero);
}

function verificarNumeroFibonacci(numero) {
  if (pertenceFibonacci(numero)) {
    console.log(
      "O n\u00FAmero ".concat(
        numero,
        " pertence \u00E0 sequ\u00EAncia de Fibonacci."
      )
    );
  } else {
    console.log(
      "O n\u00FAmero ".concat(
        numero,
        " n\u00E3o pertence \u00E0 sequ\u00EAncia de Fibonacci."
      )
    );
  }
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solicitarNumero() {
  rl.question(
    'Digite um número para verificar se pertence à sequência de Fibonacci (ou "sair" para encerrar): ',
    function (input) {
      if (input.toLowerCase() === "sair") {
        console.log("Saindo...");
        rl.close();
        return;
      }
      var numero = parseInt(input);
      if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
      } else {
        verificarNumeroFibonacci(numero);
      }

      solicitarNumero();
    }
  );
}

solicitarNumero();
