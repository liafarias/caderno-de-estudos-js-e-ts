/** PARA ARRAYS
 * Atribuir para cada indice com uma nova variavel
 * é possivel usar const ou let
 * ... rest -> pegar o resto
 * ... spread -> distribuir alguma coisa
 * é possivel usar valores vazios (um, , três)
 * é possivel usar um array dentro de um array
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const primeiroNumero = numeros[0];
console.log(numeros[0]);

// USANDO A ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
const [ , segundoNumero, terceiroNumero, ... resto] = numeros;
console.log(segundoNumero, terceiroNumero);
console.log(resto);

// USANDO UM ARRAY DENTRO DE OUTRO ARRAY
const numerosArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]; //OBS: cada ARRAY possui um indice proprio, e DENTRO de cada array cada ELEMENTO possui seu proprio indice
console.log(numerosArray[2][2]);

// const [ , [ , , seis]]; //atribuição em arrays dentro do arrys (não usar)


/** PARA OBJETOS
 * Estou passando um objeto e pedindo para extrair desse objeto essa chave {} e criando uma nova variavel com essa chave.
 */

const pessoa = {
    nome: 'Juan',
    sobrenome: 'Silva',
    idade: 25,
    endereco:{
        rua: 'Av. Brasil',
        numero: 324,
        complemento: 'casa 4'
    }
}

// USANDO A DESTRUTURAÇÃO
const {nome, sobrenome} = pessoa
console.log(nome, sobrenome);

const {estadoCivil = 'Não informado'} = pessoa // atribuindo valor padrão para variaveis que não existe
console.log(estadoCivil);

const {endereco: {complemento}} = pessoa// especificar os valores de um objeto dentro de outro objeto
console.log(complemento);
const {endereco: {rua: r}} = pessoa // mudando o nome da variavel
console.log(r);

//const {nome, sobrenome, ...resto} = pessoa // usando o rest