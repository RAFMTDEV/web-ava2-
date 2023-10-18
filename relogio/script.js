var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')


 var horariotual = new Date();

 horas.innerHTML = horariotual.getHours() + "hrs";
 minutos.innerHTML = horariotual.getMinutes() + "m";
 segundos.innerHTML = horariotual.getSeconds() + "s";


 