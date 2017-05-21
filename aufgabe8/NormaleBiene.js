var L8_Classes;
(function (L8_Classes) {
    class NormaleBiene extends L8_Classes.Biene_Superklasse {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            var img = document.getElementById("scream");
            L8_Classes.crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }
    }
    L8_Classes.NormaleBiene = NormaleBiene;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=NormaleBiene.js.map