//Aufgabe: 12 - Abschlussaufgabe
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.07.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    class Comet {
        constructor(_x, _y) {
            this.w = 20;
            this.h = 20;
            this.n = 10;
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.move();
        }
        draw() {
            L7_Classes.crc2.fillStyle = "maroon";
            L7_Classes.crc2.fillRect(this.x, this.y, this.h, this.w);
        }
        move() {
            this.x += -2.1;
            if (this.x < -20) {
                this.x = 400;
                this.y = Math.random() * 600;
            }
        }
    }
    L7_Classes.Comet = Comet;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Comet.js.map