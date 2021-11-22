/**
 * Primitivos (imutaveis) - string, number, boolean, undefined, null, bigint, symbol
 * Muda apenas o valor
 */

let A = 'a'
let B = a; // copia
console.log(a,b);

A = 'c'
console.log(A,B) // muda somente o valor do a, o b continua o mesmo.

/**
 * Dados passados por referencia (mutavel) - array, object, function
 */
let a = [1, 2, 3];
let b = a; // aponta para o mesmo local de a
console.log(a, b);

a.push(4);
console.log(a, b); // mudou tanto o a quanto o b

b.pop();
console.log(a, b) // mudou tanto o b quanto o a

// PARA APENAS COPIAR VALE PARA TODOS OS DADOS PASSADOS POR REFERENCIA 
let d = [1,2,3];
let e = [...d]; // fazendo uma copia
console.log(d, e) 

let d = [1, 2, 3, 4]
console.log(d, e) // mudou o d, mas não mudou o e