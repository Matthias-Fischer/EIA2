namespace L7_Classes {

    export class Pflanze {

        x: number;
        y: number;
        strokeColor: string;
        fillColor: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        blumeRandomPosition(): void {

            let l: number = Math.floor((Math.random() * 3) + 0);
            this.y = Math.floor((Math.random() * 200) + 280);
            this.y = Math.floor((Math.random() * 3) + 0);

            switch (l) {
                case 0:
                    this.drawBlume_1();
                    break;
                case 1:
                    this.drawBlume_2();
                    break;
                case 2:
                    this.drawBlume_3();
                    break;
                default:
                    break;
            }
        }


        drawBlume_1(): void {

            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "red";
            //crc2.strokeStyle = _strokeColor;
            for (var i: number = 0; i < 8; i++) {
                crc2.ellipse(this.x + 1.2, this.y - 30, 4, 20, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.closePath();
            crc2.fill();
            //Blumen Inneres
            crc2.beginPath();
            crc2.fillStyle = "#FF0040";
            crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

        drawBlume_2(): void {
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "black";
            //crc2.strokeStyle = _strokeColor;
            for (var i: number = 0; i < 8; i++) {
                crc2.ellipse(this.x + 1.2, this.y - 30, 2, 30, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.closePath();
            crc2.fill();
            //Blumen Inneres
            crc2.beginPath();
            crc2.fillStyle = "orange";
            crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

        drawBlume_3(): void {
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#DF5AC3";
            //crc2.strokeStyle = _strokeColor;
            for (var i: number = 0; i < 8; i++) {
                crc2.ellipse(this.x + 1.2, this.y - 30, 8, 20, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.closePath();
            crc2.fill();
            //Blumen Inneres
            crc2.beginPath();
            crc2.fillStyle = "#DBA901";
            crc2.arc(this.x + 1.2, this.y - 30, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
        
        
    }
}