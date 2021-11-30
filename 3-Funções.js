console.log('MANEIRAS DE DECLARAR UMA FUNÇÃO'); // titulo

//   MANEIRA CLASSICA    //
function falaOi(){
    console.log('Oi, sou uma função classica');
}

falaOi(); //CHAMAR A FUNÇÃO

//OBS: function hoisting -> Eleva as declarações de função e varivaeis, com a palavra var, para o topo do codigo do javascript.

console.log(' '); // apenas para organizar

//    FUNCTION EXPRESSION    //
const souUmDado = function(){
    console.log('sou uma function expression');
}
souUmDado();

console.log(' '); // apenas para organizar

//     EXECUTANDO UM PARAMETRO     //
function executarFuncao (funcao){
    console.log('Vou executar minha function expression nessa seguinte função, passando como parametro:');
    funcao();
}
executarFuncao(souUmDado);

//OBS: As funções são Frist-class objects (Objetos de primeira classe), ou seja é possivel chamar uma função dentro da outra, declarar em uma variavel ou declarar apenas um parametro.

console.log(' '); // apenas para organizar

//    ARROW FUNCTION    //
const funcaoArrow = () => {
    console.log('sou uma arrow function');
}
funcaoArrow();

console.log(' '); // apenas para organizar

//    FUNÇÃO DENTRO DE UM OBJETO   //
const obj = {
    falar: function(){
        console.log('Sou uma função dentro de um objeto');
    }
};
obj.falar();

/**
 * 
 * PROXIMO ASSUNTO >>>>>
 * 
 */

 console.log(' '); // apenas para organizar

console.log('PARAMETROS DE UMA FUNÇÃO'); //titulo

function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5); 
// A função definida com a palavra 'function' tem uma variavel especial definida com 'arguments' que sustenta todos os argumentos enviados (não importa os parametros sem serem declarados ou já declarados);
//OBS: isso só funciona no modo de declaração de funções classicas

/** Nos parametros é possivel:
 * Passar mais argumentos do que parametros ou menos argumentos do que os parametros (nesse caso os parametros sem argumentos serão undefined).
 * Atribuir um valor no proprio parametro. Exemplo: function funcao (a, b = 2, c = 5){ codigo aqui }.
 * Redeclarar os valores do padrão na hora de chamar a função.
 * Utilizar o rest (resto dos arumentos nos parametros) utilizando o '...' antes do argumento
 */

 console.log(' '); // apenas para organizar

console.log('EXEMPLO DE REST OPERATION');

function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50);

/**
 * 
 * PROXIMO ASSUNTO >>>>>
 * 
 */

console.log(' '); // apenas para organizar

 console.log('RETURN - RETORNO DA FUNÇÃO'); //titulo

 function soma(a, b){
     return a + b;
 }
 console.log(soma(7, 9));

 /**
  * Retorna um valor
  * Termina a função
  * As funções podem retornar ou não retornar nenhum valor.
  */

 /**
 * 
 * PROXIMO ASSUNTO >>>>>
 * 
 */

  console.log(' '); // apenas para organizar

  console.log('ESCOPO LÉXICO'); //titulo

const nome = 'Luiz'; // escopo global

function falaNome(){
    const nome = 'Otávio'; // escopo local (só funciona dentro da função e não altera outras funções, assim como outras funções não alteram ela.)
    console.log(nome);
}

/**
 * 
 * PROXIMO ASSUNTO >>>>>
 * 
 */

 console.log(' '); // apenas para organizar

 console.log('CLOSURES'); //titulo

 /**
  * Habilidade que a função tem de acessar seu escopo lexico.
  * Consegue acessar as variaveis fora dela, ou seja ela lembra do seu escopo lexico.
  * O closures pode ser alterado nos parametros de uma função.
  * 
  */

 function retornaFuncao(){
     const nome = 'Luiz';
     return function(){ // retornar a outra função
        return nome;
     }
 }

 const funcao1 = retornaFuncao();
 console.log(funcao1);

 /**
 * 
 * PROXIMO ASSUNTO >>>>>
 * 
 */

  console.log(' '); // apenas para organizar

  console.log('FUNÇÕES IMEDIATAS(IIFE)'); //titulo

/**
 * IIFE -> Immediately invoked function expression
 * Fugir do escopo global
 * Não tem conflito com variaveis já declaradas com o mesmo nome
 */  

(function(idade, peso, altura){
    const sobrenome = 'Miranda'
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.80); // para chamar a função.

const sobrenome = 'Silva'

/**
 * 
 * PROXIMO ASSUNTO >>>>>
 * 
 */

 console.log(' '); // apenas para organizar

 console.log('FACTORY FUNCTIONS (funções fabricas)'); //titulo
 /**
  * São funções que retornam um objeto
  * Metodo -> Uma função dentro de um objeto
  * this -> responsavel por chamar um objeto
  * Getter -> Função fingir que é um atributo do objeto (get)
  * 
  */

 function criarPessoa(nome, sobrenome, altura, peso){
     return {
         nome,

         sobrenome,

         get nomeCompleto(){ //GETTER
             return `${this.nome} ${this.sobrenome}`;
         },

         set nomeCompleto(valor){ //SETTER
             valor = valor.split(' ');
             this.nome = valor.shift();
             this.sobrenome = valor.join(' ');
         },

         fala(assunto){ //METODO
             return `${this.nome} está falando ${assunto}.`;
         },

         altura: altura,

         peso: peso,

         imc(){ //METODO
             const indiceIMC = this.peso / (this.altura ** 2);
             return indiceIMC.toFixed(2);
         }
     };
 }

 const p1 = criarPessoa('Luiz', 'Otavio', 1.80, 80);
 console.log(p1.fala('Quero descobrir meu IMC'));
 console.log(p1.imc());
 p1.nomeCompleto = 'Maria Oliveira Silva';
 console.log(p1.nomeCompleto)
 console.log(p1.nome);
 console.log(p1.sobrenome);


 /**
 * 
 * PROXIMO ASSUNTO >>>>>
 * 
 */

  console.log(' '); // apenas para organizar

 console.log('FUNÇÃO CONSTRUTORA'); //titulo

/**
 * Sempre iniciar o nome com a letra maiscula
 * Sempre usar a palavra (new)
 * Exemplo -> new Pessoa
 */

function Pessoa(nome, sobrenome){
    // atributios ou metodos privados
    const ID = 123456;
    const metodoInterno = function(){

    };
    // atributios ou metodos publicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    }
}

const pessoa1 = new Pessoa ('Luiz', 'Otávio');
const pessoa2 = new Pessoa ('Maria', 'Oliveira')
const pessoa3 = new Pessoa ('Sara', 'Silva');

console.log(pessoa2.nome); // 'Maria'
pessoa2.metodo();

 /**
 * 
 * PROXIMO ASSUNTO >>>>>
 * 
 */

  console.log(' '); // apenas para organizar

 console.log('FUNÇÃO RECURSIVA'); //titulo

 function recursiva(max){
     if(max >= 10) return;
     max++; //somar +1
     recursiva(max); // chamar novamente a função
     console.log(max);
 }
 recursiva(0); //declarar a função

  /**
 * 
 * PROXIMO ASSUNTO >>>>>
 * 
 */

   console.log(' '); // apenas para organizar

   console.log('FUNÇÃO GERADORAS'); //titulo

function* geradora1(){
    //codigo qualquer.....
    yield 'valor 1';
    //codigo qualquer.....
    yield 'valor 2';
    //codigo qualquer.....
    yield 'valor 3';
}

const g1 = geradora1();
console.log(g1.next().value); // para ver o valor
for (let valor of g1){
    console.log(valor);
}

console.log(' '); // apenas para organizar

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log(' '); // apenas para organizar

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3(); // delegar outra função
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

console.log(' '); // apenas para organizar
console.log('EXEMPLO APLICADO'); // apenas para organizar

function* geradora5(){
    yield function(){
        console.log('Vim do y1');
    }

    //......
    // return -> para o codigo e tudo depois dele não será executado.

    yield function(){
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const funcao1 = g5.next().value;
const funcao2 = g5.next().value;

funcao1();
funcao2();

/**
 * 
 * PROXIMO ASSUNTO >>>>>
 * 
 */

console.log(' '); // apenas para organizar

console.log('CALLBACK'); //titulo

function rand(min = 1000, max = 2000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if (callback) callback();
    }, rand());
  }

  function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if (callback) callback();
    }, rand());
  }

  function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if (callback) callback();
    }, rand());
  }

  // MELHOR MANEIRA
  f1 (f1Callback);

  function f1Callback(){
      f2(f2Callback);
  }

  function f2Callback(){
      f3(f3Callback);
  }

  function f3Callback(){
      console.log('Olá mundo')
  }

  // OUTRA MANEIRA DE FAZER O CODIGO ANTERIOS

/* 
f1(function(){
    f2(function(){
        f3 (function(){
            console.log('Olá mundo!');
        });
    });
});
*/ 