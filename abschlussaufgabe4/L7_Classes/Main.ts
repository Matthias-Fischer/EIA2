namespace L7_Classes {
    export let crc2: CanvasRenderingContext2D;
    let rockets: Rocket[] = [];
    let comets: Comet[] = [];
    let coins: Coin[] = [];
    let gameScore: number = 0;
    let ladung: number = 0;

    let l: number = 1;
    let n: number = 15;
    let m: number = 5;
    
  

    



    window.addEventListener("load", init);


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        for (let i: number = 0; i < l; i++) {
            // Rakete erstellen
            let r: Rocket = new Rocket(80, 250);
            rockets[i] = r;
        }


        for (let i: number = 0; i < n; i++) {
            // Kometen erstellen
            let c: Comet = new Comet(Math.random() * 400, Math.random() * 600);
            comets[i] = c;
        }


        for (let i: number = 0; i < m; i++) {
            // Coins erstellen
            let cc: Coin = new Coin(Math.random() * 400, Math.random() * 600);
            coins[i] = cc;
        }

        console.log(rockets);
        console.log(comets);
        console.log(coins);
        window.setTimeout(animate, 20);
    }
    
    
    
    

    
    function animate(): void {
        
       
        
        crc2.fillStyle = "#1f1f1f";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let i: number = 0; i < n; i++) {
            let c: Comet = comets[i];
            c.update();
        }

        for (let i: number = 0; i < m; i++) {
            let cc: Coin = coins[i];
            cc.update();
        }


        for (let i: number = 0; i < l; i++) {
            let r: Rocket = rockets[i];
            r.update();
        }

         

        window.setTimeout(animate, 20);
        hitDetect(); 
    }
    
    
    

    document.onkeydown = function(_event: KeyboardEvent): void {
        for (let i: number = 0; i < l; i++) {
            let r: Rocket = rockets[i];
            var x: number = _event.keyCode;
            if (x == 32) {
                //console.log(x);
                r.up();
            }
        }
    }

    

    function hitDetect(): void {
        for (let i: number = 0; i < comets.length; i++) {
            var c: Comet = comets[i];
            var r: Rocket = rockets[i];
            var k: Coin = coins[i];

            // Rakete trifft auf Cometen
            if (r.x + r.w >= c.x && r.x <= c.x + c.w && r.y >= c.y && r.y <= c.y + c.h) {
                console.log("HIT");
                document.getElementById("overlay").style.display = "block";
            }

        }


        for (let i: number = 0; i < coins.length; i++) {

            // Rakete trifft auf Coins
            if (r.x + r.w >= k.x && r.x <= k.x + k.w && r.y >= k.y && r.y <= k.y + k.h) {
                console.log("Coin eingesammelt");
                gameScore = gameScore + 1;
                ladung = ladung + 1;
                //                console.log(gameScore);
                //                console.log(ammo);
                document.getElementById("score").textContent = "Score: " + gameScore;
                document.getElementById("final_score").textContent = "Score: " + gameScore;
                document.getElementById("ammo").textContent = "Munni: " + ladung / 10;
                if (ladung > 100) {
                    console.log("Magnetfunktion bereit");
                    document.addEventListener("click", destroyComets);
                }
            }
        }

    }


    function destroyComets(): void {
        ladung = 0;
    }



    


}
