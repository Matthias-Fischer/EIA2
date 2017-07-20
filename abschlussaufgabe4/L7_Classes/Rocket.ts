namespace L7_Classes {
    export class Rocket {

        x: number = 0;
        y: number = 0;
        w: number = 20;
        h: number = 20;
        size: number = 100;

        gravity: number = 0.8;
        lift: number = -15;
        velocity: number = 0;
        
   


        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            crc2.fillStyle = "green";
            crc2.fillRect(this.x, this.y, this.w, this.h);
       
//            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("Bird");
//            crc2.drawImage(img, this.x, this.y, this.size, this.size);
//            console.log("Image gemalt");
        }

        update(): void {
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


        up(): void {
            this.velocity += this.lift;
        }
        
        end(): void {
            this.x = -100; 
            this.y = 0; 
        }




    }

}