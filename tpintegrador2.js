

function mostrarResumen() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var cantidad = parseInt(document.getElementById("cantidad").value);
  var categoria = document.getElementById("categoria").value;
  var precio = 200;
  var descuento;

 
  if (categoria === "Estudiante") {
    descuento = 0.8;
  } else if (categoria === "Trainee") {
    descuento = 0.5;
  } else if (categoria === "Junior") {
    descuento = 0.15;
  }

  var total = cantidad * precio * (1 - descuento);
  document.getElementById("total").textContent = total.toFixed(2);

  
  var resumenHTML = `<p>Nombre: ${nombre}</p>
    <p>Apellido: ${apellido}</p>
    <p>Correo: ${correo}</p>
    <p>Cantidad: ${cantidad}</p>
    <p>Categoria: ${categoria}</p>
    <p>Total a Pagar: $${total.toFixed(2)}</p>`;

  
  document.getElementById("resumen").innerHTML = resumenHTML;
  document.getElementById("resumenContainer").style.display = "block";
}


function borrarDatos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("cantidad").value = "1";
  document.getElementById("categoria").selectedIndex = 0;
  document.getElementById("total").textContent = "";
  document.getElementById("resumenContainer").style.display = "none";
}