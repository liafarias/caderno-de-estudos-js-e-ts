//ARRAYS - REVISÃO, BASICO E AVANÇADO
console.log('Arrays basicos') // titulo

//array literal
const nomes = ['Pedro', 'José', 'Matheus', 'Lucas', 'Lara'];
//construtor de array
const nomes2 = new Array('Sara', 'Leticia', 'Sofia', 'João');
nomes[2] = 'Marcos';
console.log(nomes);
console.log(nomes2);
//valor por referencia -> tudo que se altera em um altera em outro
const novo = nomes
novo.pop();
console.log(novo);
// -> ele copia um array, por isso quando se altera um não altera o outro.
const novo2 =[...nomes];
novo2.pop();
console.log(novo2);
//tamanho do array
console.log(nomes.length);
//pop -> remove o ultimo elemento do array
const removido = nomes.pop(); //guarda o elemento removido em uma variavel
console.log(nomes, removido);
//shift -> remove o primeiro elemento do array, deslocando todos os indices do array
const removido1 = nomes.shift(); //guarda o elemento removido em uma variavel
console.log(nomes, removido);
//push -> adiciona elemento no final do array
nomes.push('Stefane')
console.log(nomes);
//unshift -> adiciona elemento no começo do array, deslocando todos os indices do array
nomes.unshift('Barbara');
nomes.unshift('Samantha');
//slice -> fatiar um array
const novoarray = nomes.slice(1, 3); //para fatiar coloque o primeiro numero que você quer até o ultimo numero que você quer +1. Para remover de tras para frente é só usar numeros negativos.
console.log(novoarray);

//split -> converter uma string em um array e separar por algum elemento
const nome = 'Luiz Otavio Miranda'
const nomeEmArray = nome.split(' ');
console.log(nomeEmArray);
//join -> converter um array em uma string
const nomeEmArray1 = ['Luiz', 'Otavio', 'Miranda'];
const nomeEmString = nomeEmArray1.join(' ')
console.log(nomeEmString);

/**
 * PROXIMO ASSUNTO >>>>>>>>>>>>>>>>
 */

console.log(' '); // para organizar
console.log('Método Splice'); // titulo

const alunos = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
/**
 * COMO USAR:
 * alunos.splice(indice atual, delete(quantos elementos quer remover), elementos que você quer adicionar).
 * Retorna dois arrays 1- Array original e 2- Array de removidos.
 * Caso queira começar de tras para frente é só usar os numeros negativos.
 */
const removidos = alunos.splice(4, 1);
console.log(alunos, removidos);
const adicionados = alunos.splice(3, 0, 'Juca', 'Lua'); //adiciona no indice passado para frente.
console.log(alunos, adicionados);

/** SIMULANDO OUTROS METODOS
 * pop
 * const removidos = nomes.splice(-1, 1);
 * shift
 * const revomidos = nomes.splice(0, 1);
 * push
 * alunos.splice(nomes.length, 0, 'Luiz');
 * unshift
 * alunos.splice(0, 0, 'Luiz', 'Otavio');
 */


/**
 * PROXIMO ASSUNTO >>>>>>>>>>>>>>>>
 */

 console.log(' '); // para organizar
 console.log('Concatenando arrays'); // titulo

 const array1 = [1, 2, 3];
 const array2 = [4, 5, 6];
 const array3 = array1.concat(array2, [7, 8, 9], 'Lua');
 //spread -> espalha o array (pegar apenas os valores do array)
 const array4 = [...array1, 'Luan', ...array2, ...[2, 4, 5]]

 console.log(array3);
 console.log(array4);


 /**
 * PROXIMO ASSUNTO >>>>>>>>>>>>>>>>
 */

  console.log(' '); // para organizar
  console.log('Filter - Filtrando o array'); // titulo
  /**
   * Filter sempre vai retornar um array com a mesma quantidade de elementos ou menos.
   */

  // Retorne os numeros maiores que 10
  const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

  function callBackFilter(valor){
      return(valor > 10);
  }

  const numFiltrados = num.filter(callBackFilter); //não executar ()
  console.log(numFiltrados);

// utilizando uma função sem nome
    //const numFiltrados = num.filter(function(valor){ return valor > 10}); 

//utilizando uma arrow function
    //const numFiltrados = num.filter(valor => { return valor > 10}); 

/** EXERCICIO 2
 * Retorne as pessoas que tem o nome com 5 letras ou mais
 * Retorne as pessoas com mais de 50 anos
 * Retorne as pessoas cujo nome termina com a letra a
 */

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];


const pessoasComNomeMaiorQueCincoLetras = pessoas.filter(function(valor){
    return valor.nome.length >= 5;
});
console.log(pessoasComNomeMaiorQueCincoLetras);

const pessoasMaisCinquentaAnos = pessoas.filter(function(valor){
    return valor.idade > 50
});
console.log(pessoasMaisCinquentaAnos);

const pessoasNomeTerminaComA = pessoas.filter(function(valor){
    return valor.nome.toLowerCase().endsWith('a');
})

console.log(pessoasNomeTerminaComA);

/**
 * PROXIMO ASSUNTO >>>>>>>>>>>>>>>>
 */

 console.log(' '); // para organizar
 console.log('Map - Mapeando um array'); // titulo

 /**
  * PARECIDO COM O FILTER
  * Altera os valores do array
  * Retorna um array do mesmo tamanho do array original porém com os valores alterados 
  */

  //Dobrar os números
  const dobrarNumeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
  const numerosEmDobro = dobrarNumeros.map(valor => valor * 2); // arrow function

  console.log(numerosEmDobro);

  /** Retorne para cada elemento
   * Apenas uma string com o nome da pessoa
   * Remova apenas a chave "nome" do objeto
   * Adicione uma chave id em cada objeto
   */
   const pessoas1 = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];
const nomesMap = pessoas1.map(valor => valor.nome); //arrow function
console.log(nomesMap)
const removerNome = pessoas1.map(function(valor){
    return {idade: valor.idade}
})
console.log(removerNome);
const adicionarID = pessoas1.map(function(valor, indice){
    valor.id = indice*4
    return valor
});
console.log(adicionarID);
/*PARA NÃO MODIFICAR O OBJETO ORIGINAL
 const adicionarID = pessoas1.map(function(valor, indice){
    const newObj = {...valor};
    newObj.id = indice*4;
    return newObj;
});
console.log(adicionarID);
*/