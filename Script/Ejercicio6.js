document.getElementById("agregar").addEventListener("click", () => {
  const texto = document.getElementById("tareaInput").value;
  if (texto.trim() === "") return;

  const contenedor = document.createElement("div");
  contenedor.className = "tarea";

  const textoTarea = document.createElement("span");
  textoTarea.textContent = texto;

  const check = document.createElement("span");
  check.textContent = "✔";
  check.className = "icono pendiente";
  check.addEventListener("click", () => {
    check.classList.toggle("pendiente");
    check.classList.toggle("realizada");
  });

  const eliminar = document.createElement("span");
  eliminar.textContent = "✖";
  eliminar.className = "icono eliminar";
  eliminar.addEventListener("click", () => {
    if (confirm("¿Estás seguro de eliminar esta tarea?")) {
      contenedor.remove();
    }
  });

  contenedor.appendChild(textoTarea);
  contenedor.appendChild(check);
  contenedor.appendChild(eliminar);

  document.getElementById("listaTareas").appendChild(contenedor);
  document.getElementById("tareaInput").value = "";
});
