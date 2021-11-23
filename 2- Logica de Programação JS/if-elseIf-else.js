/**
 * If pode ser utilizado sozinho
 * Sempre que utilizo a palavra else, preciso de um if antes
 * Posso ter varios else if na checagem
 * Só posso ter um if e um else (separado) na checagem
 */

/** 
 * EXEMPLO
 * Entre 0 - 11 -> Bom dia
 * Entre 12 - 17 -> Boa Tarde
 * Entre 18 - 23 -> Boa Noite
*/

const hora = 1291;

if(hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa Tarde');
} else if(hora >= 18 && hora <= 23){
    console.log('Boa Noite');
} else{
    console.log('Olá');
}

/**
 * EXEMPLO DOIS
 * If e else dependem um do outro
 */

const numero = 10;

if(numero >=0 && numero <= 5){
    console.log("O numero está entre 0 e 5");
} else if(numero >= 6 && numero <= 8){
    console.log("O numero está entre 6 e 8");
} else if(numero >= 9 && numero <= 11){
    console.log("O numero está entre 9 e 11");
}else{
    console.log("O numero não está entre 0 e 11");
}