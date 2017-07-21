//Aufgabe: 12 - Abschlussaufgabe
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.07.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace L7_Classes {
    export class Rocket {

        x: number = 0;
        y: number = 0;
        w: number = 20;
        h: number = 20;
        size: number = 100;

        gravity: number = 0.8;
        lift: number = -15;
        velocity: number = 0;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            crc2.fillStyle = "green";
            crc2.fillRect(this.x, this.y, this.w, this.h);
        }

        update(): void {
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

        up(): void {
            this.velocity += this.lift;
        }

        end(): void {
            this.x = -100;
            this.y = 0;
        }
    }
}