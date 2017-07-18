namespace L7_Classes {
    export class Food {
        x: number;
        y: number;
        size: number = 20;

        constructor(_x: number, _y: number) {
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.draw();
        }

        draw(): void {
            crc2.fillStyle = "red";
            crc2.fillRect(this.x, this.y, this.size, this.size);
        }

//        setRandomPosition(): void {
//            this.x = Math.random() * 200;
//            this.y = Math.random() * 200;
//        }

    }
}