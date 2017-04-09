//Aufgabe: 3 - 
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 01.04.17
//Dieser Code wurde in Zusammenarbeit mit Marcel Riedel erstellt
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

     window.onload = function (): void {
        
    let zeile : number = 0 ;    // Deklaration für Zeilen
    let rice : number = 1;      // Deklaration für die Menge an Reiskörnern, die auf einem Feld liegt
    
    
    // For-Schleife, damit die 64 Felder des Schachbretts erzeugt werden
    
    for (let i: number = 0; i<64; i++) {
            
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div); // DIV- Element wird an Dokument drangehängt
            
            
    // Mit Hilfe des Modulo-Operators, soll nach 8 Feldern ein Ubruch erzeugt werden
    // Außerdem soll das Programm eine Zeile hochzählen
            
    if (i % 8 == 0) {
       div.className = "floating";
       zeile++;
       }
            
            
    // Wenn es sich um eine gerade Zeile handelt (der Modulo also 0 ist), dann sollen die geradzahligen Felder
    // schwarz sein und die ungeraden weiß      
            
        if (zeile % 2 ==0) {
                   
            if (i % 2 == 0) {
                div.className = "black";
            } else { //(i % 2 == 1) 
                div.className = "white";
            }
         }
            
    // Wenn es sich um eine ungerade Zeile handelt (der Modulo also 1 ist), dann sollen die geradzahligen Felder
    // weiß sein und die ungeraden schwarz              
        
        if (zeile % 2 == 1) {
      
                if (i % 2 == 0) {
                    div.className = "white";
                } else { //(i % 2 == 1) 
                    div.className = "black";
                }
         }
        
       
 
      // Berechnung der Reiskörner  
   
         div.innerText = "" + rice;
         rice *= 2;
       
     }

    // Diese Funktion berechnet die Koordinaten des Mauszeigers
    // Dann werden diese Koordinaten als Positionskoordinaten des DIVs verwendet
    // Somit befindet sich das DIV immer an an der Stelle, an der sich auch der Mauszeiger befindet    
    
    document.addEventListener("mousemove",function(event){
   
        var x = event.pageX;
        var y = event.pageY;        
    
        document.getElementById("position").style.position = "absolute"; 
        document.getElementById("position").style.top = y + "px"; 
        document.getElementById("position").style.left = x + "px"; 
        document.getElementById("position").style.border = "5px solid silver"; 
        document.getElementById("position").style.padding = "10px"; 
        document.getElementById("position").style.backgroundColor = "#F2F2F2"; 
    });    
    
        
    // Nun werden die ersten 8 Felder des Schachbretts angesprochen.
    // Hierfür wird eine neue Variable namens "divList" einegführt, 
    // die mit der Schleife explizit diese ersten 8 Felder ansprechen
    // Außerdem sind diese Felder nun klickbar
    // Der Begriff toggle bedeutet "umschalten". Bei jedem Klick auf ein Feld der ersten Reihe des Schachbretts 
    // schält das Programm zwischen der Klasse "selected" und der normalen darstellung hin und her
    // Laut w3schools : to toggle between hiding and showing elements with class="markiert".  
    // Außerdem soll jetzt die Funktion zur Berechnung der Summe der Reiskörner aufgerufen werden
        
    var divList = document.getElementsByTagName("div");
    for (var i1 = 0; i1 < 9; i1++) {
        divList[i1].addEventListener("click", function () {
           this.classList.toggle("markiert");
            berechneSummeKoerner();
        });
    }
        
    
    // Zur Berechnung der Körner-Summe wird nun eine Funktion eingeführt
        
    function berechneSummeKoerner() {
        
        // Für die nachfolgende If-Abfrage werden 2 neue Variablen erstellt
        
        var markierteDivs = document.getElementsByClassName("markiert");
        var summeKoerner = 0;
        
        // Ist keines der 8 Felder der ersten Reihe ausgewählt, soll das DIV, welches sich an dem Mauszeiger befindet
        // ausgeblendet werden. Ansonsten soll es mit "inline-block" angezeigt werden.
        
        if (markierteDivs.length == 0) {
            document.getElementById("position").style.display = "none";
        }
        else {
            document.getElementById("position").style.display = "inline-block";
        }
        
        // Nun soll der Inhalt der markierten Felder ausgelesen und eine Summe im Dezimal- und Hexadezimalsystem gebildet werden,
        // welche in deim "position-DIV" angezeigt werden soll
        // Hierfür wird erneut eine neue Variable eingeführt, um diese mit Hilfe einer For-Schleife mit den markierten DIVs zu vergleichen
        
        for (var i2 = 0; i2 < markierteDivs.length; i2++) {
            summeKoerner += Number(markierteDivs[i2].textContent);
            document.getElementById("position").textContent = "Summe Reiskoerner:" + "\r\n" + "Dezimal: " + summeKoerner.toString() + "\r\n" + "Hexadezimal: " + summeKoerner.toString(16);
       }
    }

       
        
        
       
      
        
    
        
        

        
        
    } 
         

