var L7_Classes;
(function (L7_Classes) {
    let rockets = [];
    let comets = [];
    let coins = [];
    let gameScore = 1;
    let ladung = 0;
    let l = 1;
    let n = 15;
    let m = 5;
    var state = true;
    let imgData;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L7_Classes.crc2 = canvas.getContext("2d");
        imgData = L7_Classes.crc2.getImageData(0, 0, 400, 600);
        for (let i = 0; i < l; i++) {
            // Rakete erstellen
            let r = new L7_Classes.Rocket(80, 250);
            rockets[i] = r;
        }
        for (let i = 0; i < n; i++) {
            // Kometen erstellen
            let c = new L7_Classes.Comet(Math.random() * 400, Math.random() * 600);
            comets[i] = c;
        }
        for (let i = 0; i < m; i++) {
            // Coins erstellen
            let cc = new L7_Classes.Coin(Math.random() * 400, Math.random() * 600);
            coins[i] = cc;
        }
        console.log(rockets);
        console.log(comets);
        console.log(coins);
        window.setTimeout(animate, 20);
    }
    function animate() {
        L7_Classes.crc2.putImageData(imgData, 0, 0);
        L7_Classes.crc2.fillStyle = "SlateGrey";
        L7_Classes.crc2.fillRect(0, 0, L7_Classes.crc2.canvas.width, L7_Classes.crc2.canvas.height);
        for (let i = 0; i < n; i++) {
            let c = comets[i];
            c.update();
        }
        for (let i = 0; i < m; i++) {
            let cc = coins[i];
            cc.update();
        }
        for (let i = 0; i < l; i++) {
            let r = rockets[i];
            r.update();
        }
        window.setTimeout(animate, 20);
        hitDetect();
    }
    document.onkeydown = function (_event) {
        for (let i = 0; i < l; i++) {
            let r = rockets[i];
            var x = _event.keyCode;
            if (x == 32) {
                //console.log(x);
                r.up();
            }
        }
    };
    function hitDetect() {
        for (let i = 0; i < comets.length; i++) {
            var c = comets[i];
            var r = rockets[0];
            var k = coins[i];
            // Rakete trifft auf Cometen
            if (r.x + r.w >= c.x && r.x <= c.x + c.w && r.y + 20 >= c.y && r.y <= c.y + c.h) {
                console.log("HIT");
                document.getElementById("overlay").style.display = "block";
                // c.bombExplosion();
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
        for (let i = 0; i < coins.length; i++) {
            var r = rockets[0];
            var k = coins[i];
            var c = comets[i];
            // Rakete trifft auf Coins
            if (r.x + r.w >= k.x - k.radius && r.x <= k.x + k.radius && r.y + 20 >= k.y - k.radius && r.y <= k.y + k.radius) {
                k.changePosition();
                console.log("Coin eingesammelt");
                gameScore = gameScore + 1;
                ladung = ladung + 1;
                play2();
                //Wenn 10 Punkte erreicht wurde, erh�ht sich die Kometenanzahl um 1
                if (gameScore == 10) {
                    comets.push(c);
                    console.log(c);
                    console.log(comets);
                    console.log("Bombe");
                    n + 10;
                    c.bombExplosion();
                }
                if (ladung >= 5) {
                    document.getElementById("ammo").style.backgroundColor = "red";
                    document.getElementById("ammo").addEventListener("click", destroyComets);
                }
                document.getElementById("score").textContent = "Score: " + gameScore;
                document.getElementById("final_score").textContent = "Score: " + gameScore;
                document.getElementById("ammo").textContent = "Munni: " + ladung;
            }
        }
    }
    function destroyComets() {
        ladung = 0;
        console.log("Jetzt");
        document.getElementById("ammo").style.backgroundColor = "black";
    }
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Main.js.map