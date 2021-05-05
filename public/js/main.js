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

    //pv a partir duquelle le boss lance l'enigme
    let vingt = boss.pv / 5;

    while (boss.pv > vingt && (guerrier.pv > 0 || archer.pv > 0 || mage.pv > 0)) {

        guerrier.rage();
        mage.pointsMana();

        // Attaques des héros
        if (guerrier.pv > 0) {
            alert(`${guerrier.nom} attaque ${boss.nom}`);
            boss.pv -= guerrier.pa;
            alert(`${boss.nom} perd ${guerrier.pa} points de vie. Il lui reste ${boss.pv}pv`);
        }

        if (archer.pv > 0 && boss.pv > 0 && archer.fleches >= 2) {
            alert(`${archer.nom} attaque ${boss.nom}`)
            boss.pv -= archer.pa;
            alert(`${boss.nom} perd ${archer.pa} points de vie. Il lui reste ${boss.pv}pv`);
            archer.nbreFleche();
        } else if (archer.pv > 0 && archer.fleches < 2) {
            alert(`${archer.nom} n'a plus de flèches. Il passe un tour.`)
        }

        if (mage.pv > 0 && boss.pv > 0 && mage.mana >= 2) {
            alert(`${mage.nom} attaque ${boss.nom}`)
            boss.pv -= mage.pa;
            alert(`${boss.nom} perd ${mage.pa} points de vie. Il lui reste ${boss.pv}pv`);
        } else if (mage.pv > 0 && mage.mana < 2) {
            alert(`${mage.nom} n'a plus de mana. Il passe un tour.`)
        }

        //Choix de la victime du boss
        let defenseur = lesHeros[Math.floor(Math.random() * lesHeros.length)];
        while (defenseur.pv <= 0) {
            defenseur = lesHeros[Math.floor(Math.random() * lesHeros.length)];
        }

        //Attaque du boss
        if (boss.pv > vingt) {
            alert(`${boss.nom} attaque ${defenseur.nom}`);
            defenseur.pv -= boss.pa;
            if (defenseur.pv >= 0) {
                alert(`${defenseur.nom} perd ${boss.pa} points de vie. Il lui reste ${defenseur.pv}pv`);
            } else {
                alert(`Attaque critique! ${defenseur.nom} n'a plus de pv.`);
            }
        }

        if (defenseur.pv <= 0) {
            alert(`${defenseur.nom} est mort`);
        }
    }
    if (boss.pv < vingt) {
        alert(`${boss.nom} est bientôt mort. En dernière resource, il lance énigme. Si tu trouves la réponse tu gagnes, sinon, tu perds.`);
        boss.enigme(guerrier, mage, archer);
    }

    if (boss.pv <= 0) {
        alert(`Tu as battu ${boss.nom}. Félicitations!`);
    } else if (guerrier.pv <= 0 && archer.pv <= 0 && mage.pv <= 0) {
        alert(`Tu as perdu. Tu auras plus de chance la prochaine fois.`);
    }
}

chooseBoss()
posture()
combat()