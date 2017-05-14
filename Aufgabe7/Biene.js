//Aufgabe: 7 - OO-Blumenwiese
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 14.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    class Biene {
        constructor(_x, _y) {
            this.xmin = -2.5;
            this.xmax = 1.5;
            this.ymin = -0.5;
            this.ymax = 0.5;
            this.setRandomSpeed();
            this.setRandomSize();
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            var img = document.getElementById("scream");
            L7_Classes.crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }
        move() {
            this.x += Math.random() * 2 - 2 - this.xspeed;
            this.y += Math.random() * 2 - 1 - this.yspeed;
            // rechts raus, links rein
            if (this.x > L7_Classes.crc2.canvas.width) {
                this.x = 0;
            }
            // links raus, rechts rein
            if (this.x < 0) {
                this.x = 800;
            }
            //oben raus, unten rein   
            if (this.y < 0) {
                this.y = 480;
            }
            //unten raus, oben rein   
            if (this.y > 480) {
                this.y = 0;
            }
        }
        setRandomSize() {
            this.size = Math.random() * 20 + 10; //Gr��e  
        }
        setRandomSpeed() {
            this.xspeed = Math.random() * (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed in y-Richtung   
        }
    }
    L7_Classes.Biene = Biene;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Biene.js.map