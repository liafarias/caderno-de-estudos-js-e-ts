const h1 = document.querySelector('.container h1')

const data = new Date();

 
    // PARA COLOCAR O 0 ANTES DOS NUMEROS
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
} 
const dia = zeroAEsquerda(data.getDate());
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const minuto = zeroAEsquerda(data.getMinutes());

    // PARA TRABSFORMAR O DIA DA SEMANA DE NUMERO PARA TEXTO
const diaSemana = data.getDay();
let diaSemanaTexto;

if(diaSemana === 0){
    diaSemanaTexto = 'Domingo';
} else if(diaSemana === 1){
    diaSemanaTexto = 'Segunda';
} else if(diaSemana === 2){
    diaSemanaTexto = 'Terça';
} else if(diaSemana === 3){
    diaSemanaTexto = 'Quarta';
} else if(diaSemana === 4){
    diaSemanaTexto = 'Quinta';
} else if(diaSemana === 5){
    diaSemanaTexto = 'Sexta';
} else if(diaSemana === 6){
    diaSemanaTexto === 'Sabado';
}


    // PARA TRANSFORMAR OS MESES DE NUMERO PARA TEXTO
const nomeMes = data.getMonth();
let mesTexto;

if(nomeMes===0){
    mesTexto = 'Janeiro';
} else if (nomeMes===1){
    mesTexto = 'Fevereiro';
} else if (nomeMes===2){
    mesTexto = 'Março';
} else if (nomeMes===3){
    mesTexto = 'Abril';
} else if (nomeMes===4){
    mesTexto = 'Maio';
} else if (nomeMes===5){
    mesTexto = 'Junho';
} else if (nomeMes===6){
    mesTexto = 'Julho';
} else if (nomeMes===7){
    mesTexto = 'Agosto';
} else if (nomeMes===8){
    mesTexto = 'Setembro';
} else if (nomeMes===9){
    mesTexto = 'Outubro';
} else if (nomeMes===10){
    mesTexto = 'Novembro';
} else if (nomeMes===11){
    mesTexto = 'Dezembro';
} 

h1.innerHTML += `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} \n ${hora}:${minuto}`

// MANEIRA SIMPLIFICADA
//const opcoes = {
//    dateStyle: 'full',
//    timeStyle: 'short'
//}

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
