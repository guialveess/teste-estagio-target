function proximoImpar(ultimo) {
    return ultimo + 2;
}
function proximoPotenciaDeDois(ultimo) {
    return ultimo * 2;
}
function proximoQuadrado(n) {
    return Math.pow((n + 1), 2);
}
function proximoQuadradoPar(n) {
    var proximoPar = Math.sqrt(n) + 2;
    return Math.pow(proximoPar, 2);
}
function proximoFibonacci(a, b) {
    return a + b;
}
function proximoSem3(ultimo) {
    var proximo = ultimo + 1;
    while (proximo.toString().includes("3")) {
        proximo++;
    }
    return proximo;
}
var sequenciaA = [1, 3, 5, 7];
var sequenciaB = [2, 4, 8, 16, 32, 64];
var sequenciaC = [0, 1, 4, 9, 16, 25, 36];
var sequenciaD = [4, 16, 36, 64];
var sequenciaE = [1, 1, 2, 3, 5, 8];
var sequenciaF = [2, 10, 12, 16, 17, 18, 19];
console.log("Pr\u00F3ximo elemento da sequ\u00EAncia A: ".concat(proximoImpar(sequenciaA[sequenciaA.length - 1])));
console.log("Pr\u00F3ximo elemento da sequ\u00EAncia B: ".concat(proximoPotenciaDeDois(sequenciaB[sequenciaB.length - 1])));
console.log("Pr\u00F3ximo elemento da sequ\u00EAncia C: ".concat(proximoQuadrado(Math.sqrt(sequenciaC[sequenciaC.length - 1]))));
console.log("Pr\u00F3ximo elemento da sequ\u00EAncia D: ".concat(proximoQuadradoPar(sequenciaD[sequenciaD.length - 1])));
console.log("Pr\u00F3ximo elemento da sequ\u00EAncia E: ".concat(proximoFibonacci(sequenciaE[sequenciaE.length - 2], sequenciaE[sequenciaE.length - 1])));
console.log("Pr\u00F3ximo elemento da sequ\u00EAncia F: ".concat(proximoSem3(sequenciaF[sequenciaF.length - 1])));
