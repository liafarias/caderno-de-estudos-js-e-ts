const pergunta = Number(prompt('Digite um numero com casas decimais'));

document.body.innerHTML += `<h1>Seu numero é: ${pergunta}</h1>`;

document.body.innerHTML += `Seu número +2 é: ${pergunta + 2} <br />`;

document.body.innerHTML += `A raiz quadrada de ${pergunta} é: ${pergunta ** 0.5} <br />`;

document.body.innerHTML += `${pergunta} é um número inteiro: ${Number.isInteger(pergunta)} <br />`;

document.body.innerHTML += `${pergunta} é um número NaN: ${Number.isNaN(pergunta)} <br />`;

document.body.innerHTML += `${pergunta} arredondado para baixo é: ${Math.floor(pergunta)} <br />`;

document.body.innerHTML += `${pergunta} arredondado para cima é: ${Math.ceil(pergunta)} <br />`;

document.body.innerHTML += `${pergunta} com duas casas decimais: ${pergunta.toFixed(2)}`;
