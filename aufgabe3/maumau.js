//Aufgabe: 3 - MauMau
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 09.04.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    // Zuerst werden 3 Arrays erstellt. Im ersten Array sind die 32 Spielkarten aufgelistet. 
    // Die anderen beiden beinhalten noch keine Werte, da sich zun�chst alle 32 Karten auf dem Nachziehstapel befinden
    let nachziehstapel = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo K�nig", "Karo As",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz K�nig", "Kreuz As",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz K�nig", "Herz As",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik K�nig", "Pik As"];
    let hand = [];
    let ablagestapel = [];
    let n = nachziehstapel.length;
    document.getElementById("Nachziehstapel").textContent = "Nachziehstapel " + "\r\n" + "Karten auf diesem Stapel: " + nachziehstapel.length;
    document.getElementById("Ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Karten auf diesem Stapel: " + ablagestapel.length;
    // 1. FUNKTION - Zuf�llige Karte ziehen - Eine Karte soll vom Nachziehstapel genommen werden
    //    1.1 Bedingung : Man soll nur eine Karte ziehen k�nnen, wenn sich auf dem Stapel mehr als 0 Karten befinden
    //    1.2 Bedingung : Man soll nur eine Karte ziehen k�nnen, wenn auf der Hand noch platz ist, d.h. wenn sich auf der Hand weniger als 5 Karten befinden
    //    Was passieren soll, wenn beide Bedingungen erf�llt sind:
    //      2.1 Eine zuf�llige Karte soll aus dem Array "nachziehstapel" ausgegeben werden
    //      2.2 Die gezogene Karte soll aus dem nachziehstapel-Array herausgenommen werden
    //      2.3 Die gezogene Karte soll dem hand-Array hinzugef�gt werden
    //      2.4 Die Karte soll auf der Hand dargestellt werden
    //      2.5 Die Funktion soll durch anklicken des Nachziehstapels ausgef�hrt werden
    function getRandomCard() {
        if (nachziehstapel.length > 0 && hand.length < 5) {
            //Anpassen der Berechnungsvariablen f�r die Zufallsauswahl der Karten
            n--;
            //Berechnen der Karte im Array mit Zufallszahl
            var i = Math.floor((Math.random() * n) + 0);
            //Karte vom Nachziehstapel-Array in das Hand-Array verschieben
            let ziehen = nachziehstapel[i];
            nachziehstapel.splice(i, 1);
            hand.push(ziehen);
            document.getElementById("nachziehstapel").textContent = "Nachziehstapel " + "\r\n" + "Karten: " + nachziehstapel.length;
            //Div f�r die gezogene Handkarte erstellen
            let div = document.createElement("div");
            document.getElementById("Hand").appendChild(div);
            div.textContent = ziehen;
            //Styleanpassung f�r die Handkarten
            let s = div.style;
            s.cssFloat = "left";
            s.border = "solid 4px black";
            s.display = "inline";
            s.textAlign = "center";
            s.fontSize = "2em";
            s.backgroundColor = "#aaa";
            s.width = "4em";
            s.height = "6em";
            s.marginLeft = "1em";
        }
    }
    // 2. FUNKTION - Karte ablegen - Eine Karte soll vom Nachziehstapel genommen werden
    //    Was passieren soll:
    //    2.1 Angeklickte Karte soll aus dem Hand-Array entfert werden
    //    2.2 Angeklickte Karte soll dem Ablagestapel-Array hinzugef�gt werden
    //    2.3 Das DIV der angeklickten Karte soll nicht mehr angezeigt werden
    function layDownCard() {
        //Schleife zum Pr�fen des Inhalts der Handkarten
        for (let i = 0; i < hand.length; i++) {
            if (this.textContent == hand[i]) {
                //Karte zum Ablagestapel-Array hinzuf�gen
                ablagestapel.push(hand[i]);
                //Karte aus dem Hand-Array entfernen
                hand.splice(i, 1);
                break;
            }
        }
        document.getElementById("Ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Karten: " + ablagestapel.length;
        //div der abgelegten Handkarte entfernen
        this.parentNode.removeChild(this);
    }
});
//# sourceMappingURL=maumau.js.map