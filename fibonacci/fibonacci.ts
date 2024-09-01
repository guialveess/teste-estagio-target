import * as readline from "readline";

function pertenceFibonacci(numero: number): boolean {
  function gerarFibonacci(max: number): number[] {
    const fibonacci: number[] = [0, 1];
    while (fibonacci[fibonacci.length - 1] < max) {
      const proximo =
        fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      fibonacci.push(proximo);
    }
    return fibonacci;
  }

  const fibonacci = gerarFibonacci(numero);
  return fibonacci.includes(numero);
}

function verificarNumeroFibonacci(numero: number): void {
  if (pertenceFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solicitarNumero() {
  rl.question(
    'Digite um número para verificar se pertence à sequência de Fibonacci (ou "sair" para encerrar): ',
    (input) => {
      if (input.toLowerCase() === "sair") {
        console.log("Saindo...");
        rl.close();
        return;
      }

      const numero = parseInt(input);
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
