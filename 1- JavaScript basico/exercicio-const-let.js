const nome = "Larissa";
const sobrenome = "Martins";
const idade = 17;
const peso = 58;
const altura = 1.68;
let imc;
let anoNascimento = 2004;


imc = peso / (altura * altura);

anoNascimento = 2021 - 17;


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`)