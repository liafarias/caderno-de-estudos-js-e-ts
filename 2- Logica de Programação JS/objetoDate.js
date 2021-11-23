/** DATAS NO JS
 * const dataAtual = new Date();
 * const dataValor = new Date(valor);
 * const dataString = new Date(dataString);
 * const dataCompleta = new Date('ano, mês, dia, hora, segundo, milissegundo');
 * 
 * OBS:
 * const tresHoras = 60 * 60 * 1000  para contar +3 horas
 * const umDia = 60 * 60 * 24 * 1000  para contar +1 dia
 * função construtora (utilizar a palavra new e primeira letra maiscula)
 */

//TRABALHANDO COM A DATA
const data = new Date('2019-04-20 10:24:59');

console.log('Dia', data.getDate());
console.log('Semana', data.getDay()); // semana começa no domingo (domingo = 0, segunda = 1, terça = 2 etc)
console.log('Mês', data.getMonth()); // mês começa do 0 (janeiro = 0, fevereiro = 1, março = 2 etc)
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('milissegundo', data.getMilliseconds());

console.log(data.toString());

// EXERCICIO FORMATAR DATA
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formatarData(data){
    const ano = zeroAEsquerda(data.getFullYear());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const dia = zeroAEsquerda(data.getDate());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia} / ${mes} / ${ano} ${hora}:${minuto}:${segundo}`;
}

//const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil);

