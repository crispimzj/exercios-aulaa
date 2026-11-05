let nome = document.querySelector("#nomeAluno");
let nota1 = document.querySelector("#nota1");
let nota2 = document.querySelector("#nota2");
let nota3 = document.querySelector("#nota3");
let botao = document.querySelector("#botao7");
let resultado = document.querySelector("#resultado7");

botao.addEventListener("click", () => {

    let n1 = Number(nota1.value);
    let n2 = Number(nota2.value);
    let n3 = Number(nota3.value);

    let media = (n1 + n2 + n3) / 3;

    if (media >= 7) {

        resultado.textContent = "Olá, " + nome.value + ", você passou!";
        resultado.style.color = "green";

    } else {

        resultado.textContent = "Olá, " + nome.value + ", você reprovou!";
        resultado.style.color = "red";

    }

});