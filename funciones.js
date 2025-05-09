
function registroExitoso() {

 let hhmmss=new Date();
 let horas=hhmmss.getHours();
 let minutos=hhmmss.getMinutes();
 let segundos=hhmmss.getSeconds();

 horas=(horas<=9)?("0"+horas):horas;
 minutos=(minutos<=9)?("0"+minutos):minutos;
 segundos=(segundos<=9)?("0"+segundos):segundos;

 let lahora = horas + ":" + minutos + ":" + segundos;


 alert("Estimado usuario su registro a sido exitoso a las:"+ lahora);
}

function actReloj(){
let hhmmss=new Date();
let horas=hhmmss.getHours();
let minutos=hhmmss.getMinutes();
let segundos=hhmmss.getSeconds();
let lahora="";

horas=(horas<=9)?("0"+horas):horas;
minutos=(minutos<=9)?("0"+minutos):minutos;
segundos=(segundos<=9)?("0"+segundos):segundos;

lahora = horas+":"+minutos+":"+segundos;
let reloj = document.getElementById('reloj');
reloj.innerHTML=lahora;

setTimeout("actReloj()",1000);
}


function calcLong(maximo, ctrl,)
{
let txt = event.target;
let numCars = document.getElementById(ctrl);
if (txt.value.length > maximo){
    txt.value = txt.value.substring(0,maximo);
}
numCars.value = txt.value.length;
}
function checkemail(email) {
let ind1, ind2, ind3;
ind1 = email.indexOf('@'); //dentro de email debe de aver un @//
ind2 = email.indexOf('.');
ind3 = email.lastIndexOf('@');
if ((ind1<=0) || (ind2<ind1) || (ind3 != ind1)){
      alert("Estimado usuario el correo que ingreso es invalido");
return;
}
registroExitoso();
}

let imagenIndex = 0;
let imagenIndex2 = 0;
const imagenes = ['trabajadores.jpg', 'trabajadores3.jpg', 'trabajadores2.jpg'];
const imagenes2 = ['romasa.jpg', 'imagen2.jpg', 'imagen3.jpg']

function cambiarImagen(direccion) {
imagenIndex += direccion;
if (imagenIndex < 0) {
imagenIndex = imagenes.length - 1;
} else if (imagenIndex >= imagenes.length) {
imagenIndex = 0;
}
document.getElementById('imagenCarrusel').src = imagenes[imagenIndex];
}
