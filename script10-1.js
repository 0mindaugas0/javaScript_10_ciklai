let pradzia;
pradzia = +prompt("Įveskite pradžią");

let pabaiga;
pabaiga = +prompt("Įveskite pabaigą");

let d;
d = +prompt("Įveskite kas kelintą skaičių reikia išvesti");


for (let i = pradzia; i < pabaiga; i += d) {
    console.log(i);
}