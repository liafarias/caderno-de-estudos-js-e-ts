/** ESTRUTURA DE REPETIÇÃO
 * i = index (declarar no () caso não tenha sido declarada antes);
 * 0 = valor inicial (ou outro valor);
 * "i > n" onde o for vai parar (ou qualquer valor e qualquer sinal de comparação (>, >=, <, <=));
 * i++ para incrementar mais um em cada loop (ou -- para diminuir);
 */

for (let i = 0; i <= 5; i++){
    console.log(`Linha ${i}`);
}

// para pular de numeros diferentes de 1
for (let i = 0; i <= 100; i += 10){ // pode ser qualquer numero no lugar do 10
    console.log(`Linha ${i}`);
}

// PERCORRENDO UM ARRAY
const frutas = ['Maça', 'Pera', 'Uva', 'Abacaxi', 'Limão'];
for (let i = 0; i <= frutas.length; i++){
    console.log(i);
}
