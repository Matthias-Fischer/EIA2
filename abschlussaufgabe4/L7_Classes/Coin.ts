//Aufgabe: 12 - Abschlussaufgabe
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.07.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.




namespace L7_Classes {
    export class Coin {

        x: number;
        y: number;
        w: number = 20;
        h: number = 20;
        radius: number = 12;


        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.draw();
            this.move();
        }

        draw(): void {
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            crc2.fill();
            crc2.strokeStyle = "black";
            crc2.closePath();
        }

        move(): void {
            this.x += -1.7;

            if (this.x + this.radius < 0) {
                this.x = 400 + this.radius;
                this.y = Math.random() * 600;
            }
        }

        changePosition(): void {
            this.x = 400;
            this.y = Math.random() * 600;
        }

        faster(): void {
            this.x += -2.3;
        }

    }

}
