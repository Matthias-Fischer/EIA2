//Aufgabe: 12 - Abschlussaufgabe
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.07.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    class Rocket {
        constructor(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.w = 20;
            this.h = 20;
            this.size = 100;
            this.gravity = 0.8;
            this.lift = -15;
            this.velocity = 0;
            this.x = _x;
            this.y = _y;
        }
        draw() {
            L7_Classes.crc2.fillStyle = "green";
            L7_Classes.crc2.fillRect(this.x, this.y, this.w, this.h);
        }
        update() {
            this.draw();
            this.velocity += this.gravity;
            this.velocity *= 0.9;
            this.y += this.velocity;
            if (this.y > 580) {
                document.getElementById("overlay").style.display = "block";
                this.x = -100;
                this.y = 0;
            }
            if (this.y < 0) {
                document.getElementById("overlay").style.display = "block";
                this.x = -100;
                this.y = 0;
            }
        }
        up() {
            this.velocity += this.lift;
        }
        end() {
            this.x = -100;
            this.y = 0;
        }
    }
    L7_Classes.Rocket = Rocket;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Rocket.js.map