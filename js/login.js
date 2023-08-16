let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo");
let logoSpan = document.querySelectorAll(".logo-parts");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 100);
    });

    setTimeout(() => {
      logoSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (index + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

const inputs = document.querySelectorAll(".input");

function add() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function rem() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", add);
  input.addEventListener("blur", rem);
});

var usersData = {};

function registrarUsuario(formulario) {
  event.preventDefault();

  var nuevoUsuario = formulario.txtusuario.value;
  var nuevaClave = formulario.txtclave.value;

  if (localStorage.getItem(nuevoUsuario)) {
    Swal.fire({
      icon: "error",
      title: "Usuario ya existe",
      text: "Por favor elige otro nombre de usuario",
    });
    return;
  }

  localStorage.setItem(nuevoUsuario, nuevaClave);

  Swal.fire({
    icon: "success",
    title: "Registro exitoso",
    text: "Usuario registrado correctamente",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    formulario.reset();
    window.location.href = "index.html";
  });
}

var usuarios = ["Claudia", "Rodrigo", "Hades", "Adrian"];
var claves = ["admin1", "admin2", "admin3", "admin4"];

function cargar(frm) {
  var usu = frm.txtusuario.value;
  var storedClave = localStorage.getItem(usu);

  if (!storedClave) {
    window.event.preventDefault();
    Swal.fire({
      icon: "error",
      title: "Usuario no existe...",
      text: "Intente nuevamente",
    });
    return;
  }

  var clave = frm.txtclave.value;
  if (clave === storedClave) {
    window.event.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Bienvenido",
      text: "Estás en tu casa " + usu,
      showConfirmButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "SALÓN DE TOMORI/INICIO/Inicio.html";
      }
    });
  } else {
    window.event.preventDefault();
    Swal.fire({
      icon: "error",
      title: "La clave no existe",
      text: "Intente nuevamente",
    });
  }
}
