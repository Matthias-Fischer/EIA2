namespace L8_Classes {

    export class Honigbiene_Subklasse extends Biene_Superklasse {

        
        xTarget: number;
        yTarget: number;
        speed: number;



        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.02;
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("HonigBiene");
            crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }

    }
}