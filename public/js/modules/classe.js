export class Boss {
    constructor(nom, pv, pa) {
        this.nom = nom,
            this.pv = pv,
            this.pa = pa
    }
    attaque(hero) {
        hero.pv -= this.pa;
    }
    enigme(hero1, hero2, hero3) {

        let answered = false;
        let i = 3;
        let choix = Math.ceil(Math.random() * 4);
        let answer;


        while (i > 0 && answered == false) {

            switch (choix) {
                case 1:
                    answer = prompt("Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?");
                    if (answer == "le silence") {
                        answered = true
                    }
                    break;
                case 2:
                    answer = prompt("Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?");
                    if (answer = "le courant") {
                        answered = true
                    }
                    break;
                case 3:
                    answer = prompt("Quel est l'indice du premier 'i' de cette question ?");
                    if (answer == 11) {
                        answered = true
                    }
                    break;
                case 4:
                    answer = prompt("Que fait retourne Math.floor(1.3 * 10) ?");
                    if (answer == 13) {
                        answered = true
                    }
                    break;
                default:
                    break;
            }
            i--
        }
        if (answered == false) {
            hero1.pv = 0;
            hero2.pv = 0;
            hero3.pv = 0;
        } else {
            this.pv = 0;
        }
    }
}

class Hero {
    constructor(nom, pv, pa) {
        this.nom = nom,
            this.pv = pv,
            this.pa = pa
    }
    posture_attaque() {
        this.pa = this.pa * 1.4;
        this.pv = this.pv * 0.75;
    }
    posture_defense() {
        this.pa = this.pa * 0.5;
        this.pv = this.pv * 2.5;
    }
}

export class Guerrier extends Hero {
    constructor(nom, pv, pa, pr) {
        super(nom, pv, pa),
            this.pr = pr
    }
    rage() {
        let temp;
        if (this.pr < 4) {
            this.pr +=1
        } else if (this.pr == 4) {
            temp = this.pa;
            this.pa *= 1.25;
            this.pr = 0;
        }
        if (this.pr == 0) {
            this.pa = temp;
        }
    }
}

export class Mage extends Hero {
    constructor(nom, pv, pa, mana) {
        super(nom, pv, pa),
        this.mana = mana
    }
    pointsMana(){
        if (this.mana > 0) {
            this.mana -= 2;
        } else {
            this.mana = 7;
        }
    }
}

export class Archer extends Hero {
    constructor(nom, pv, pa, fleches) {
        super(nom, pv, pa),
        this.fleches = fleches
    }
    nbreFleche(){
        if (this.fleches>0) {
            this.fleches -= 1;
        } else {
            this.fleches = 6;
        }
    }
}
