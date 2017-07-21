var L7_Classes;
(function (L7_Classes) {
    class Square {
        constructor(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.size = 20;
            this.xspeed = 0;
            this.yspeed = 0;
            this.x = _x;
            this.y = _y;
        }
        eat(_pos) {
            var d = this.x;
        }
        update() {
            this.move();
            this.draw();
        }
        direction(_x, _y) {
            this.xspeed = _x;
            this.yspeed = _y;
        }
        draw() {
            L7_Classes.crc2.fillStyle = "white";
            L7_Classes.crc2.fillRect(this.x, this.y, this.size, this.size);
        }
        move() {
            this.x = this.x + this.xspeed;
            this.y = this.y + this.yspeed;
            // rechts raus, links rein
            if (this.x > L7_Classes.crc2.canvas.width) {
                this.x = 0;
            }
            // links raus, rechts rein
            if (this.x < 0) {
                this.x = 800;
            }
            //oben raus, unten rein   
            if (this.y < 0) {
                this.y = 800;
            }
            //unten raus, oben rein   
            if (this.y > 800) {
                this.y = 0;
            }
        }
    }
    L7_Classes.Square = Square;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Square.js.map