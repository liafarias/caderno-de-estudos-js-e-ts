/**
 * && -> false && true -> false "o valor mesmo"
 * || ->
 * VALORES QUE AVALIAM EM FALSO QUANDO NECESSARIO(FALSY): false, 0, ' ', null, undefined, NaN 
 */

// EXEMPLOS
console.log('Luiz' && 'Maria'); // TRUE - retorna o ultimo valor checado ('Maria').
console,log('Luiz' && ' ' && 'Maria'); // FALSE - retorna o(s) valor(es) falsos checados (' ').

// EXEMPLO PRATICO
function falarOi(){
    return 'Oi';
}
const vaiExecutar = false;
console.log(vaiExecutar && falarOi());