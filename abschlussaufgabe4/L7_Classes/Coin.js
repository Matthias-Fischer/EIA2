var L7_Classes;
(function (L7_Classes) {
    class Coin {
        constructor(_x, _y) {
            this.w = 20;
            this.h = 20;
            this.radius = 12;
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
            //crc2.fillRect(this.x, this.y, this.h, this.w);
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            L7_Classes.crc2.fill();
            L7_Classes.crc2.strokeStyle = "black";
            L7_Classes.crc2.closePath();
        }
        move() {
            this.x += -1.7;
            if (this.x + this.radius < 0) {
                this.x = 400 + this.radius;
                this.y = Math.random() * 600;
            }
        }
        changePosition() {
            this.x = 400;
            this.y = Math.random() * 600;
        }
        faster() {
            this.x += -2.3;
        }
    }
    L7_Classes.Coin = Coin;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Coin.js.map