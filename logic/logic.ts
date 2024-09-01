function proximoImpar(ultimo: number): number {
  return ultimo + 2;
}

function proximoPotenciaDeDois(ultimo: number): number {
  return ultimo * 2;
}

function proximoQuadrado(n: number): number {
  return (n + 1) ** 2;
}

function proximoQuadradoPar(n: number): number {
  let proximoPar = Math.sqrt(n) + 2;
  return proximoPar ** 2;
}

function proximoFibonacci(a: number, b: number): number {
  return a + b;
}

function proximoSem3(ultimo: number): number {
  let proximo = ultimo + 1;
  while (proximo.toString().includes("3")) {
    proximo++;
  }
  return proximo;
}

const sequenciaA = [1, 3, 5, 7];
const sequenciaB = [2, 4, 8, 16, 32, 64];
const sequenciaC = [0, 1, 4, 9, 16, 25, 36];
const sequenciaD = [4, 16, 36, 64];
const sequenciaE = [1, 1, 2, 3, 5, 8];
const sequenciaF = [2, 10, 12, 16, 17, 18, 19];

console.log(
  `Próximo elemento da sequência A: ${proximoImpar(
    sequenciaA[sequenciaA.length - 1]
  )}`
);
console.log(
  `Próximo elemento da sequência B: ${proximoPotenciaDeDois(
    sequenciaB[sequenciaB.length - 1]
  )}`
);
console.log(
  `Próximo elemento da sequência C: ${proximoQuadrado(
    Math.sqrt(sequenciaC[sequenciaC.length - 1])
  )}`
);
console.log(
  `Próximo elemento da sequência D: ${proximoQuadradoPar(
    sequenciaD[sequenciaD.length - 1]
  )}`
);
console.log(
  `Próximo elemento da sequência E: ${proximoFibonacci(
    sequenciaE[sequenciaE.length - 2],
    sequenciaE[sequenciaE.length - 1]
  )}`
);
console.log(
  `Próximo elemento da sequência F: ${proximoSem3(
    sequenciaF[sequenciaF.length - 1]
  )}`
);
