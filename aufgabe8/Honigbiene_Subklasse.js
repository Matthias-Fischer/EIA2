var L8_Classes;
(function (L8_Classes) {
    class Honigbiene_Subklasse extends L8_Classes.Biene_Superklasse {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.02;
            //   this.setTargetPosition()   
            //  this.setTargetBienenstock();
        }
        draw() {
            var img = document.getElementById("Honigbiene");
            L8_Classes.crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }
        //
        //        setTargetPosition(): void {
        //            //            this.xTarget = Math.random() * crc2.canvas.width;
        //            //            this.yTarget = Math.random() * crc2.canvas.height;
        //            let x: number = Math.round(Math.random() * (pflanzen.length - 1));
        //
        //            this.xTarget = pflanzen[x].x - 6;
        //            this.yTarget = pflanzen[x].y - 45;
        //        }
        setTargetBienenstock() {
            this.xTarget = 720;
            this.yTarget = 280;
        }
    }
    L8_Classes.Honigbiene_Subklasse = Honigbiene_Subklasse;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=Honigbiene_Subklasse.js.map