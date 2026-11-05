let numero = document.querySelector("#numeroParImpar");
let botao = document.querySelector("#botao6");
let resultado = document.querySelector("#resultado6");

botao.addEventListener("click", () => {

    let n = Number(numero.value);

    if (numero.value == "") {
        resultado.textContent = "Digite um número!";
    } else if (n % 2 == 0) {
        resultado.textContent = "O número é par!";
    } else {
        resultado.textContent = "O número é ímpar!";
    }

});