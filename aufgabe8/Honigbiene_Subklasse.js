var L8_Classes;
(function (L8_Classes) {
    class Honigbiene_Subklasse extends L8_Classes.Biene_Superklasse {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.02;
        }
        draw() {
            var img = document.getElementById("HonigBiene");
            L8_Classes.crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }
    }
    L8_Classes.Honigbiene_Subklasse = Honigbiene_Subklasse;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=Honigbiene_Subklasse.js.map