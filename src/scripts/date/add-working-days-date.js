let date = new Date("Wed Oct 26 2022 12:07:22 GMT-0300 (BRT)");
date.setDate(date.getDate() + 3);
// console.log(date)
//console.log(new Date(new Date().setDate(new Date().getDate() + 1)))

// console.log(date)
const dayOfWeek = date.getDay();
if (dayOfWeek === 6) date.setDate(date.getDate() + 3);
if (dayOfWeek === 0) date.setDate(date.getDate() + 2);
console.log(data(new Date()))


function data(date) {
    let str_data;
    let str_horario;
    let data = new Date(date);
    let dia = data.getDate();
    let mes = data.getMonth();
    let anoFour = data.getFullYear();
    let horas = data.getHours();


    str_data = (dia <= 9 ? '0' + dia : dia) + '/' + ((mes + 1) <= 9 ? '0' + (mes + 1) : (mes + 1)) + '/' + anoFour;

    return str_data;
}


// Com horário...
let datas = new Date();
let dataFinal = new Date(datas.getFullYear(), datas.getMonth(), datas.getDate(), 23, 59, 59);

console.log(dataFinal);


let date1 = new Date("2022-10-13T14:55:21.473Z");
let date2 = new Date("2022-10-20T14:55:21.473Z");
let diffTime = Math.abs(date2 - date1);
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log(diffDays);

if (diffDays < 15) {
    // console.log("Test Gg")
}

var agora = new Date("2022-10-24T14:55:21.473Z");
agora.toLocaleString("pt-br");
// console.log(agora);