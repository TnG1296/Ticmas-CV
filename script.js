
function revelarTexto() {
  document.getElementById("resumen-profesional").style.display = block;
}

const boton = document.getElementById("#boton-resumen");
boton.addEventListener("click", revelarTexto);



/*
fetch ('https://randomuser.me/api/')
  .then(response => response.json())
  .then(json => console.log(json))

  Usé al API para printear parte de la informacion random con la que complete el HTML
*/
