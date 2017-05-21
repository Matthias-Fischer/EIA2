//Aufgabe: 8 - Vererbung
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Classes;
(function (L8_Classes) {
    class Pflanze_Superklasse {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.floor((Math.random() * 760) + 20);
            this.y = Math.floor((Math.random() * 150) + 330);
        }
        draw() {
            // abstract
        }
    }
    L8_Classes.Pflanze_Superklasse = Pflanze_Superklasse;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=Pflanze_Superklasse.js.map