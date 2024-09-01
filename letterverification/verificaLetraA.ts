import * as readline from "readline";

function contarLetraA(texto: string): number {
  const regex = /[aA]/g;
  const ocorrencias = texto.match(regex);
  return ocorrencias ? ocorrencias.length : 0;
}

function verificarLetraA(texto: string): void {
  const quantidade = contarLetraA(texto);
  if (quantidade > 0) {
    console.log(
      `A letra 'a' (maiúscula e minúscula) aparece ${quantidade} vez(es) na string.`
    );
  } else {
    console.log("A letra 'a' (maiúscula e minúscula) não aparece na string.");
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar() {
  rl.question(
    'Digite um texto para verificar a ocorrência da letra "a" (ou "sair" para encerrar): ',
    (input) => {
      if (input.toLowerCase() === "sair") {
        console.log("Encerrando o programa.");
        rl.close();
        return;
      }

      verificarLetraA(input);
      perguntar();
    }
  );
}

perguntar();
