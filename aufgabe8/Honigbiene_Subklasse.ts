namespace L8_Classes {

    export class Honigbiene_Subklasse extends Biene_Superklasse {


        xTarget: number;
        yTarget: number;
        speed: number;



        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.02;
            this.setRandomTargetPosition();
        }
        
        
        
        // Koordinaten der Ziel-Blume
        
        setRandomTargetPosition(): void {
            let randomtargetflower: number = Math.round(Math.random() * (pflanzen.length - 1));
            this.xTarget = pflanzen[randomtargetflower].x;
            this.yTarget = pflanzen[randomtargetflower].y;
}

        
        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
}
        
        

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("HonigBiene");
            crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }

    }
}