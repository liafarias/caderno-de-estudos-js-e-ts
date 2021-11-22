// DECLARANDO UMA FUNÇÃO "NORMAL"
function saudacao(nome) {
    console.log(`Oi, fico feliz que você está aqui, ${nome}!`);
}

saudacao('Luana');


// USANDO O RETURN NA FUNÇÃO
function soma(a, b){
    
    return a + b; // retorna um valor. Apos esse comando encerra a função, nada depois disso será executado.
}
console.log(soma(1, 5));


// FUNÇÃO ANONIMA
const raiz = function(n){
return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(10));
console.log(raiz(3));


// ARROW FUNCTION
const raizQuadrada = (n) => n ** 0.5;

console.log(raizQuadrada(8));
/** 
 *OBS: Nas arrow function quando se tem apenas um valor no parametro não é necessario colocar ().
*/