let pradzia;
pradzia = +prompt("Įveskite skaičių sekos pradžią");

let pabaiga;
pabaiga = +prompt("Įveskite skaičių sekos pabaigą");

let sandauga = 1;

for (let i = pradzia; i < pabaiga; i ++) {
    sandauga *= i;
    console.log(sandauga);
}