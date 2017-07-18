namespace L7_Classes {
    export let crc2: CanvasRenderingContext2D;
    let squares: Square[] = [];
    let food: Food[] = [];
    let n: number = 1;
    var scale: number = 20;

    window.addEventListener("load", init);

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        for (let i: number = 0; i < n; i++) {
            let s: Square = new Square(0, 0);
            squares[i] = s;
            let f: Food = new Food(Math.random() * 800, Math.random() * 800);
            food[i] = f;
            
        }
        console.log(squares);
        console.log(food);
        window.setTimeout(animate, 20);
    }

    
    
                            
//             if (squares[i].x + 100 == food[i].x + 100 && squares[i].y + 100 == food[i].y + 100) {
//             let f: Food = new Food(Math.random() * 800, Math.random() * 800);
//            food[i] = f; 
     //            console.log("neues food erstellen");  
//    }
//    
//    
    
    
    document.onkeydown = function(_event: KeyboardEvent): void {
        for (let i: number = 0; i < n; i++) {
            let s: Square = squares[i];

            var x: number = _event.keyCode;
            if (x == 37) {  // links
                console.log(x);
                s.direction(-4, 0);
            }
            if (x == 39) {  // rechts
                console.log(x);
                s.direction(4, 0);
            }
            if (x == 38) {  // oben
                console.log(x);
                s.direction(0, -4);
            }
            if (x == 40) {  // unten
                console.log(x);
                s.direction(0, 4);
            }
                        
        }
    }

   


    function animate(): void {
        crc2.fillStyle = "grey";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let i: number = 0; i < n; i++) {
            let s: Square = squares[i];
            s.update();
            let f: Food = food[i];
            f.update();
            

            
        }

        window.setTimeout(animate, 20);
    }
}
