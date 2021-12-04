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

/**
 * 
 *   PROXIMO ASSUNTO >>>>>>>>>>>
 * 
 */

 console.log(' ');
 console.log('Manipulando Prototypes'); //titulo

//new Object (funções construtoras) -> Object.prototype(pai -> ultimo da cadeia)
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    //__proto__: objA (modificado pela função abaixo)
};

const objC = new Object();
objC.chaveC = 'C'; //maneira diferente de criar um objeto

Object.setPrototypeOf(objB, objA); //modificar/configurar o prototype(objB);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveA);
console.log(objC.chaveB);

//OBS: NÃO MEXER COM O __PROTO__

function Produto3(nome, preco){
    this.nome = nome
    this.preco = preco;
}

Produto3.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}; //para criar metodos dentro do prototype (RECOMENDADO)

Produto3.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100)); //para criar metodos dentro do prototype (RECOMENDADO)
};

const produto3 = new Produto3('Camisa', 40);
produto3.desconto(10); //utilizando os metodos dentro do prototype
produto3.aumento(5);

const produto4 = {
    nome: 'Caneca',
    preco: 25
}

Object.setPrototypeOf(produto4, Produto3.prototype); //utilizando um prototype de uma função construtora em um objeto

produto4.desconto(10);
console.log(produto4);
console.log(produto3);

//criando um objeto e configurando seu prototype ao mesmo tempo
const produto5 = Object.create(Produto3.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 34
    },
    cor: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'preto'
    },
});
produto5.aumento(10);
console.log(produto5);

/**
 * 
 *   PROXIMO ASSUNTO >>>>>>>>>>>
 * 
 */

 console.log(' ');
 console.log('Herança'); //titulo
    function Criandoproduto(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    Criandoproduto.prototype.aumento = function(quantia){
        this.preco += quantia;
    }
    Criandoproduto.prototype.desconto = function(quantia){
        this.preco -= quantia;
    }

    //especializando a função construtora original
    function Camisas(nome, preco, cor){
        Criandoproduto.call(this, nome, preco); //para chamar o prototype de uma outra função construtora;
        this.cor = cor;
    }

    Camisas.prototype = Object.create(Criandoproduto.prototype); //linkar os prototype entre funções construtoras
    Camisas.prototype.constructor = Camisas; // voltar com o construtor real (sem essa parte o construtor será da outra função construtora linkada anteriormente)

    function Caneca(nome, preco, material, estoque){
        Criandoproduto.call(this, nome, preco);
        this.material = material;

        Object.defineProperty(this, 'estoque', {
            get: function(){
                return estoque;
            },
            set: function(){
                if(typeof valor !== 'number') return;
                estoque = valor;
            }
        })
    };
    Caneca.prototype = Object.create(Criandoproduto.prototype);
    Caneca.prototype.constructor = Caneca;

    const camisas = new Camisas('Gola V', 20, 'azul');
    const caneca = new Caneca('Caneca do Batman', 35, 'Cerâmica')
    camisas.aumento(10); //aumento de 10 reais
    caneca.desconto(5) //desconto de 5 reais
    caneca.estoque = 10
    console.log(camisas);
    console.log(caneca);

 /**
 * 
 *   PROXIMO ASSUNTO >>>>>>>>>>>
 * 
 */

  console.log(' ');
  console.log('Polimorfismo'); //titulo
  //metodos se comportarem de formas diferente 
  //superclasse
    function Conta(agencia, conta, saldo){
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function(valor){
        if(valor > this.saldo){
            console.log(`Saldo insuficiente. Você tem:  R$${this.saldo} na sua conta`)
            return
        }
        this.saldo -= valor
        this.verSaldo();
    };

    Conta.prototype.depositar = function(valor){
        this.saldo += valor
        this.verSaldo();
    };

    Conta.prototype.verSaldo = function(){
        console.log(`Agência: ${this.agencia} | Conta: ${this.conta} | Saldo: ${this.saldo.toFixed(2)}.`);
    }

    function ContaCorrente(agencia, conta, saldo, limite){
        Conta.call(this, agencia, conta, saldo);
        this.limite = limite;
    };
    ContaCorrente.prototype = Object.create(Conta.prototype);
    ContaCorrente.prototype.constructor = ContaCorrente;

    ContaCorrente.prototype.sacar = function(valor){
        if(valor > (this.saldo + this.limite)){
            console.log(`Saldo insuficiente. Você tem:  R$${this.saldo} na sua conta`)
            return;
        }
        this.saldo -= valor
        this.verSaldo();
    };

    //polimorfismo
    function ContaPoupanca(agencia, conta, saldo){
        Conta.call(this, agencia, conta, saldo);
    };
    ContaPoupanca.prototype = Object.create(Conta.prototype);
    ContaPoupanca.prototype.constructor = ContaPoupanca;

    const contacorrente = new ContaCorrente (11, 223456, 10, 100);
    contacorrente.depositar(10)
    contacorrente.sacar(120)
    contacorrente.depositar(80)
    console.log(' ');
    const contapoupanca = new ContaPoupanca(12, 9876456, 30)
    contapoupanca.depositar(5)
    contapoupanca.sacar(40);
    contapoupanca.depositar(10)
    

  /**
 * 
 *   PROXIMO ASSUNTO >>>>>>>>>>>
 * 
 */

 console.log(' ');
 console.log('Factory Functions + Pototypes'); //titulo

 function criandoPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log(`${nome} está falando...`);
        },

        beber(){
            console.log(`${nome} está bebendo...`);
        },

        comendo(){
            console.log(`${nome} está comendo...`);
        }
    }
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome
        }
    });
 }

 const pessoa01 = criandoPessoa('Maria', 'Soares');
 const pessoa02  = criandoPessoa('Matheus', 'Almeida');

 pessoa01.falar();
 pessoa02.beber();
   /**
 * 
 *   PROXIMO ASSUNTO >>>>>>>>>>>
 * 
 */

    console.log(' ');
    console.log('Objeto Map()'); //titulo

    const pessoas = [
        {id: 3, nome:'Luiz'},
        {id: 2, nome:'Maria'},
        {id: 3, nome:'Luiza'},
    ];

    const novasPessoas = {};
    for (const {id, nome} of pessoas){
        novasPessoas[id] = {id, nome};
        const {id} = pessoa;
        novasPessoas[id] = {... pessoa};
    }
    console.log(novasPessoas);