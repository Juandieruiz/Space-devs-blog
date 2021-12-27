// JavaScript Document
$(document).ready(function () {

    // reloj
    var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}    

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
