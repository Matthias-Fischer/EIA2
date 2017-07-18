var L7_Classes;
(function (L7_Classes) {
    let squares = [];
    let food = [];
    let n = 1;
    var scale = 20;
    var width = 800;
    var height = 800;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L7_Classes.crc2 = canvas.getContext("2d");
        for (let i = 0; i < n; i++) {
            let s = new L7_Classes.Square(0, 0);
            squares[i] = s;
            let f = new L7_Classes.Food(Math.random() * 800, Math.random() * 800);
            food[i] = f;
        }
        console.log(squares);
        console.log(food);
        eatFood();
        window.setTimeout(animate, 80);
    }
    document.onkeydown = function (_event) {
        for (let i = 0; i < n; i++) {
            let s = squares[i];
            var x = _event.keyCode;
            if (x == 37) {
                //console.log(x);
                s.direction(-4, 0);
            }
            if (x == 39) {
                //console.log(x);
                s.direction(4, 0);
            }
            if (x == 38) {
                //console.log(x);
                s.direction(0, -4);
            }
            if (x == 40) {
                //console.log(x);
                s.direction(0, 4);
            }
        }
    };
    function animate() {
        L7_Classes.crc2.fillStyle = "grey";
        L7_Classes.crc2.fillRect(0, 0, L7_Classes.crc2.canvas.width, L7_Classes.crc2.canvas.height);
        for (let i = 0; i < n; i++) {
            let s = squares[i];
            s.update();
            let f = food[i];
            f.update();
        }
        window.setTimeout(animate, 80);
    }
    function eatFood() {
        for (let i = 0; i < n; i++) {
            if (squares[i].x == food[i].x && squares[i].y == food[i].y) {
                //                let f: Food = new Food(Math.random() * 800, Math.random() * 800);
                //                food[i] = f;
                //                console.log("neues food erstellen");
                alert("Gleiche Position");
            }
        }
    }
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Main.js.map