//Aufgabe: 8 - Vererbung
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace L8_Classes {
    
    export class Blume1_Subklasse extends Pflanze_Superklasse {
        
        
        
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.draw();  
        }
        
        
        draw(): void {

            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#B7FF00";
            //crc2.strokeStyle = _strokeColor;
            for (var i: number = 0; i < 8; i++) {
                crc2.ellipse(this.x + 1.2, this.y - 30, 4, 20, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.closePath();
            crc2.fill();
            //Blumen Inneres
            crc2.beginPath();
            crc2.fillStyle = "#E8970C";
            crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }


        
    }
    
    

}