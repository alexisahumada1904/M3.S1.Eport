let hora = new Date();

let minuto = hora.getMinutes();
minuto = minuto > 9 ? minuto : '0' + minuto;

let mes = hora.getMonth()+1 ;
mes = mes > 9 ? mes : '0' + mes ;

$("#insertTime").html(`${hora.getHours()}:${minuto}`)
$("#insertDate").html(`${hora.getDate()}-${mes}-${hora.getFullYear()}`)

let numero_vuelo = Math.floor(Math.random()*5000)
let numero_terminal = Math.floor(Math.random()*25)

$("#flightNumber").html(`${numero_vuelo}`)
$("#terminalNumber").html(`${numero_terminal}`)

setTimeout(() => {
  $("#mensaje").show();
}, 2000);

setTimeout(() => {
  alert("Importante! Pasajero se le recuerda que para abordar el avion debe tener en mano su pasaporte y su boleto de embarque.Manténgase atento a los avisos mediante esta plataforma.")
}, 3000);
