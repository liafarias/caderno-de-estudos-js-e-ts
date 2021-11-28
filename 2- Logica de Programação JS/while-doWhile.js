/** WHILE
 * Utilizado para quando você não sabe o tamanho do elemento/laço (array, objetos, strings etc)
 */
let i = 0; // criar a variavel fora do while

while(i <= 10){
    console.log(i);
    i++ // atualizar a variavel de controle para não fazer um loop infinito 
}

// COM UMA STRING

const nome = 'Mariana';
let n = 0;

while (n < nome.length){
    console.log(nome[n]);
    n++;
}


// EXEMPO APLICADO

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // para arredondar o numero
}

const min = 1;
const max = 50;
let rand = random(1,50);

while (rand !== 10){
    rand = random(min, max)
    console.log(rand);
}


/** DO WHILE
 * Vai executar o codigo primeiro depois checar a condição
 */

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !==10);