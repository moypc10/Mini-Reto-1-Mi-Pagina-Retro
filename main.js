// JQuery
$(document).ready(function(){
    $("#Contacto").html("Contactanos");
});

//AJAX
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseXML.documentElement.innerHTML;
    }
  };
  xhttp.open("GET", "Virus.html", true);
  xhttp.responseType = "document";
  xhttp.send();
}