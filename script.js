



function revelarTexto() {
  const texto = document.getElementById("seccion-1");
  texto.classList.toggle("descripcion-revelada") ;
  const boton = document.getElementById("boton-1")
  boton.classList.toggle("boton-girado") ;

}

/*
fetch ('https://randomuser.me/api/')
  .then(response => response.json())
  .then(json => console.log(json))

  Usé al API para printear parte de la informacion random con la que complete el HTML
*/
