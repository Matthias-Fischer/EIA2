//Aufgabe: 8 - Vererbung
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace L8_Classes {

    export class Pflanze_Superklasse {

        x: number;
        y: number;
        strokeColor: string;
        fillColor: string;


        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }
        
        setRandomPosition(): void {
            this.x = Math.floor((Math.random() * 760) + 20); 
            this.y = Math.floor((Math.random() * 150) + 330); 

            }
        
          draw(): void {
            // abstract
        }









    }
}