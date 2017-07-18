namespace L7_Classes {
    export class Square {
        x: number = 0;
        y: number = 0;
        size: number = 20;
        color: string;
        xspeed: number = 0;
        yspeed: number = 0;
        scale: number = 20;

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
            crc2.fillRect(this.x, this.y, this.scale, this.scale);
        }

        move(): void {
            this.x = this.x + this.xspeed;
            this.y = this.y + this.yspeed;
            
            
            // rechts raus, links rein
            if (this.x > 780) {
                this.x = 780;
            }
            // links raus, rechts rein
            if (this.x < 0) {
                this.x = 0;
            }

            //oben raus, unten rein   
            if (this.y < 0) {
                this.y = 0;
            }

            //unten raus, oben rein   
            if (this.y > 780) {
                this.y = 780;
            }
        }


    }
}