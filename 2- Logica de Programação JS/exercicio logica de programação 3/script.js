/**
 * Escreva uma função que receba um numero e retorne o seguinte:
 * Numero é divisivel por 3 = fizz
 * Numero é divisivel por 5 = Buzz
 * Numero é divisivel por 3 e 5 = FizzBuzz
 * Numero NÃO é divisivel por 3 e 5 = Retorna o proprio numero
 * Checar se um numero é realmente um numero
 * Usar numeros de 0 a 100
 */

function checarNumero (num){

    if(typeof num !== 'number'){
        return num;
    };

    if (num%3 === 0 && num%5 === 0){
        return 'FizzBuzz';
    } else if (num %3 === 0){
        return 'Fizz';
    } ;
    if (num %5 === 0){
        return 'Buzz';
    };
    return num;
}

for (let i = 0; i <= 100; i++){
    console.log(i, checarNumero(i));
}