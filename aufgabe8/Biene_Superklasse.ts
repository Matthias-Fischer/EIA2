//Aufgabe: 7 - OO-Blumenwiese
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 14.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace L8_Classes {

    export class Biene_Superklasse {

        x: number;
        y: number;
        size: number;
        xspeed: number;
        yspeed: number;

        xmin: number = -2.5;
        xmax: number = 1.5;
        ymin: number = -0.5;
        ymax: number = 0.5;



        constructor(_x: number, _y: number) {
            this.setRandomSpeed();
            this.setRandomSize();
            this.draw();
            this.x = _x;
            this.y = _y;
            this.draw();
        }

        update(): void {
            this.move();
            this.draw();
        }


        draw(): void {
//            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("scream");
//            crc2.drawImage(img, this.x, this.y, this.size, this.size);
              //abstrakt
        }

        move(): void {

            this.x += Math.random() * 2 - 2 - this.xspeed;
            this.y += Math.random() * 2 - 1 - this.yspeed;

            // rechts raus, links rein
            if (this.x > crc2.canvas.width) {
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

        setRandomSize(): void {
            this.size = Math.random() * 20 + 10; //Größe  
        }

        setRandomSpeed(): void {
            this.xspeed = Math.random() * (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed in y-Richtung   
        }
    }
}

