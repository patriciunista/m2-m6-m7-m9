var ara = new Date().getTime();
if(localStorage.getItem("temps-inici")) {
  setInterval(function(){
    comprovaTemps();
  }, 1000);
} else {
  localStorage.setItem("temps-inici", ara);
  setInterval(function(){
    comprovaTemps();
  }, 1000);
}

function comprovaTemps(){
  var ara = new Date().getTime();  
  var principi = parseInt(localStorage.getItem("temps-inici"));
  var novaData = new Date(ara - principi);
  
  if(novaData.getMinutes() >= 3) {
    alert("Temps esgotat. Haber estudiado!");
    while(true){
      alert("Temps esgotat. Haber estudiado!");
    }
  } else {
    console.log("Temps emprat => " + ("0" + novaData.getMinutes()).slice(-2) + ":" + ("0" + novaData.getSeconds()).slice(-2), "- Afanya't!");
  }
}


function comprovaPass() {
  var XHR = new XMLHttpRequest();

  var FD = new FormData(form);

  XHR.addEventListener("load", function(res) {
    var resposta = res.target.responseText;
    if(resposta === "false") {
      alert("Contrasenya incorrecta... torna-ho a intentar, vigila be el codi!");
    } else if (resposta == "true") {
      alert("Enhorabona! Has encertat el password a temps! Continuem... :)");
      window.location = "m9.html";
    } else {
      alert(resposta);
    }
  });

  XHR.addEventListener("error", function(event) {
    alert('Algo va mal...');
  });

  XHR.open("POST", "https://davidnistaprojects.000webhostapp.com/password.php");

  XHR.send(FD);
}


var form = document.getElementById("form-inici");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  comprovaPass();

});