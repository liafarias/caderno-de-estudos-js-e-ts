console.log('Revisando Objetos');

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
console.log(pessoa.nome);
console.log(pessoa['sobrenome']);//outra maneira de acessar.

const chave = 'nome';
console.log(pessoa[chave]);// usar de maneira dinamica

console.log(' '); // para organizar

// construtor de objeto
const pessoa1 = new Object();
pessoa1.apagar = ' '
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 22; //outra maneira de escrever
//metodos
delete pessoa1.apagar; //apagar chave

pessoa1.falarNome = function(){
    console.log(`${this.nome} está falando...`);
};

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
};

pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());

// CRIAR MOLDE COM FACTORY FUNCTIONS / CONSTRUCTOR FUNCTIONS

console.log('factory functions');
function criarPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criarPessoa('Luiz', 'Otavio');

console.log(p1.nomeCompleto());

console.log(' ');

console.log('Constructor Functions');

function Aluno(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Object.freeze(this); // para travar o objeto e não conseguir mais mexer nele (nem adicionar nada)
}

// {} <- this (muda de acordo com a variavel)
const a1 = new Aluno('Luiz', 'Miranda')
const a2 = new Aluno('Luana', 'Soares')
console.log(a1);
console.log(a2);

/**
 * 
 *   PROXIMO ASSUNTO >>>>>>>>>>>
 * 
 */

console.log(' ');
console.log('Object.defineProperty() e Object.defineProperties()'); //titulo

function Produto(nome, preco, estoque){
    //configurar apenas uma chave

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // para exibir
        value: estoque, //para exibir o valor
        writable: false, //alterar o valor
        configurable: false //configurar e deletar(reconfigurar = criando outra dessa)
    });

    Object.defineProperties(this,{
        nome:{
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco:{
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });
}

const produto = new Produto('Camiseta', 20, 3);
console.log(produto);

/**
 * 
 *   PROXIMO ASSUNTO >>>>>>>>>>>
 * 
 */

 console.log(' ');
 console.log('Getters e Setters'); //titulo

 function Produto1(nome, preco, estoque,){
     this.nome = nome;
     this.preco = preco;
     let estoqueprivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: teste,
        //writable: false,
        configurable: false,
        get: function(){
            return estoqueprivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem');
            }
            estoqueprivado = valor;
        }
    });
};

const produto1 = new Produto1('Salto', 90, 3);
console.log(produto1);


function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', ' ')
            nome = valor
        }
    };
};

const produto2 = criaProduto('Vestido');
produto2.nome = "Sapato";
console.log(produto2);

/**
 * 
 *   PROXIMO ASSUNTO >>>>>>>>>>>
 * 
 */

 console.log(' ');
 console.log('Metodos uteis para objetos'); //titulo
/**
 * Object.values //retorna o valor dos objetos
 * Object.entries //retorna o valor e as chaves em um array
 * Object.defineProperty  //alterar as propriedades
 * Object.assign(des, any) //copiar o objeto
 * Obect.getOwnPropertyDescriptor(objeto, 'propriedade do objeto) //mostrar as informações de propriedade de um objeto
 * ... (spread) //copiar um objeto sem modificar o original
 * //////////
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define varias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

/**
 * 
 *   PROXIMO ASSUNTO >>>>>>>>>>>
 * 
 */

 console.log(' ');
 console.log('Prototypes'); //titulo
//Função construtora -> Molde 
 function Pessoa(nome, sobrenome){
     this.nome = nome,
     this.sobrenome = sobrenome
 }

 //criar um elemento no _proto_
 Pessoa.prototype.nomeCompleto = function(){
     return `${this.nome} ${this.sobrenome}`;
 }

 //instância
 const pessoaa1 = new Pessoa('João', 'Fernandes'); //<- Pessoa = Função construtora
 const pessoaa2 = new Pessoa('Mariana', 'Felix'); //<- Pessoa = Função construtora
 const data = new Date();

console.dir(pessoaa1.nomeCompleto());
console.dir(pessoaa2);
console.dir(data)
