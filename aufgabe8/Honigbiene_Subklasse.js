//Aufgabe: 8 - Vererbung
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Classes;
(function (L8_Classes) {
    class Honigbiene_Subklasse extends L8_Classes.Biene_Superklasse {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.009;
            this.setRandomTargetPosition();
        }
        // Koordinaten der Ziel-Blume
        setRandomTargetPosition() {
            let randomtargetflower = Math.round(Math.random() * (L8_Classes.pflanzen.length - 1));
            this.xTarget = L8_Classes.pflanzen[randomtargetflower].x;
            this.yTarget = L8_Classes.pflanzen[randomtargetflower].y;
        }
        move() {
            let xDiff = this.xTarget - this.x - 15;
            let yDiff = this.yTarget - this.y - 40;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        draw() {
            var img = document.getElementById("HonigBiene");
            L8_Classes.crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }
    }
    L8_Classes.Honigbiene_Subklasse = Honigbiene_Subklasse;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=Honigbiene_Subklasse.js.map