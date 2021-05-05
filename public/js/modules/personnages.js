import { Boss, Guerrier, Mage, Archer } from "./classe.js";


let totalpv = 3000;
let totalpa = 400;

//Heros
//Guerrier
//Initialisation PV
let pointDeVieGuerrier = +prompt(`Tu as un total de ${totalpv}pv. Combien de pv veux-tu allouer à ton guerrier?`);
if (pointDeVieGuerrier > totalpv) {
    while (pointDeVieGuerrier > totalpv) {
        pointDeVieGuerrier = +prompt("Tu n'as pas assez de points de vie. Rentre une valeur plus petite");
    }
}
//PA
let pointAttaqueGuerrier = +prompt(`Tu as un total de ${totalpa}pa. Combien de pa veux-tu allouer à ton guerrier?`);
if (pointAttaqueGuerrier > totalpa) {
    while (pointAttaqueGuerrier > totalpa) {
        pointAttaqueGuerrier = +prompt("Tu n'as pas assez de points d'attaque. Rentre une valeur plus petite");
    }
}

//Creation Objet Guerrier
export let guerrier = new Guerrier(prompt("Comment veux-tu nommer votre guerrier?"), pointDeVieGuerrier, pointAttaqueGuerrier, 0);

totalpv -= pointDeVieGuerrier;
totalpa -= pointAttaqueGuerrier;

//Mage
//PV
let pointDeVieMage = +prompt(`Il te reste ${totalpv}pv à allouer. Combien veux-tu en donner à ton Mage?`);
if (pointDeVieMage > totalpv) {
    pointDeVieMage = +prompt(`Il ne te reste pas assez de pv pour en donner autant à ton mage. Rentre une valeur en dessous de ${totalpv}.`);
}
//PA
let pointAttaqueMage = +prompt(`Il te reste ${totalpa}pa à allouer. Combien veux-tu en donner à ton Mage?`);
if (pointAttaqueMage > totalpa) {
    pointAttaqueMage = +prompt(`Il ne te reste pas assez de pa pour en donner autant à ton mage. Rentre une valeur en dessous de ${totalpa}.`);
}
//Mana
let temp = Math.ceil(Math.random() * 3);
let mana;
switch (temp) {
    case 1:
        mana = 7;
        break;
    case 2:
        mana = 9;
        break;
    case 3:
        mana = 11;
        break;
    default:
        break;
}

export let mage = new Mage(prompt("Comment veux-tu nommer ton Mage?"), pointDeVieMage, pointAttaqueMage, mana);

totalpv -= pointDeVieMage;
totalpa -= pointAttaqueMage;

//Archer
//PV
let pointDeVieArcher = +prompt(`Il te reste ${totalpv}pv à allouer. Combien veux-tu en donner à ton Archer?`);
if (pointDeVieArcher > totalpv) {
    pointDeVieArcher = +prompt(`Il ne te reste pas assez de pv pour en donner autant à ton Archer. Rentre une valeur en dessous de ${totalpv}.`);
}
//PA
let pointAttaqueArcher = +prompt(`Il te reste ${totalpa}pa à allouer. Combien veux-tu en donner à ton Archer?`);
if (pointAttaqueArcher > totalpa) {
    pointAttaqueArcher = +prompt(`Il ne te reste pas assez de pa pour en donner autant à ton Archer. Rentre une valeur en dessous de ${totalpa}.`);
}
//Fleches
let flechesRandom = [7, 8, 9, 10, 11];
temp = Math.round(Math.random() * 4);
let fleches = flechesRandom[temp];

export let archer = new Archer (prompt("Comment veux-tu nommer ton Archer?"), pointDeVieArcher, pointAttaqueArcher, fleches);

//Boss
export let sauron = new Boss("Sauron", 1200, 300);
export let chronos = new Boss("Chronos", 2000, 400);
export let lilith = new Boss("Lilith", 2400, 500);