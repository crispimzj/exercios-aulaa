// let opcoes = document.querySelector
// ("select")
// let input = document.querySelector("input")
// //evento change
// opcoes.addEventListener("change", ()=> {
//     console.log(input.value)
// })
// Evento focus
// input.addEventListener("focus",elementoFocado);
// input.addEventListener("focusout",elementDesfocado);
// function elementoFocado(){
// console.log("entrou no foco");
// }
// function elementDesfocado () {
//     console.log("saiu do foco");
// }
// classes via dom
// let darkButton = document.querySelector("button");
// let body = document.querySelector("body");

// body.classList.add("dark");

// darkButton.addEventListener("click", () => {
    
    // Alterna a classe 'dark' (adiciona se não tiver, remove se tiver)
    // body.classList.toggle("dark"); 
    
    // Se quiser alternar o blueTheme junto:
   // body.classList.toggle("blueTheme");


document.addEventListener("DOMContentLoaded", () => {

let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let botao = document.querySelector("#botao11");
let resultado = document.querySelector("#resultado11");

botao.addEventListener("click", () => {

    let p = Number(peso.value);
    let a = Number(altura.value);

    if (peso.value == "" || altura.value == "" || a <= 0 || p <= 0) {

    resultado.textContent = "Preencha os campos corretamente!";

    } else {

    // Se digitar 170 em vez de 1.70, converte pra metro
    if (a > 3) {
        a = a / 100;
    }

    let imc = p / (a * a);

    resultado.textContent = "Seu IMC é: " + imc.toFixed(1);

    }

});

});

