var L7_Classes;
(function (L7_Classes) {
    class Rocket {
        constructor(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.w = 20;
            this.h = 20;
            this.size = 100;
            this.gravity = 0.8;
            this.lift = -15;
            this.velocity = 0;
            this.x = _x;
            this.y = _y;
        }
        draw() {
            L7_Classes.crc2.fillStyle = "red";
            L7_Classes.crc2.fillRect(this.x, this.y, this.w, this.h);
            //            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("Bird");
            //            crc2.drawImage(img, this.x, this.y, this.size, this.size);
            //            console.log("Image gemalt");
        }
        update() {
            this.draw();
            this.velocity += this.gravity;
            this.velocity *= 0.9;
            this.y += this.velocity;
            if (this.y > 580) {
                document.getElementById("overlay").style.display = "block";
            }
            if (this.y < 0) {
                document.getElementById("overlay").style.display = "block";
            }
        }
        up() {
            this.velocity += this.lift;
        }
    }
    L7_Classes.Rocket = Rocket;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Rocket.js.map