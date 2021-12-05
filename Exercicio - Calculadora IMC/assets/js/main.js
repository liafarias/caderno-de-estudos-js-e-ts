const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    if(nome !== '' && altura !== '' && peso !== ''){
        const totalIMC = (peso / (altura * altura) ).toFixed(2);
        resultado.textContent = totalIMC;

        let resultadoIMC = '';

        if(totalIMC < 18.5){
            resultadoIMC = 'você está abaixo do peso, CUIDADO!!';
        }else if(totalIMC < 25){
            resultadoIMC = 'você está com o peso ideal.';
        }else if(totalIMC ){
            resultadoIMC = 'você está levemente acima do peso.';
        }else if(totalIMC < 35){
            resultadoIMC = 'você está com obesidade grau I.';
        }else{
            resultadoIMC = 'você está com obesidade grau 3, CUIDADO!!!';
        }

        resultado.textContent = `${nome} seu IMC é ${totalIMC}, por isso ${resultadoIMC}`

    } else if(nome === '' && altura === '' && peso === ''){
        resultado.textContent = 'ATENÇÃO. Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);