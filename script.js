function relogio(){

var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();

var hours = document.getElementById("hour").innerHTML = h;
var minutes = document.getElementById("minutes").innerHTML = m;
var seconds = document.getElementById("seconds").innerHTML = s;

}

var interval = setInterval(relogio, 1000);