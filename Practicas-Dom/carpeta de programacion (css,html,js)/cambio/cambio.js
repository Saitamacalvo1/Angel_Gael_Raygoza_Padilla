function cambiarEstilo() {
    var miDiv = document.getElementById("miDiv");
    if (miDiv.classList.contains("oculto")) {
      miDiv.classList.remove("oculto");
      miDiv.innerHTML = "Texto a ocultar";
    } else {
      miDiv.classList.add("oculto");
      miDiv.innerHTML = "Mostrar";
    }
  }
  