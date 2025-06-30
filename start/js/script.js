let texto = document.querySelector("h1");
function mudar() {
  if (texto.style.color != "red") {
    texto.style.color = "red";
  } else {
    texto.style.color = "blue";
  }
}
texto.addEventListener("click", mudar);
