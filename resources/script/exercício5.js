let opcoes = document.querySelector("#opcoes");
let texto = document.querySelector("#textoCor");

opcoes.addEventListener("change", () => {

if (opcoes.value == "red") {
  texto.style.color = "red";
} else if (opcoes.value == "blue") {
  texto.style.color = "blue";
} else if (opcoes.value == "green") {
    texto.style.color = "green";
}

});