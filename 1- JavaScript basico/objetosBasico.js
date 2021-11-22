
// CRIANDO UM OBJETO EM UMA FUNÇÃO
function criarPessoa (nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    };
};

const pessoa1 = criarPessoa('Luiz', 'Otavio', 24);
const pessoa2 = criarPessoa('MArcos', 'Silva', 22);
const pessoa3 = criarPessoa('João', 'Vieria', 22);
const pessoa4 = criarPessoa('Luiza', 'Martins', 25);
const pessoa5 = criarPessoa('Fernanda', 'Oliveira', 20);

// CRIANDO UM OBJETO "NORMAL"
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} está digitando...`);
    },

    falarIdade(){
        console.log(`Minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
};

pessoa.fala();
pessoa.falarIdade();
console.log('...um ano depois...')
pessoa.fala();
pessoa.incrementaIdade();
pessoa.falarIdade();