const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Soy un nuevo div";

const divAntiguo = document.querySelector("div");
divAntiguo.parentNode.replaceChild(nuevoDiv, divAntiguo);

console.log("Div reemplazado exitosamente.");
