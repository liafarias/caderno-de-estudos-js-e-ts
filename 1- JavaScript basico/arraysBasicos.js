const alunos = [
    'Luiz',
    'Maria',
    'João',
    'Lucas',
    'Matheus'
]

/*
Devem ser escritos com um [ ] e sempre separados por virgula.
Os arrays são indexados por cada elemento dentro do array.
Assim como as strings o indice começa no 0.
*/

console.log(alunos); // todos

console.log(alunos[0]); // apenas o primeiro elemento

console.log(alunos[2]) // apenas o terceiro elemento

console.log(alunos.length); // para saber o tamanho do arry

alunos.push('Luan'); // adiciona o elemento no parametro na ultima posição do arry

alunos.unshift('Luiza'); // adiciona o elemento no parametro na primeira posição do arry

alunos.pop(); // remove o ultimo elemento do array (para salvar o  removido basta adicionado a uma variavel ex: cont removido = alunos.pop();)

alunos.shift(); // remove o primeiro elemento do array (para salvar o  removido basta adicionado a uma variavel ex: cont removido = alunos.shift();)

alunos.slice(0, 3); // para fatiar o array (é preciso passar os indices que quero incluir como parametro).
    //OBS: preciso passar como parametro um numero maior do que eu quero, ex: Se eu quero fatiar os indices 0 a 2, preciso passar como parametro 0 a 3.
    
console.log(alunos instanceof Array); // para saber se os elementos tratam de um array (retorna true ou falso)