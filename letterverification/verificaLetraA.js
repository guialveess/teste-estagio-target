"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function contarLetraA(texto) {
  var regex = /[aA]/g;
  var ocorrencias = texto.match(regex);
  return ocorrencias ? ocorrencias.length : 0;
}
function verificarLetraA(texto) {
  var quantidade = contarLetraA(texto);
  if (quantidade > 0) {
    console.log(
      "A letra 'a' (mai\u00FAscula e min\u00FAscula) aparece ".concat(
        quantidade,
        " vez(es) na string."
      )
    );
  } else {
    console.log("A letra 'a' (maiúscula e minúscula) não aparece na string.");
  }
}
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(
  'Digite um texto para verificar a ocorrência da letra "a": ',
  function (input) {
    verificarLetraA(input);
    rl.close();
  }
);
