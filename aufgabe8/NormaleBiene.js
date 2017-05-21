//Aufgabe: 8 - Vererbung
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Classes;
(function (L8_Classes) {
    class NormaleBiene extends L8_Classes.Biene_Superklasse {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            var img = document.getElementById("scream");
            L8_Classes.crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }
    }
    L8_Classes.NormaleBiene = NormaleBiene;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=NormaleBiene.js.map