document.addEventListener('DOMContentLoaded', function () {
    let stapel = ["rot", "gruen"];
    let hand = [];
    let ablagestapel = [];
    let n = stapel.length;
    document.getElementById("Rot").addEventListener("click", getRandomCard);
    document.getElementById("Gruen").addEventListener("click", getRandomCard);
    function getRandomCard() {
        var i = Math.floor((Math.random() * n) + 0);
        let ziehen = stapel[i];
        hand.push(ziehen);
        console.log(hand);
        let div = document.createElement("div");
        document.getElementById("Hand").appendChild(div);
        //div.textContent = ziehen;
        placeDiv();
        function placeDiv() {
            if (ziehen == "rot") {
                let s = div.style;
                s.cssFloat = "left";
                s.border = "2px solid black";
                s.display = "inline";
                s.textAlign = "center";
                s.fontSize = "2em";
                s.backgroundColor = "#FE2E2E";
                s.width = "4em";
                s.height = "6em";
                s.marginLeft = "1em";
                s.marginBottom = "1em";
                s.borderRadius = "10px";
            }
            else {
                let s = div.style;
                s.cssFloat = "left";
                s.border = "2px solid black";
                s.display = "inline";
                s.textAlign = "center";
                s.fontSize = "2em";
                s.backgroundColor = "#4CAF50";
                s.width = "4em";
                s.height = "6em";
                s.marginLeft = "1em";
                s.marginBottom = "1em";
                s.borderRadius = "10px";
            }
        }
    }
});
//# sourceMappingURL=Risiko.js.map