var L7_Classes;
(function (L7_Classes) {
    class Food {
        constructor(_x, _y) {
            this.size = 20;
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
        }
        draw() {
            L7_Classes.crc2.fillStyle = "red";
            L7_Classes.crc2.fillRect(this.x, this.y, this.size, this.size);
        }
    }
    L7_Classes.Food = Food;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=food.js.map