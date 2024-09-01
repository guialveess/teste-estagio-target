interface Lampada {
  ligada: boolean;
  quente: boolean;
}

function inicializarLampadas(): { [key: number]: Lampada } {
  return {
    1: { ligada: false, quente: false },
    2: { ligada: false, quente: false },
    3: { ligada: false, quente: false },
  };
}

function ligarInterruptor(
  lampadas: { [key: number]: Lampada },
  interruptor: number
): void {
  for (const key in lampadas) {
    lampadas[key].ligada = false;
  }
  lampadas[interruptor].ligada = true;
  lampadas[interruptor].quente = true;
}

function desligarInterruptor(
  lampadas: { [key: number]: Lampada },
  interruptor: number
): void {
  lampadas[interruptor].ligada = false;
}

function verificarLampadas(lampadas: { [key: number]: Lampada }): void {
  console.log("Verificação das lâmpadas:");
  for (const key in lampadas) {
    const lampada = lampadas[key];
    let status = lampada.ligada ? "ligada" : "desligada";
    let temperatura = lampada.quente ? "quente" : "fria";
    console.log(`Lâmpada ${key}: ${status} e ${temperatura}`);
  }
}

function simular(): void {
  let lampadas = inicializarLampadas();

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
