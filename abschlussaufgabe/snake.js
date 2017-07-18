var L10;
(function (L10) {
    class Square {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            L10.crc2.fillStyle = this.color;
            L10.crc2.fillRect(this.x, this.y, this.size, this.size);
        }
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        setRandomPosition() {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    L10.Square = Square;
})(L10 || (L10 = {}));
//# sourceMappingURL=snake.js.map