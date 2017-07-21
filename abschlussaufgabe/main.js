var L10;
(function (L10) {
    let squares = [];
    let n = 30;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L10.crc2 = canvas.getContext("2d");
        for (let i = 0; i < n; i++) {
            let s = new L10.Square(200, 150);
            squares[i] = s;
        }
        console.log(squares);
        window.setTimeout(animate, 20);
    }
    function animate() {
        L10.crc2.fillStyle = "#ff0000";
        L10.crc2.fillRect(0, 0, L10.crc2.canvas.width, L10.crc2.canvas.height);
        for (let i = 0; i < n; i++) {
            let s = squares[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(L10 || (L10 = {}));
//# sourceMappingURL=main.js.map