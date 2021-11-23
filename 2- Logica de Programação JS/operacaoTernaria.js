const pontuacaoUsuario = 999;

// IF e ELSE normal

if (pontuacaoUsuario >= 1000){
    console.log('Usuario Vip')
} else {
    console.log('Usuario normal');
}

// UTILIZANDO A OPERAÇÃO TERNÁRIA (usar apenas quando tem apenas um IF e um ELSE)
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);
