//While everyone's pv > 0

import { guerrier, mage, archer, sauron, chronos, lilith } from "./modules/personnages.js"

let bossBattu = [];
let tabBoss = [sauron, chronos, lilith];
let lesHeros = [guerrier, mage, archer];

//Choix aléatoire du Boss
function chooseBoss() {
    return tabBoss[Math.round(Math.random() * 2)];
}

let boss = chooseBoss();

//Choix de la posture des heros
function posture() {
    alert(`Tu vas faire face à ${boss.nom}. Choisis maintenant la posture de tes combattants (attaque, défense, normal):`)
    let postureGuerrier = prompt(`Quelle sera la posture de ${guerrier.nom}?`);
    switch (postureGuerrier) {
        case "attaque":
            guerrier.posture_attaque();
            break;
        case "défense":
            guerrier.posture_defense();
            lesHeros.push(guerrier);
            break;
        case "normal":
            break;
        default:
            break;
    }
    let postureMage = prompt(`Quelle sera la posture de ${mage.nom}?`);
    switch (postureMage) {
        case "attaque":
            mage.posture_attaque();
            break;
        case "défense":
            mage.posture_defense();
            lesHeros.push(mage);
            break;
        case "normal":
            break;
        default:
            break;
    }
    let postureArcher = prompt(`Quelle sera la posture de ${archer.nom}?`);
    switch (postureArcher) {
        case "attaque":
            archer.posture_attaque();
            break;
        case "défense":
            archer.posture_defense();
            lesHeros.push(archer);
            break;
        case "normal":
            break;
        default:
            break;
    }
}

//Fonction combat
function combat() {
    alert("Le combat va commencer!")
    while (boss.pv > 0 && (guerrier.pv > 0 || archer.pv > 0 || mage.pv > 0)) {
        if (guerrier.pv > 0) {
            boss.pv -= guerrier.pa;
            alert(`${boss.nom} perd ${guerrier.pa} points de vie`);
        }
        if (archer.pv > 0) {
            boss.pv -= archer.pa;
            alert(`${boss.nom} perd ${archer.pa} points de vie`);
        }
        if (mage.pv > 0) {
            boss.pv -= mage.pa;
            alert(`${boss.nom} perd ${mage.pa} points de vie`)
        } 
        let defenseur = lesHeros[Math.floor(Math.random() * lesHeros.length)];
        defenseur.pv -= boss.pa;
        alert(`${defenseur.nom} perd ${boss.pa} points de vie`);
    }
}

chooseBoss()
posture()
combat()