let numero = document.querySelector("#numeroAntecessor");
let botao = document.querySelector("#botao8");
let resultado = document.querySelector("#resultado8");

botao.addEventListener("click", () => {

    let n = Number(numero.value);

    let antes = n - 1;
    let depois = n + 1;

    resultado.textContent = "Antecessor: " + antes + " | Sucessor: " + depois;

});