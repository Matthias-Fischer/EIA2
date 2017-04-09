//Aufgabe: 2 - Schachbrett
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 01.04.17
//Dieser Code wurde in Zusammenarbeit mit Marcel Riedel erstellt
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

window.onload = function (): void {
        
    let zeile : number = 0 ;    // Deklaration f�r Zeilen
    let rice : number = 1;      // Deklaration f�r die Menge an Reisk�rnern, die auf einem Feld liegt
    
    
    // For-Schleife, damit die 64 Felder des Schachbretts erzeugt werden
    
    for (let i: number = 0; i<64; i++) {
            
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div); // DIV- Element wird an Dokument drangeh�ngt
            
            
    // Mit Hilfe des Modulo-Operators, soll nach 8 Feldern ein Ubruch erzeugt werden
    // Au�erdem soll das Programm eine Zeile hochz�hlen
            
    if (i % 8 == 0) {
       div.className = "floating";
       zeile++;
       }
            
            
    // Wenn es sich um eine gerade Zeile handelt (der Modulo also 0 ist), dann sollen die geradzahligen Felder
    // schwarz sein und die ungeraden wei�      
            
        if (zeile % 2 ==0) {
                   
            if (i % 2 == 0) {
                div.className = "black";
            } else { //(i % 2 == 1) 
                div.className = "white";
            }
         }
            
    // Wenn es sich um eine ungerade Zeile handelt (der Modulo also 1 ist), dann sollen die geradzahligen Felder
    // wei� sein und die ungeraden schwarz              
        
        if (zeile % 2 == 1) {
      
                if (i % 2 == 0) {
                    div.className = "white";
                } else { //(i % 2 == 1) 
                    div.className = "black";
                }
         }
 
      // Berechnung der Reisk�rner  
   
         div.innerText = "" + rice;
         rice *= 2;
       
     }
  }           
