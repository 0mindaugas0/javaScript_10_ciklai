let pradzia;
pradzia = +prompt("Įveskite pradžią");

let pabaiga;
pabaiga = +prompt("Įveskite pabaigą");

let d;
d = +prompt("Įveskite parametrą keliais skaičiais didinti seką");

let suma;
suma = 0

for (let i = pradzia; i < pabaiga; i += d) {
    suma += i;
}
console.log(suma);
