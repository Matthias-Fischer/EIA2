var L4_Canvas;
(function (L4_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    let x = [];
    let y = [];
    let n = 10;
    let radius = 10;
    var imgData = crc2.getImageData(0, 0, 800, 480);
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        var my_gradient = crc2.createLinearGradient(0, 0, 0, 200);
        my_gradient.addColorStop(0, "#0080FF");
        my_gradient.addColorStop(1, "#81F7F3");
        crc2.fillStyle = my_gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        // FUNKTIONSAU       
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
        drawFluss("#000000", "#0040FF");
        drawSonne("#FFBF00", "#F4FA58");
        drawWolke("white", "white");
        drawBlume_1(120, 430, "white", "white");
        drawBlume_1(220, 380, "#A9BCF5", "#A9BCF5");
        drawBlume_2(50, 380, "red", "yellow");
        drawBlume_2(140, 360, "red", "#2ECCFA");
        drawBlume_3(180, 440, "red", "#088A4B");
        drawBlume_3(50, 460, "red", "#610B21");
        //drawBlume_3(280, 340, "red", "#610B21");
        drawBlumeRandom();
        drawBienenkorb();
        copyPicture();
        for (let i = 0; i < n; i++) {
            x[i] = 255;
            y[i] = 295;
        }
        canvas.addEventListener("click", addBiene);
        window.setTimeout(animate, 20);
    } // Ende der Init-Funktion
    function animate() {
        console.log("Animate called");
        crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            x[i] += Math.random() * 15 - 6;
            y[i] += Math.random() * 11 - 6;
            drawBiene(x[i], y[i]);
            // rechts raus, links rein
            if (x[i] > crc2.canvas.width) {
                x[i] = 0;
            }
            // links raus, rechts rein
            if (x[i] < 0) {
                x[i] = 800;
            }
            //oben raus, unten rein   
            if (y[i] < 0) {
                y[i] = 480;
            }
            //unten raus, oben rein   
            if (y[i] > 480) {
                y[i] = 0;
            }
        }
        window.setTimeout(animate, 20);
    }
    function drawBiene(_x, _y) {
        //        crc2.fillStyle = "#000000";
        //        crc2.fillRect(_x,         
        var img = document.getElementById("scream");
        crc2.drawImage(img, _x, _y);
    }
    // Speichert das Canvas Bild  
    function copyPicture() {
        imgData = crc2.getImageData(0, 0, 800, 480);
        crc2.putImageData(imgData, 0, 0);
    }
    function addBiene() {
        x.push(255);
        y.push(295);
        n += 1;
        console.log("Die Funktion wird aufgerufen");
    }
    // FUNKTIONEN Umwelt
    function drawBerg(_x, _y, _a) {
        crc2.beginPath();
        crc2.moveTo(_x - _a, _y + _a);
        crc2.lineTo(_x, _y - _a);
        crc2.lineTo(_x + _a, _y + _a);
        var my_gradient = crc2.createLinearGradient(0, 0, 0, 200);
        my_gradient.addColorStop(0, "white");
        my_gradient.addColorStop(1, "gray");
        crc2.fillStyle = my_gradient;
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWieseBackground(_strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(0, 480);
        crc2.lineTo(0, 200);
        crc2.lineTo(800, 300);
        crc2.lineTo(800, 480);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawStamm2(_strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.rect(170, 200, 10, 50);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawStamm1(_strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.rect(120, 240, 10, 60);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawTanne2(_x, _y, _a, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - _a, _y + _a);
        crc2.lineTo(_x, _y - _a);
        crc2.lineTo(_x + _a, _y + _a);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawTanne1(_x, _y, _a, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - _a, _y + _a);
        crc2.lineTo(_x, _y - _a);
        crc2.lineTo(_x + _a, _y + _a);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWieseForeground(_strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(0, 480);
        crc2.lineTo(0, 300);
        crc2.lineTo(800, 200);
        crc2.lineTo(800, 480);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawFluss(_strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(180, 480);
        crc2.lineTo(420, 248);
        crc2.lineTo(460, 242);
        crc2.lineTo(400, 480);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawSonne(_strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(70, 70, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWolke(_strokeColor, _fillColor) {
        // 1.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(500, 150, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 2.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(515, 150, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 3.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(530, 150, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 4.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(545, 150, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 5.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(507, 140, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 6.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(523, 140, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 7.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(538, 140, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 8.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(507, 160, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 9.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(523, 160, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 10.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(538, 160, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    // FUNKTIONEN Blumen   
    function drawBlume_1(_x, _y, _strokeColor, _fillColor) {
        //Bl�te
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        for (var i = 0; i < 8; i++) {
            crc2.ellipse(_x + 1.2, _y - 30, 4, 20, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.closePath();
        crc2.fill();
        //Blumen Inneres
        crc2.beginPath();
        crc2.fillStyle = "#FF0040";
        crc2.arc(_x + 1.2, _y - 30, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawBlume_2(_x, _y, _strokeColor, _fillColor) {
        //Bl�te
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        for (var i = 0; i < 8; i++) {
            crc2.ellipse(_x + 1.2, _y - 30, 2, 30, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.closePath();
        crc2.fill();
        //Blumen Inneres
        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.arc(_x + 1.2, _y - 30, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawBlume_3(_x, _y, _strokeColor, _fillColor) {
        //Bl�te
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        for (var i = 0; i < 8; i++) {
            crc2.ellipse(_x + 1.2, _y - 30, 8, 20, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.closePath();
        crc2.fill();
        //Blumen Inneres
        crc2.beginPath();
        crc2.fillStyle = "#DBA901";
        crc2.arc(_x + 1.2, _y - 30, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawBienenkorb() {
        var img = document.getElementById("korb");
        crc2.drawImage(img, 200, 180);
        //        crc2.beginPath();
        //        crc2.moveTo(220, 300);
        //        crc2.bezierCurveTo(220, 150, 320, 150, 320, 300);
        //        crc2.strokeStyle = "black";
        //        crc2.stroke();
        //        crc2.fillStyle = "#FAAC58";
        //        crc2.fill();
        //        crc2.beginPath();
        //        crc2.rect(280, 250, 20, 30);
        //        crc2.stroke();
        //        crc2.fillStyle = "black";
        //        crc2.closePath();
        //        crc2.fill();
    }
    // ZUFALLSFUNKTION
    function drawBlumeRandom() {
        var numberBlumen = Math.floor((Math.random() * 10) + 5); //Zufallszahl zwischen 5 - 15
        console.log(numberBlumen);
        for (var i = 0; i < numberBlumen; i++) {
            var x;
            var y;
            var p;
            x = Math.floor((Math.random() * 350) + 450); //Breite Wiese 
            y = Math.floor((Math.random() * 200) + 280); //H�he des Zufallsbereiches
            p = Math.floor((Math.random() * 3) + 0);
            switch (p) {
                case 0:
                    drawBlume_1(x, y, "#A9BCF5", "#A9BCF5");
                    break;
                case 1:
                    drawBlume_2(x, y, "white", "white");
                    break;
                case 2:
                    drawBlume_3(x, y, "red", "#088A4B");
                    break;
                default:
                    break;
            }
        }
    }
})(L4_Canvas || (L4_Canvas = {}));
//# sourceMappingURL=Bienenschwarm.js.map