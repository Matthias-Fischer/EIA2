//Aufgabe: 8 - OO-Blumenwiese
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 14.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.



namespace L8_Classes {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let bienen: Biene_Superklasse[] = [];
    let n: number = 10; //Anzahl der Bienen

    export let pflanzen: Pflanze_Superklasse[] = [];
    let p: number = 6; //Anzahl feste Blumen

    let numberFlowers: number = Math.floor((Math.random() * 10) + 8);

    let imgData: ImageData;




    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");



        //Farbverlauf Himmel
        var my_gradient = crc2.createLinearGradient(0, 0, 0, 200);
        my_gradient.addColorStop(0, "#0080FF");
        my_gradient.addColorStop(1, "#81F7F3");

        crc2.fillStyle = my_gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);



        // FUNKTIONSAUFRUFE     
        drawBerg(700, 150, 100);
        drawBerg(615, 180, 50);
        drawBerg(550, 170, 80);
        drawWieseBackground("#000000", "#04B404");
        drawStamm2("#000000", "#B45F04");
        drawStamm1("#000000", "#B45F04");
        drawTanne2(175, 170, 40, "#000000", "#0B610B");
        drawTanne2(175, 150, 35, "#000000", "#0B610B");
        drawTanne2(175, 130, 30, "#000000", "#0B610B");
        drawTanne2(175, 110, 25, "#000000", "#0B610B");
        drawTanne1(125, 210, 40, "#000000", "#0B610B");
        drawTanne1(125, 190, 35, "#000000", "#0B610B");
        drawTanne1(125, 170, 30, "#000000", "#0B610B");
        drawTanne1(125, 150, 25, "#000000", "#0B610B");
        drawWieseForeground("#000000", "#00ff00");
        drawSonne("#FFBF00", "#F4FA58");
        drawWolke("white", "white");
        drawBienenkorb();
        //drawBear();
        drawAst();




//        // Hintergrund-Blumen
//        for (let i: number = 0; i < numberFlowers; i++) {
//            for (let i: number = 0; i < numberFlowers; i++) {
//                let h: Pflanze_Superklasse = new Blume1_Subklasse(0, 0);
//                let s: Pflanze_Superklasse = new Blume2_Subklasse(0, 0);
//                let g: Pflanze_Superklasse = new Blume3_Subklasse(0, 0);
//
////                h.setRandomPosition();
////                s.setRandomPosition();
////                g.setRandomPosition();
//            }
//        }




                for (let i: number = 0; i < numberFlowers; i++) {
        
                    switch (Math.floor((Math.random() * 3) + 0)) {
                        case 0:
                            new Blume1_Subklasse(0, 0);
                           break;
                        case 1:
                            new Blume2_Subklasse(0, 0);
                            break;
                        case 2:
                            new Blume3_Subklasse(0, 0);
                            break;
                        default:
                            break;
                    }
                    console.log("hallo");
                }


        imgData = crc2.getImageData(0, 0, 800, 480);


        //Blumen, die später von den bienen angeflogen werden können
        //Array
//                for (let i: number = 0; i < p; i++) {
//                    let s: Pflanze_Superklasse = new Blume1_Subklasse(Math.floor((Math.random() * 760) + 20), Math.floor((Math.random() * 150) + 330));
//                    let f: Pflanze_Superklasse = new Blume2_Subklasse(Math.floor((Math.random() * 760) + 20), Math.floor((Math.random() * 150) + 330));
//                    let g: Pflanze_Superklasse = new Blume3_Subklasse(Math.floor((Math.random() * 760) + 20), Math.floor((Math.random() * 150) + 330));
//                    pflanzen.push(s);
//                    pflanzen.push(f);
//                    pflanzen.push(g);
//                    console.log(pflanzen);
//                }

//
        for (let i: number = 0; i < 6; i++) {
            let f: Pflanze_Superklasse = new Blume1_Subklasse(0, 0);
            pflanzen.push(f);
        }
        console.log(pflanzen);




        //Bienen erstellen --> Normale Bienen
        for (let i: number = 0; i < n; i++) {
            let b: Biene_Superklasse = new NormaleBiene(690, 240);
            let c: Biene_Superklasse = new Honigbiene_Subklasse(690, 240);
            bienen.push(b);
            bienen.push(c);
        }

        window.setTimeout(animate, 20);
        console.log(bienen);

        canvas.addEventListener("click", addBiene);



    }// Ende der Init-Funktion




    function animate(_width: number, _height: number): void {

        crc2.putImageData(imgData, 0, 0);


        console.log("Animate called");

        for (let i: number = 0; i < pflanzen.length; i++) {
            let s: Pflanze_Superklasse = pflanzen[i];
            s.draw();
        }


        for (let i: number = 0; i < bienen.length; i++) {
            let s: Biene_Superklasse = bienen[i];
            s.update();
        }



        window.setTimeout(animate, 20);
    }


    function addBiene(_event: Event): void {

        let s: Biene_Superklasse = new NormaleBiene(690, 240);
        bienen.push(s);

        let n: Biene_Superklasse = new Honigbiene_Subklasse(690, 240);
        bienen.push(n);

    }




    // FUNKTIONEN Umwelt

    function drawBerg(_x: number, _y: number, _a: number): void {

        crc2.beginPath();
        crc2.moveTo(_x - _a, _y + _a);
        crc2.lineTo(_x, _y - _a);
        crc2.lineTo(_x + _a, _y + _a);
        var my_gradient = crc2.createLinearGradient(0, 0, 0, 200);
        my_gradient.addColorStop(0, "white");
        my_gradient.addColorStop(1, "gray");
        crc2.fillStyle = my_gradient;
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawWieseBackground(_strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(0, 480);
        crc2.lineTo(0, 200);
        crc2.lineTo(800, 300);
        crc2.lineTo(800, 480);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawStamm2(_strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.rect(170, 200, 10, 50);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    function drawStamm1(_strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.rect(120, 240, 10, 60);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    function drawTanne2(_x: number, _y: number, _a: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - _a, _y + _a);
        crc2.lineTo(_x, _y - _a);
        crc2.lineTo(_x + _a, _y + _a);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawTanne1(_x: number, _y: number, _a: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - _a, _y + _a);
        crc2.lineTo(_x, _y - _a);
        crc2.lineTo(_x + _a, _y + _a);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawWieseForeground(_strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(0, 480);
        crc2.lineTo(0, 300);
        crc2.lineTo(800, 200);
        crc2.lineTo(800, 480);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawSonne(_strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(70, 70, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawWolke(_strokeColor: string, _fillColor: string): void {
        // 1.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(500, 150, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 2.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(515, 150, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 3.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(530, 150, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 4.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(545, 150, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 5.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(507, 140, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 6.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(523, 140, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 7.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(538, 140, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 8.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(507, 160, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 9.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(523, 160, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // 10.Kreis
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.beginPath();
        crc2.arc(538, 160, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }


    function drawBienenkorb() {
        var img = <HTMLImageElement>document.getElementById("korb");
        crc2.drawImage(img, 650, 182);
    }

    //    function drawBear() {
    //        var img = document.getElementById("Bear");
    //        crc2.drawImage(img, 450, 150);
    //    }


    function drawAst() {
        var img = <HTMLImageElement>document.getElementById("ast");
        crc2.drawImage(img, 610, 150);
    }
}