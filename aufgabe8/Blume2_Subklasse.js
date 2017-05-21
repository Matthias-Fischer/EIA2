var L8_Classes;
(function (L8_Classes) {
    class Blume2_Subklasse extends L8_Classes.Pflanze_Superklasse {
        constructor(_x, _y) {
            super(_x, _y);
            this.draw();
        }
        draw() {
            //Bl�te
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "#FFB59E";
            //crc2.strokeStyle = _strokeColor;
            for (var i = 0; i < 8; i++) {
                L8_Classes.crc2.ellipse(this.x + 1.2, this.y - 30, 2, 30, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            //Blumen Inneres
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "#E8E589";
            L8_Classes.crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
        }
    }
    L8_Classes.Blume2_Subklasse = Blume2_Subklasse;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=Blume2_Subklasse.js.map