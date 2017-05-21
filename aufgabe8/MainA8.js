//Aufgabe: 8 - Vererbung
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Classes;
(function (L8_Classes) {
    window.addEventListener("load", init);
    let bienen = [];
    let n = 5; //Anzahl der Bienen
    L8_Classes.pflanzen = [];
    let p = 6; //Anzahl feste Blumen
    let numberFlowers = Math.floor((Math.random() * 10) + 8);
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L8_Classes.crc2 = canvas.getContext("2d");
        //Farbverlauf Himmel
        var my_gradient = L8_Classes.crc2.createLinearGradient(0, 0, 0, 200);
        my_gradient.addColorStop(0, "#0080FF");
        my_gradient.addColorStop(1, "#81F7F3");
        L8_Classes.crc2.fillStyle = my_gradient;
        L8_Classes.crc2.fillRect(0, 0, canvas.width, canvas.height);
        // FUNKTIONSAUFRUFE     
        drawBerg(700, 150, 100);
        drawBerg(615, 180, 50);
        drawBerg(550, 170, 80);
        drawWieseBackground("#000000", "#04B404");
        drawStamm2("#000000", "#B45F04");
        drawStamm1("#000000", "#B45F04");
        drawTanne2(175, 170, 40, "#000000", "#0B610B");
        drawTanne2(175, 150, 35, "#000000", "#0B610B");
        drawTanne2(175, 130, 30, "#000000", "#0B610B");
        drawTanne2(175, 110, 25, "#000000", "#0B610B");
        drawTanne1(125, 210, 40, "#000000", "#0B610B");
        drawTanne1(125, 190, 35, "#000000", "#0B610B");
        drawTanne1(125, 170, 30, "#000000", "#0B610B");
        drawTanne1(125, 150, 25, "#000000", "#0B610B");
        drawWieseForeground("#000000", "#00ff00");
        drawSonne("#FFBF00", "#F4FA58");
        drawWolke("white", "white");
        drawBienenkorb();
        drawAst();
        for (let i = 0; i < numberFlowers; i++) {
            switch (Math.floor((Math.random() * 3) + 0)) {
                case 0:
                    new L8_Classes.Blume1_Subklasse(0, 0);
                    break;
                case 1:
                    new L8_Classes.Blume2_Subklasse(0, 0);
                    break;
                case 2:
                    new L8_Classes.Blume3_Subklasse(0, 0);
                    break;
                default:
                    break;
            }
            console.log("hallo");
        }
        imgData = L8_Classes.crc2.getImageData(0, 0, 800, 480);
        //Ziel-Blumen
        for (let i = 0; i < 6; i++) {
            let f = new L8_Classes.Blume1_Subklasse(0, 0);
            L8_Classes.pflanzen.push(f);
        }
        console.log(L8_Classes.pflanzen);
        //Bienen erstellen --> Normale Bienen
        for (let i = 0; i < n; i++) {
            let b = new L8_Classes.NormaleBiene(690, 240);
            let c = new L8_Classes.Honigbiene_Subklasse(690, 240);
            bienen.push(b);
            bienen.push(c);
        }
        window.setTimeout(animate, 20);
        console.log(bienen);
        canvas.addEventListener("click", addBiene);
    } // Ende der Init-Funktion
    function animate(_width, _height) {
        L8_Classes.crc2.putImageData(imgData, 0, 0);
        console.log("Animate called");
        for (let i = 0; i < L8_Classes.pflanzen.length; i++) {
            let s = L8_Classes.pflanzen[i];
            s.draw();
        }
        for (let i = 0; i < bienen.length; i++) {
            let s = bienen[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
    function addBiene(_event) {
        // Jede zweite Biene soll eine Honigbiene sein
        if (n % 2 == 1) {
            let s = new L8_Classes.NormaleBiene(690, 240);
            bienen.push(s);
            n++; //Anzahl der Bienen
            console.log("Ich fliege nur durch die Gegend");
        }
        else {
            let h = new L8_Classes.Honigbiene_Subklasse(690, 240);
            bienen.push(h);
            n++;
            console.log("Ich bin eine Honigbiene");
        }
        console.log(bienen);
    }
    // FUNKTIONEN Umwelt
    function drawBerg(_x, _y, _a) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.moveTo(_x - _a, _y + _a);
        L8_Classes.crc2.lineTo(_x, _y - _a);
        L8_Classes.crc2.lineTo(_x + _a, _y + _a);
        var my_gradient = L8_Classes.crc2.createLinearGradient(0, 0, 0, 200);
        my_gradient.addColorStop(0, "white");
        my_gradient.addColorStop(1, "gray");
        L8_Classes.crc2.fillStyle = my_gradient;
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
    }
    function drawWieseBackground(_strokeColor, _fillColor) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.moveTo(0, 480);
        L8_Classes.crc2.lineTo(0, 200);
        L8_Classes.crc2.lineTo(800, 300);
        L8_Classes.crc2.lineTo(800, 480);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
    }
    function drawStamm2(_strokeColor, _fillColor) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.rect(170, 200, 10, 50);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.stroke();
        L8_Classes.crc2.fill();
    }
    function drawStamm1(_strokeColor, _fillColor) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.rect(120, 240, 10, 60);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.stroke();
        L8_Classes.crc2.fill();
    }
    function drawTanne2(_x, _y, _a, _strokeColor, _fillColor) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.moveTo(_x - _a, _y + _a);
        L8_Classes.crc2.lineTo(_x, _y - _a);
        L8_Classes.crc2.lineTo(_x + _a, _y + _a);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
    }
    function drawTanne1(_x, _y, _a, _strokeColor, _fillColor) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.moveTo(_x - _a, _y + _a);
        L8_Classes.crc2.lineTo(_x, _y - _a);
        L8_Classes.crc2.lineTo(_x + _a, _y + _a);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
    }
    function drawWieseForeground(_strokeColor, _fillColor) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.moveTo(0, 480);
        L8_Classes.crc2.lineTo(0, 300);
        L8_Classes.crc2.lineTo(800, 200);
        L8_Classes.crc2.lineTo(800, 480);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
    }
    function drawSonne(_strokeColor, _fillColor) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(70, 70, 40, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
    }
    function drawWolke(_strokeColor, _fillColor) {
        // 1.Kreis
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(500, 150, 10, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
        // 2.Kreis
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(515, 150, 10, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
        // 3.Kreis
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(530, 150, 10, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
        // 4.Kreis
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(545, 150, 10, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
        // 5.Kreis
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(507, 140, 10, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
        // 6.Kreis
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(523, 140, 10, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
        // 7.Kreis
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(538, 140, 10, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
        // 8.Kreis
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(507, 160, 10, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
        // 9.Kreis
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(523, 160, 10, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
        // 10.Kreis
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(538, 160, 10, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
    }
    function drawBienenkorb() {
        var img = document.getElementById("korb");
        L8_Classes.crc2.drawImage(img, 650, 182);
    }
    //    function drawBear() {
    //        var img = document.getElementById("Bear");
    //        crc2.drawImage(img, 450, 150);
    //    }
    function drawAst() {
        var img = document.getElementById("ast");
        L8_Classes.crc2.drawImage(img, 610, 150);
    }
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=MainA8.js.map