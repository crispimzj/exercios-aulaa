let numero = document.querySelector("#numeroSorteio");
let botao = document.querySelector("#botao10");
let resultado = document.querySelector("#resultado10");

botao.addEventListener("click", () => {

    let n = Number(numero.value);

    let sorteado = Math.floor(Math.random() * 100) + 1;

    if (numero.value == "" || n < 1 || n > 100) {

        resultado.textContent = "Digite um número de 1 a 100!";

    } else if (n == sorteado) {

        resultado.textContent = "Número sorteado: " + sorteado + ". Parabéns, você acertou!";

    } else {

        resultado.textContent = "Número sorteado: " + sorteado + ". Você errou! Tente novamente!";

    }

});