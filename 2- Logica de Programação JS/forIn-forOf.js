/** FOR IN
 * Ler os indices do array ou chaves do objeto
 * Funciona em string, array e objetos
 */

 console.log('## FOR IN COM ARRAYS ##');
// ARRAY
const frutas = ['Maça', 'Abacaxi', 'Limão'];

for (let i in frutas){
    console.log(i); // retorna apenas o numero do indice
    console.log(frutas[i]);
}

console.log('## FOR IN COM OBJETOS ##');

// OBJETOS
const pessoa = {
    nome: 'Marcos',
    sobrenome: 'Almeida',
    idade: 21
}

for (let chave in pessoa){
    console.log(chave); // retorna apenas o nome da chave 
    console.log(pessoa[chave]);
}

console.log('## FOR OF ##');

/** FOR OF
 * Retorna o valor de cada elemento
 * ATENÇÃO NÃO PODE SER USADO EM OBJETOS
 * Funciona em interaveis, array ou strings
 */

const nomes = ['Marcos Almeida', 'Maria Soares', 'Luana Chaves'];

for(valor of nomes){
    console.log(valor)
}

/** FOR EACH
 * Retorna tanto o valor como o indice
 */
console.log('## FOR EACH ##');

nomes.forEach (function(valor, indice){
    console.log(valor, indice);
});