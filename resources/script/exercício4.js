
let numero1 = document.querySelector("#num1");
let numero2 = document.querySelector("#num2");
let botao = document.querySelector("#botao4");
let resultado = document.querySelector("#resultado4");

botao.addEventListener("click", () => {

    let n1 = Number(numero1.value);
    let n2 = Number(numero2.value);

    let soma = n1 + n2;

    resultado.textContent = "A soma é: " + soma;

});