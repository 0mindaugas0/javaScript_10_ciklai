
//Sukurkite funkciją, kuri gauna tris parametrus: tekstas, pradzia ir pabaiga. Funkcija turėtų grąžinti tekstinę reikšmę nuo pradzia raidės iki pabaiga raidės iš tekstas. T.y., jeigu tekstas = "aritmetika", pradzia = 3, pabaiga = 6, tai grąžintų 3, 4 ir 5 raides pagal indeksą: tme, arba kad geriau įsivaizduoti: ari tme tika. Nenaudojant slice() funkcijos.


let tekstas = prompt("Įveskite tekstą");
let pradzia = +prompt("Įveskite ciklo pradžią");
let pabaiga = +prompt("Įveskite ciklo pabaigą");

let atsakynas = cikloGrazinimas(tekstas, pradzia, pabaiga);
console.log(atsakynas);

function cikloGrazinimas(tekstas, pradzia, pabaiga){
        let intervaloRaides = "";
    for (let i = pradzia; i < pabaiga; i++){
        intervaloRaides += (tekstas[i]);
    }
    return intervaloRaides;
}