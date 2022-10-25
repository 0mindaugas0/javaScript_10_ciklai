let skaicius;
skaicius = +prompt("Įveskite norimą skaičių");

let pradzia;
pradzia = +prompt("Įveskite intervalo pradžią");

let pabaiga;
pabaiga = +prompt("Įveskite intervalo pabaigą");



let atskakymas = arLyginis(skaicius);
console.log(atskakymas);

function arLyginis(skaicius){
    if (skaicius % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

function lyginiaiSkaiciai(intPradzia, intPabaiga, lyginis) {
    for (let i = intPradzia; i < intPabaiga; i++) {
        lyginis = 
    }
}