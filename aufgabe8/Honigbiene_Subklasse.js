var L8_Classes;
(function (L8_Classes) {
    class Honigbiene_Subklasse extends L8_Classes.Biene_Superklasse {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.02;
            this.setStartPosition();
            this.setRandomTargetPosition();
        }
        //getting the coordinates of a random special flower (target)
        setRandomTargetPosition() {
            let randomtargetflower = Math.round(Math.random() * (L8_Classes.pflanzen.length - 1));
            this.xTarget = L8_Classes.pflanzen[randomtargetflower].x;
            this.yTarget = L8_Classes.pflanzen[randomtargetflower].y;
        }
        setStartPosition() {
            this.x = 690;
            this.y = 240;
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        draw() {
            var img = document.getElementById("HonigBiene");
            L8_Classes.crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }
    }
    L8_Classes.Honigbiene_Subklasse = Honigbiene_Subklasse;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=Honigbiene_Subklasse.js.map