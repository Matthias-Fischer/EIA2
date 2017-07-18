namespace L7_Classes {
    export class Square {
        x: number = 0;
        y: number = 0;
        size: number = 20;
        color: string;
        xspeed: number = 0;
        yspeed: number = 0;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        
        
        eat(_pos: number): void {
            var d: number = this.x  
        
        }

        update(): void {
            this.move();
            this.draw();
        }
        
        direction(_x: number, _y: number): void {
            this.xspeed = _x;
            this.yspeed = _y;
        }

        draw(): void {
            crc2.fillStyle = "white";
            crc2.fillRect(this.x, this.y, this.size, this.size);
        }

        move(): void {
            this.x = this.x + this.xspeed;
            this.y = this.y + this.yspeed
            
            // rechts raus, links rein
            if (this.x > crc2.canvas.width) {
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
}