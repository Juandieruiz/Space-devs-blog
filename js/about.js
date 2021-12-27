// JavaScript Document
$(document).ready(function () {
  // Selector de tema
  let theme = $("#theme");

  $("#light-mode").click(function () {
    theme.attr("href", "css/lightmode.css");
  });
  $("#dark-mode").click(function () {
    theme.attr("href", "css/darkmode.css");
  });
  $("#hacker-mode").click(function () {
    theme.attr("href", "css/hackermode.css");
  });

  // Scroll arriba
  $(".subir").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );

    return false;
  });

  //TODO: Suscripcion de usuarios al newsletter

  // Recogemos los datos del formulario
  $("#login form").submit(function () {
    let form_name = $("#form_name").val();
    let form_email = $("#form_email").val();

    localStorage.setItem("form_name", form_name);
    localStorage.setItem("form_email", form_email);
  });

  let form_name = localStorage.getItem("form_name");
  let form_email = localStorage.getItem("form_email");

  // TODO: Funcionalidad de suscripcion y revision de suscripciones
  if (form_name != null) {
    let about_parrafo = $("#about p");

    about_parrafo.html(
      form_name +
        "<p><strong>Tu correo:</p>  " +
        form_email +
        " <p>Se ha suscrito satisfactoriamente al newsletter.</p><strong>"
    );
    about_parrafo.append(
      "<p>Puedes cancelar la suscripción en cualquier momento.</p> <a href='#' id='cancelar'>Cancelar</a>"
    );

    $("#login").hide();

    $("#cancelar").click(function () {
      localStorage.clear();
      location.reload();
    });
  }
});
