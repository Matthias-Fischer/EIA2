//Aufgabe: 6 - Bienenschwarm
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 07.05.17 
//Code in Zusammenarbeit mit Mario Sommer erstellt
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    window.addEventListener("load", init);
    let bienen = [];
    let pflanzen = [];
    let n = 10;
    let numberFlowers = Math.floor((Math.random() * 10) + 8);
    let p = 6; //Anzahl feste Blumen
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L7_Classes.crc2 = canvas.getContext("2d");
        //Farbverlauf Himmel
        var my_gradient = L7_Classes.crc2.createLinearGradient(0, 0, 0, 200);
        my_gradient.addColorStop(0, "#0080FF");
        my_gradient.addColorStop(1, "#81F7F3");
        L7_Classes.crc2.fillStyle = my_gradient;
        L7_Classes.crc2.fillRect(0, 0, canvas.width, canvas.height);
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
        drawBear();
        drawAst();
        // Feste Blumen im Hintergrund ohne Array
        for (let i = 0; i < numberFlowers; i++) {
            let t = new L7_Classes.Pflanze(0, 0);
            t.blumeRandomPosition();
        }
        console.log(pflanzen);
        imgData = L7_Classes.crc2.getImageData(0, 0, 800, 480);
        //Blumen erstellen + (Array)
        for (let i = 0; i < p; i++) {
            let x = Math.floor((Math.random() * 760) + 20); //Breite Wiese (20px links/rechts frei damit keine Bl�te abgeschnitten wird)
            let y = Math.floor((Math.random() * 80) + 400); //H�he Wiese
            let f = new L7_Classes.Pflanze(x, y);
            pflanzen[i] = f;
        }
        //Bienen erstellen + (Array)
        for (let i = 0; i < n; i++) {
            let s = new L7_Classes.Biene(675, 230);
            bienen[i] = s;
        }
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", addBiene);
    } // Ende der Init-Funktion
    function animate(_width, _height) {
        L7_Classes.crc2.putImageData(imgData, 0, 0);
        console.log("Animate called");
        for (let i = 0; i < pflanzen.length; i++) {
            pflanzen[i].drawBlume_3();
        }
        for (let i = 0; i < bienen.length; i++) {
            let s = bienen[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
    function addBiene(_event) {
        let s = new L7_Classes.Biene(675, 230);
        bienen.push(s);
    }
    // FUNKTIONEN Umwelt
    function drawBerg(_x, _y, _a) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.moveTo(_x - _a, _y + _a);
        L7_Classes.crc2.lineTo(_x, _y - _a);
        L7_Classes.crc2.lineTo(_x + _a, _y + _a);
        var my_gradient = L7_Classes.crc2.createLinearGradient(0, 0, 0, 200);
        my_gradient.addColorStop(0, "white");
        my_gradient.addColorStop(1, "gray");
        L7_Classes.crc2.fillStyle = my_gradient;
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    function drawWieseBackground(_strokeColor, _fillColor) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.moveTo(0, 480);
        L7_Classes.crc2.lineTo(0, 200);
        L7_Classes.crc2.lineTo(800, 300);
        L7_Classes.crc2.lineTo(800, 480);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    function drawStamm2(_strokeColor, _fillColor) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.rect(170, 200, 10, 50);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.fill();
    }
    function drawStamm1(_strokeColor, _fillColor) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.rect(120, 240, 10, 60);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.fill();
    }
    function drawTanne2(_x, _y, _a, _strokeColor, _fillColor) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.moveTo(_x - _a, _y + _a);
        L7_Classes.crc2.lineTo(_x, _y - _a);
        L7_Classes.crc2.lineTo(_x + _a, _y + _a);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    function drawTanne1(_x, _y, _a, _strokeColor, _fillColor) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.moveTo(_x - _a, _y + _a);
        L7_Classes.crc2.lineTo(_x, _y - _a);
        L7_Classes.crc2.lineTo(_x + _a, _y + _a);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    function drawWieseForeground(_strokeColor, _fillColor) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.moveTo(0, 480);
        L7_Classes.crc2.lineTo(0, 300);
        L7_Classes.crc2.lineTo(800, 200);
        L7_Classes.crc2.lineTo(800, 480);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    function drawSonne(_strokeColor, _fillColor) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(70, 70, 40, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    function drawWolke(_strokeColor, _fillColor) {
        // 1.Kreis
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(500, 150, 10, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        // 2.Kreis
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(515, 150, 10, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        // 3.Kreis
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(530, 150, 10, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        // 4.Kreis
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(545, 150, 10, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        // 5.Kreis
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(507, 140, 10, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        // 6.Kreis
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(523, 140, 10, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        // 7.Kreis
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(538, 140, 10, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        // 8.Kreis
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(507, 160, 10, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        // 9.Kreis
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(523, 160, 10, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        // 10.Kreis
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(538, 160, 10, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    function drawBienenkorb() {
        var img = document.getElementById("korb");
        L7_Classes.crc2.drawImage(img, 650, 182);
    }
    function drawBear() {
        var img = document.getElementById("Bear");
        L7_Classes.crc2.drawImage(img, 450, 150);
    }
    function drawAst() {
        var img = document.getElementById("ast");
        L7_Classes.crc2.drawImage(img, 610, 150);
    }
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=MainA7.js.map