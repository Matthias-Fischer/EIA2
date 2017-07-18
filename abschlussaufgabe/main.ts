namespace L10 {
    export let crc2: CanvasRenderingContext2D;
    let squares: Square[] = [];
    let n: number = 30;

    window.addEventListener("load", init);

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        for (let i: number = 0; i < n; i++) {
            let s: Square = new Square(200, 150);
            squares[i] = s;
        }
        console.log(squares);
        window.setTimeout(animate, 20);
    }

    function animate(): void {
        crc2.fillStyle = "#ff0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let i: number = 0; i < n; i++) {
            let s: Square = squares[i];
            s.update();
        }

        window.setTimeout(animate, 20);
    }
}
