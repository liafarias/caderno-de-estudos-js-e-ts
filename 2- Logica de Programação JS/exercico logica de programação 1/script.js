// Escreva uma função que receba dois numeros e retorne o maior entre eles

function compararDoisNumeros (num1, num2){
    if(num1>num2){
        return(num1);
    } else if(num2>num1){
        return(num2)
    }
}
console.log(compararDoisNumeros(5,8))


// OUTROS MODOS

function max (x, y){
    if (x > y) return x;
    return y
}

console.log(max(10, 20));

function max2 (a,b){
    return a > b ? a : b;
}

console.log(max2 (4,7));