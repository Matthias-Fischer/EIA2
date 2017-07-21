//Aufgabe: 12 - Abschlussaufgabe
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.07.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.



namespace L7_Classes {
    export class Comet {

        x: number;
        y: number;
        w: number = 20;
        h: number = 20;
        n: number = 10;


        constructor(_x: number, _y: number) {
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.draw();
            this.move();
        }

        draw(): void {
            crc2.fillStyle = "maroon";
            crc2.fillRect(this.x, this.y, this.h, this.w);
        }

        move(): void {
            this.x += -2.1;
            
            if (this.x < -20) {
                this.x = 400;
                this.y = Math.random() * 600;
            }

        }

    }

}
