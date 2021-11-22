let varA = 'A';
let varB = 'B';
let varC = 'C';

/* DESAFIO: " transforme o valor de A pra que seja igual ao valor de B. 
o valor de B tenha o valor de C.
e o valor de C tenho valor de A"*/

// 1° METODO

const salvarVarA = varA // criar uma variavel para salvar a variavel "varA" para utilizar ela depois
varA = varB;
varB = varC;
varC = salvarVarA;

console.log(varA, varB, varC);

// 2° METODO
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);