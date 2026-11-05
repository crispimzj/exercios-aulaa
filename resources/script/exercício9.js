
let numero = document.querySelector("#contador");
let incrementar = document.querySelector("#incrementar");
let decrementar = document.querySelector("#decrementar");

let contador = 0;

incrementar.addEventListener("click", () => {

   contador++;

numero.textContent = contador;

});

decrementar.addEventListener("click", () => {

    contador--;

numero.textContent = contador;

});
