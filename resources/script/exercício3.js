
let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let botao = document.querySelector("#botao3");
let resultado = document.querySelector("#resultado");

botao.addEventListener("click", () => {

    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);

    if (valor1 > valor2) {
        resultado.textContent = "O primeiro número é maior!";
    } else if (valor2 > valor1) {
        resultado.textContent = "O segundo número é maior!";
    } else {
        resultado.textContent = "Os números são iguais!";
    }

});