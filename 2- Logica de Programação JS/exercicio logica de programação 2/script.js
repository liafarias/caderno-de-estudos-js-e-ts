// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

function ePaisagem (largura, altura){
    if (largura > altura){
        return true;
    } return false;
}

console.log(ePaisagem(1930, 1980));


// USANDO ARROW FUNCTION
const ePaisagem2 = (altura, largura) => largura > altura;

console.log(ePaisagem2(1780, 1080))