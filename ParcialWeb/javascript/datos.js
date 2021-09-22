const llamar = window.location.search;
const info = new URLSearchParams(llamar);

var mostrar = info.get('nombre');
var mostrar2 = info.get('email');
var mostrar3 = info.get('tel');
var mostrar4 = info.get('gusto');
var mostrar5 = info.get('porcentaje');


document.body.getElementsByClassName('fun')[0].textContent = mostrar;
document.body.getElementsByClassName('fun2')[0].textContent = mostrar2;
document.body.getElementsByClassName('fun3')[0].textContent = mostrar3;
document.body.getElementsByClassName('fun4')[0].textContent = mostrar4;
document.body.getElementsByClassName('fun5')[0].textContent = mostrar5;
