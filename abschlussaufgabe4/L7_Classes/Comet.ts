namespace L7_Classes {
    export class Comet {
        
        x: number;
        y: number;
        w: number = 20;
        h: number = 20;
        state: boolean = true;
       

        constructor(_x: number, _y: number) {
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.draw();
            this.move();
        }

        draw(): void {
            crc2.fillStyle = "green";
            crc2.fillRect(this.x, this.y, this.h, this.w);
        }
        
        move(): void {
            this.x += -1.7;
//            
//            if (super.gameScore == 100) {
//                this.x += -5;    
//            }
            
            if (this.x < -20) {
                this.x = 400;
                this.y = Math.random() * 600;
            }     
            
        }
        
        
        
        
        
        
        
        }

    }
