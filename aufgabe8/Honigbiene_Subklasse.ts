namespace L8_Classes {

    export class Honigbiene_Subklasse extends Biene_Superklasse {

        //        targetX: number;
        //        targetY: number;
        //        status: string;
        //        breakcounter: number;
        //
        //        constructor(_x: number, _y: number) {
        //            super(_x, _y);
        //            this.setRandomTarget();
        //            this.status = "fly";
        //            this.breakcounter = 0;
        //            super.draw();
        //        }
        //
        //        setRandomTarget(): void {
        //            let i: number = Math.floor(Math.random() * (pflanzen.length - 1));
        //            this.targetX = pflanzen[i].x;
        //            this.targetY = pflanzen[i].y;
        //        }
        //
        //        update(): void {
        //            this.move();
        //            super.draw();
        //        }
        //
        //        move(): void {
        //            if (this.status == "fly") {
        //                this.x += Math.floor(Math.random() * 8) - 4;
        //                this.y += (this.targety - this.y) * 0.05;
        //                // Wieder Erscheinen beim Verlassen des Canvas
        //                if (this.x < 0) {
        //                    this.x = canvas.width;
        //                }
        //                if (this.y < 0) {
        //                    this.y = canvas.height;
        //                }
        //                if (this.y > canvas.height) {
        //                    this.y = 0;
        //                }
        //                if ((this.targetx - this.x < 12 && this.targetx - this.x > -12) && (this.targety - this.y < 12 && this.targety - this.y > -12)) {
        //                    this.stpause";
        //                }
        //            }
        //            else {
        //                this.breakcounter += 1;
        //                if (this.breakcounter % 50 == 0) {
        //                    this.setRandomTarget();
        //                    this.status = "fly";
        //                }
        //            }
        //
        //        }
        
        xTarget: number;
        yTarget: number;
        speed: number;



        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.02;
            //   this.setTargetPosition()   
            //  this.setTargetBienenstock();
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("Honigbiene");
            crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }

        //
        //        setTargetPosition(): void {
        //            //            this.xTarget = Math.random() * crc2.canvas.width;
        //            //            this.yTarget = Math.random() * crc2.canvas.height;
        //            let x: number = Math.round(Math.random() * (pflanzen.length - 1));
        //
        //            this.xTarget = pflanzen[x].x - 6;
        //            this.yTarget = pflanzen[x].y - 45;
        //        }

        setTargetBienenstock(): void {
            this.xTarget = 720;
            this.yTarget = 280;


        }

    }
}