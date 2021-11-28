/**
 * FUNCIONA PARA QUALQUER UM DOS FOR (estrurutra de repetição);
 */

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let n of num){
    if (n === 2){
        continue; // pula para a proxima interação do lado (pular um codigo)
    }

    console.log(n);

    if( n === 7){
        break; // usado para sair do laço (parar o codigo depois do 'break')
    }
}