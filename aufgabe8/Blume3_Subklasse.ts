namespace L8_Classes {
    
    export class Blume3_Subklasse extends Pflanze_Superklasse {
        
        constructor(_x: number, _y: number) {
            super(_x, _y);
            
        }
        
        draw(): void {
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#E89958";
            //crc2.strokeStyle = _strokeColor;
            for (var i: number = 0; i < 8; i++) {
                crc2.ellipse(this.x + 1.2, this.y - 30, 8, 20, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.closePath();
            crc2.fill();
            //Blumen Inneres
            crc2.beginPath();
            crc2.fillStyle = "#FFD98B";
            crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

        
    }

    
}