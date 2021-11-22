/**
 * && -> false && true -> false "o valor mesmo"
 * || -> true || false -> Vai retornar "o valor verdadeiro"
 * VALORES QUE AVALIAM EM FALSO QUANDO NECESSARIO(FALSY): false, 0, ' ', null, undefined, NaN 
 */

// EXEMPLOS AND
console.log('Luiz' && 'Maria'); // TRUE - retorna o ultimo valor checado ('Maria').
console.log('Luiz' && NaN && 'Maria'); // FALSE - retorna o ultimo valor falso checados (Nan).

// EXEMPLO PRATICO
function falarOi(){
    return 'oi';
}
let vaiExecutar = 'Joãozinho';
console.log(vaiExecutar && falarOi());

// EXEMPLOS OR
console.log(0 || false || null || 'Luiz Otavio' || true); // TRUE - Retorna o primeiro valor verdadeiro ('Luiz Otavio)
console.log(0 || false || null || true);

// EXEMPLO PRATICO
let corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); // retorna a cor padrão pois o usuario não escolheu uma cor (null é um valor falso então retorna preto que seria um valor verdadeiro)
corUsuario = 'vermelho';
const corPadrao2 = corUsuario || 'preto';
console.log(corPadrao2); // retorna a cor escolhida pelo usuario pois existem duas informações verdadeiras e será retornada apenas a primeira, que no caso é a let "vermelha";
