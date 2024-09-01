function inicializarLampadas() {
    return {
        1: { ligada: false, quente: false },
        2: { ligada: false, quente: false },
        3: { ligada: false, quente: false },
    };
}
function ligarInterruptor(lampadas, interruptor) {
    for (var key in lampadas) {
        lampadas[key].ligada = false;
    }
    lampadas[interruptor].ligada = true;
    lampadas[interruptor].quente = true;
}
function desligarInterruptor(lampadas, interruptor) {
    lampadas[interruptor].ligada = false;
}
function verificarLampadas(lampadas) {
    console.log("Verificação das lâmpadas:");
    for (var key in lampadas) {
        var lampada = lampadas[key];
        var status_1 = lampada.ligada ? "ligada" : "desligada";
        var temperatura = lampada.quente ? "quente" : "fria";
        console.log("L\u00E2mpada ".concat(key, ": ").concat(status_1, " e ").concat(temperatura));
    }
}
function simular() {
    var lampadas = inicializarLampadas();
    console.log("Ligar o Interruptor 1 por 10 minutos.");
    ligarInterruptor(lampadas, 1);
    console.log("Desligar o Interruptor 1 e ligar o Interruptor 2.");
    desligarInterruptor(lampadas, 1);
    ligarInterruptor(lampadas, 2);
    verificarLampadas(lampadas);
}
simular();
/* Simulação:
     1. Ligar o Interruptor 1.
     2. Esperar um tempo simulado para que a lâmpada se aqueça.
     3. Desligar o Interruptor 1 e ligar o Interruptor 2.
     4. Verificar o estado das lâmpadas para determinar qual lâmpada estava controlada pelo Interruptor 1 e qual pelo Interruptor 2.
  */
