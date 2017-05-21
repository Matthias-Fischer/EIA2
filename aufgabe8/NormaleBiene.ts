//Aufgabe: 8 - Vererbung
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L8_Classes {
    
    export class NormaleBiene extends Biene_Superklasse {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("scream");
            crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }
    }
}