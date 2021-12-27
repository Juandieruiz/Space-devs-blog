// JavaScript Document
$(document).ready(function () {

    // Formulario de Contacto
    // Validacion plugin Jquery Validate
    $.validate({
        lang: 'es'
    });



  // Selector de tema
  let theme = $("#theme");

  $("#light-mode").click(function () {
    theme.attr("href", "css/lightmode.css");
    localStorage.setItem("theme", "light-mode");
  });
  $("#dark-mode").click(function () {
    theme.attr("href", "css/darkmode.css");
    localStorage.setItem("theme", "dark-mode");
  });
  $("#hacker-mode").click(function () {
    theme.attr("href", "css/hackermode.css");
    localStorage.setItem("theme", "hacker-mode");
  });
  localStorage.getItem("theme");
  if (localStorage.getItem("theme") == "light-mode") {
    theme.attr("href", "css/lightmode.css");
  } else if (localStorage.getItem("theme") == "dark-mode") {
    theme.attr("href", "css/darkmode.css");
  } else if (localStorage.getItem("theme") == "hacker-mode") {
    theme.attr("href", "css/hackermode.css");
  }

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

 
  
});
