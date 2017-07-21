//Aufgabe: 12 - Abschlussaufgabe
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 21.07.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    let rockets = [];
    let comets = [];
    let coins = [];
    let gameScore = 0;
    let l = 1;
    let n = 8;
    let m = 5;
    window.addEventListener("load", init);
    alert("Herzlich Willkommen bei >>PixelStorm<< " +
        "Falls Du die Anleitung noch nicht gelesen haben solltest, hier nochmal eine kurze Erklärung: Auf Computern steuerst du die Rakete durch Klicken auf den Bildschirm " +
        "(hoch/runter automatisch), auf Touch-Devices durch tippen. Pralle nicht mit den Kometen zusammen und sammle so viel Münzen wie möglich! Let's Go!");
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L7_Classes.crc2 = canvas.getContext("2d");
        document.addEventListener("click", ausweichen);
        document.addEventListener("touch", ausweichen);
        var my_gradient = L7_Classes.crc2.createLinearGradient(0, 0, 0, 200);
        my_gradient.addColorStop(0, "#0080FF");
        my_gradient.addColorStop(1, "#81F7F3");
        L7_Classes.crc2.fillStyle = my_gradient;
        L7_Classes.crc2.fillRect(0, 0, canvas.width, canvas.height);
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
        //        crc2.fillStyle = "black";
        //        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        var my_gradient = L7_Classes.crc2.createLinearGradient(0, 0, 0, 200);
        my_gradient.addColorStop(0, "#0080FF");
        my_gradient.addColorStop(1, "#81F7F3");
        L7_Classes.crc2.fillStyle = my_gradient;
        L7_Classes.crc2.fillRect(0, 0, 400, 600);
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
    function ausweichen() {
        for (let i = 0; i < l; i++) {
            let r = rockets[i];
            r.up();
        }
    }
    function hitDetect() {
        for (let i = 0; i < comets.length; i++) {
            var c = comets[i];
            var r = rockets[0];
            var k = coins[i];
            // Rakete trifft auf Cometen
            if (r.x + r.w >= c.x && r.x <= c.x + c.w && r.y + 20 >= c.y && r.y <= c.y + c.h) {
                console.log("HIT");
                document.getElementById("overlay").style.display = "block";
                r.end();
                play4();
                play5();
            }
        }
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
                play2();
                //Wenn 5 Punkte erreicht wurde, erh�ht sich die Kometenanzahl um 1
                if (gameScore % 5 == 0) {
                    console.log(comets.length);
                    // nun sollte ein neuer Komet gezeichnet werden
                    let c = new L7_Classes.Comet(-10, Math.random() * 600);
                    comets.push(c);
                    n++;
                }
                document.getElementById("score").textContent = "Score: " + gameScore;
                document.getElementById("final_score").textContent = "Score: " + gameScore;
                document.getElementById("Enemy").textContent = "Kometen: " + comets.length;
            }
        }
    }
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Main.js.map