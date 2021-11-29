/**
 * Não exibir o erro para o usuario
 * É possivel criar suas proprias classes
 */

 console.log(' ');
 console.log('## EXEPLICAÇÃO BASICA ##');
try{ // é executada quando não tem erros
console.log(nãoExiste)
} catch(err){ // é executada quando tem erros
console.log('Ocorreu um erro.')
}

// EXEMPLO

console.log(' ');
console.log('## EXEMPLO BASICO ##');

function soma(x, y){
    if (typeof x !== 'number' || typeof y !=='number'){
        throw('x e y precisam ser numeros.');
    }
    return x + y;
}

try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));
}catch(error){
    console.log('Ocorreu um possivel erro');
}

console.log(' ');
console.log('## EXPLICAÇÃO DO FINALLY ##');
// UTILIZANDO O FINALLY]
try{
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo e gerou um erro');
} catch(erro){
    console.log('Tratano o erro');
} finally{
    console.log('Fechar o arquivo');
    console.log('Eu sempre sou executado');
}

console.log(' ');
console.log('## EXEMPLO APLICADO ##');
function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando uma instância de Date.');
    }
    
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch{
    // tratar o erro aqui
} finally {
    console.log('Tenha um bom dia.');
}