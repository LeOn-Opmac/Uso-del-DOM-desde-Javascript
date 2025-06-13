const btnClick = document.getElementById("clickMe");
const btnRemove = document.getElementById("removeEvent");

function mostrarAlerta() {
  alert("¡Botón clickeado!");
}

btnClick.addEventListener("click", mostrarAlerta);

btnRemove.addEventListener("click", () => {
  btnClick.removeEventListener("click", mostrarAlerta);
});
