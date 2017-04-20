//Aufgabe: 3 - MauMau
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 09.04.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var maumau;
(function (maumau) {
    let n;
    function getRandomCard(_nachziehstapel, _hand, _ablagestapel, _event) {
        // 1.1 & 1.2
        if (_nachziehstapel.length > 0 && _hand.length < 5) {
            n--;
            // 1.3
            var i = Math.floor((Math.random() * n) + 0);
            // 1.4 & 1.5
            let ziehen = _nachziehstapel[i];
            _nachziehstapel.splice(i, 1);
            _hand.push(ziehen);
            document.getElementById("Nachziehstapel").textContent = "Nachziehstapel " + "\r\n" + "Karten: " + _nachziehstapel.length;
            // 1.6
            let div = document.createElement("div");
            document.getElementById("Hand").appendChild(div);
            div.textContent = ziehen;
            // Handkarten werden gestylt
            let s = div.style;
            s.cssFloat = "left";
            s.border = "2px solid black";
            s.display = "inline";
            s.textAlign = "center";
            s.fontSize = "2em";
            s.backgroundColor = "#F2F2F2";
            s.width = "4em";
            s.height = "6em";
            s.marginLeft = "1em";
            s.borderRadius = "5px";
            s.cursor = "pointer";
            s.boxShadow = "5px 5px 10px black";
            div.addEventListener("click", layDownCard.bind(this, _hand, _ablagestapel));
        }
    }
    function layDownCard(_hand, _ablagestapel, _event) {
        let clickedDiv = _event.target;
        for (let i = 0; i < _hand.length; i++) {
            if (clickedDiv.textContent == _hand[i]) {
                // 2.2
                _ablagestapel.push(_hand[i]);
                // 2.1
                _hand.splice(i, 1);
                break;
            }
        }
        document.getElementById("Ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Karten: " + _ablagestapel.length + "\r\n" + "oberste Karte: " + clickedDiv.textContent;
        // 2.3
        clickedDiv.parentNode.removeChild(clickedDiv);
    }
    document.addEventListener('DOMContentLoaded', function () {
        // Zuerst werden 3 Arrays erstellt. Im ersten Array sind die 32 Spielkarten aufgelistet. 
        // Die anderen beiden beinhalten noch keine Werte, da sich zun�chst alle 32 Karten auf dem Nachziehstapel befinden
        let nachziehstapel = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo Koenig", "Karo As",
            "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig", "Kreuz As",
            "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz Koenig", "Herz As",
            "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik Koenig", "Pik As"];
        let hand = [];
        let ablagestapel = [];
        n = nachziehstapel.length;
        document.getElementById("Nachziehstapel").textContent = "Nachziehstapel " + "\r\n" + "Karten auf diesem Stapel: " + nachziehstapel.length;
        document.getElementById("Ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Karten auf diesem Stapel: " + ablagestapel.length;
        // 1. FUNKTION - Zuf�llige Karte ziehen - Eine Karte soll vom Nachziehstapel genommen werden
        //    1.1 Bedingung : Man soll nur eine Karte ziehen k�nnen, wenn sich auf dem Stapel mehr als 0 Karten befinden
        //    1.2 Bedingung : Man soll nur eine Karte ziehen k�nnen, wenn auf der Hand noch platz ist, d.h. wenn sich auf der Hand weniger als 5 Karten befinden
        //    Was passieren soll, wenn beide Bedingungen erf�llt sind:
        //      1.3 Eine zuf�llige Karte soll aus dem Array "nachziehstapel" ausgegeben werden
        //      1.4 Die gezogene Karte soll aus dem nachziehstapel-Array herausgenommen werden
        //      1.5 Die gezogene Karte soll dem hand-Array hinzugef�gt werden
        //      1.6 Die Karte soll auf der Hand dargestellt werden
        //      1.7 Die Funktion soll durch anklicken des Nachziehstapelsget werden
        // 1.7
        console.log(nachziehstapel);
        console.log(hand);
        console.log(ablagestapel);
        document.getElementById("Nachziehstapel").addEventListener("click", getRandomCard.bind(this, nachziehstapel, hand, ablagestapel), false);
        // 2. FUNKTION - Karte ablegen - Eine Karte soll vom Nachziehstapel genommen werden
        //    Was passieren soll:
        //    2.1 Angeklickte Karte soll aus dem Hand-Array entfert werden
        //    2.2 Angeklickte Karte soll dem Ablagestapel-Array hinzugef�gt werden
        //    2.3 Das DIV der angeklickten Karte soll nicht mehr angezeigt werden
    });
})(maumau || (maumau = {}));
//# sourceMappingURL=maumau.js.map