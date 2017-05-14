//Aufgabe: 7 - OO-Blumenwiese
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 14.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    class Pflanze {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        blumeRandomPosition() {
            let m = Math.floor((Math.random() * 3) + 0);
            this.x = Math.floor((Math.random() * 760) + 20);
            this.y = Math.floor((Math.random() * 150) + 330);
            switch (m) {
                case 0:
                    this.drawBlume_1();
                    break;
                case 1:
                    this.drawBlume_2();
                    break;
                case 2:
                    this.drawBlume_3();
                    break;
                default:
                    break;
            }
        }
        drawBlume_1() {
            //Bl�te
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#B7FF00";
            //crc2.strokeStyle = _strokeColor;
            for (var i = 0; i < 8; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 30, 4, 20, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Blumen Inneres
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#E8970C";
            L7_Classes.crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        }
        drawBlume_2() {
            //Bl�te
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#FFB59E";
            //crc2.strokeStyle = _strokeColor;
            for (var i = 0; i < 8; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 30, 2, 30, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Blumen Inneres
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#E8E589";
            L7_Classes.crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        }
        drawBlume_3() {
            //Bl�te
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#E89958";
            //crc2.strokeStyle = _strokeColor;
            for (var i = 0; i < 8; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 30, 8, 20, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Blumen Inneres
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#FFD98B";
            L7_Classes.crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        }
    }
    L7_Classes.Pflanze = Pflanze;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Pflanze.js.map