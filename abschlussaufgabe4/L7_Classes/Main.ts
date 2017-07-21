namespace L7_Classes {
    export let crc2: CanvasRenderingContext2D;
    let rockets: Rocket[] = [];
    let comets: Comet[] = [];
    let coins: Coin[] = [];
    let gameScore: number = 0;
    let ladung: number = 0;

    let l: number = 1;
    let n: number = 5;
    let m: number = 5;

    window.addEventListener("load", init);
    
    document.addEventListener("click", ausweichen);


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

        crc2.fillStyle = "SlateGrey";
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
    
    function ausweichen(): void {
         for (let i: number = 0; i < l; i++) {
            let r: Rocket = rockets[i];
                r.up();
            }
        }  
    }    



    function hitDetect(): void {



        for (let i: number = 0; i < comets.length; i++) {
            var c: Comet = comets[i];
            var r: Rocket = rockets[0];
            var k: Coin = coins[i];

            // Rakete trifft auf Cometen
            if (r.x + r.w >= c.x && r.x <= c.x + c.w && r.y + 20 >= c.y && r.y <= c.y + c.h) {
                console.log("HIT");
                document.getElementById("overlay").style.display = "block";
                r.end();
                play4();
                play5();

            }

        }

        //        function play() {
        //            var audio = document.getElementById("audio");
        //            audio.play(); }

        function play2() {
            var audio = document.getElementById("audio2");
            audio.play();
        }

        function play4() {
            var audio = document.getElementById("audio4");
            audio.play();
        }

        function play5() {
            var audio = document.getElementById("audio5");
            audio.play();
        }


        for (let i: number = 0; i < coins.length; i++) {

            var r: Rocket = rockets[0];
            var k: Coin = coins[i];
            var c: Comet = comets[i];

            // Rakete trifft auf Coins
            if (r.x + r.w >= k.x - k.radius && r.x <= k.x + k.radius && r.y + 20 >= k.y - k.radius && r.y <= k.y + k.radius) {
                k.changePosition();
                console.log("Coin eingesammelt");
                gameScore = gameScore + 1;
                ladung = ladung + 1;
                play2();

                //Wenn 10 Punkte erreicht wurde, erhöht sich die Kometenanzahl um 1
                if (gameScore % 2 == 0) {
                    comets.push(c);
                    console.log(comets.length);
                    n = n + 1;
                }

                if (ladung >= 5) {
                    document.getElementById("ammo").style.backgroundColor = "red";
                    document.getElementById("ammo").addEventListener("click", destroyComets);
                }

                document.getElementById("score").textContent = "Score: " + gameScore;
                document.getElementById("final_score").textContent = "Score: " + gameScore;
                document.getElementById("ammo").textContent = "Munni: " + ladung;


                //                if (ladung > 100) {
                //                    console.log("Magnetfunktion bereit");
                //                    document.addEventListener("click", destroyComets);
                //                }
            }
        }

    }


    function destroyComets(): void {
        ladung = 0;
        console.log("Jetzt");
        document.getElementById("ammo").style.backgroundColor = "black";
    }


}
