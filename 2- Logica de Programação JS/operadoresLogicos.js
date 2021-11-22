/**
 * && -> AND -> E (Todas as expressões precisam ser verdadeiras para retornar TRUE)
 * || -> OR -> OU (Uma ou mais expressões precisam ser verdadeiras para retornar verdadeira)
 * ! -> NOT -> NÃO (Inverte uma expressão)
 */

// EXEMPLOS
const trabalhandoComAnd = true && false && true && true;
console.log(trabalhandoComAnd); // FALSE

const trabalhandoComOr = false || true || true;
console.log(trabalhandoComOr); // TRUE

let trabalhandoComNot = !false;
console.log(trabalhandoComNot); // TRUE
trabalhandoComNot = !true;
console.log(trabalhandoComNot); // FALSE

/**
 * EXEMPLO APLICADO
 */
let usuario = 'liafarias';
const senha = '123456';

let vaiLogar = usuario === 'liafarias' && senha === 'euamoprogramar';
console.log(vaiLogar); // FALSE - usando o AND todas as informações precisam ser verdadeiras para ele retornar a expressão verdader 

vaiLogar = usuario === 'liafarias' || senha === 'euamoprogramar';
console.log(vaiLogar); // TRUE - usando o OR apenas uma das informações verdadeiras ele retorna toda a expressão verdadeira