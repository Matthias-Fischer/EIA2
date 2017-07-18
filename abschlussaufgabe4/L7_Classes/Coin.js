var L7_Classes;
(function (L7_Classes) {
    class Coin {
        constructor(_x, _y) {
            this.w = 20;
            this.h = 20;
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.move();
        }
        draw() {
            L7_Classes.crc2.fillStyle = "yellow";
            L7_Classes.crc2.fillRect(this.x, this.y, this.h, this.w);
        }
        move() {
            this.x += -1.3;
            if (this.x < -20) {
                this.x = 400;
                this.y = Math.random() * 600;
            }
        }
    }
    L7_Classes.Coin = Coin;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Coin.js.map