var L7_Classes;
(function (L7_Classes) {
    class Pflanze {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        blumeRandomPosition() {
            let l = Math.floor((Math.random() * 3) + 0);
            this.y = Math.floor((Math.random() * 200) + 280);
            this.y = Math.floor((Math.random() * 3) + 0);
            switch (l) {
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
            L7_Classes.crc2.fillStyle = "red";
            //crc2.strokeStyle = _strokeColor;
            for (var i = 0; i < 8; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 30, 4, 20, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Blumen Inneres
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#FF0040";
            L7_Classes.crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        }
        drawBlume_2() {
            //Bl�te
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "black";
            //crc2.strokeStyle = _strokeColor;
            for (var i = 0; i < 8; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 30, 2, 30, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Blumen Inneres
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "orange";
            L7_Classes.crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        }
        drawBlume_3() {
            //Bl�te
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#DF5AC3";
            //crc2.strokeStyle = _strokeColor;
            for (var i = 0; i < 8; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 30, 8, 20, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Blumen Inneres
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#DBA901";
            L7_Classes.crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        }
    }
    L7_Classes.Pflanze = Pflanze;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Pflanze.js.map