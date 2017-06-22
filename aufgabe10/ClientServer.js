var ClientServer;
(function (ClientServer) {
    window.addEventListener("load", init);
    let sorts = ["Vanille", "Schokolade", "Erdbeere", "Haselnuss", "Joghurt", "Banane", "Zitrone"];
    let toppings = ["Sahne", "Schokososse", "Streusel"];
    let containers = ["Becher", "Waffel"];
    let delivery = ["Abholung", "Lieferung"];
    let fieldset;
    let fieldsetToppings;
    let Eissorten;
    let Toppings;
    let Delivery;
    let Bestellung;
    let Warenkorb;
    let Darreichungsform;
    let toppingPreis = 0;
    let inputsEis = [];
    let inputsToppings = [];
    let inputsDarreichung = [];
    let inputsDelivery = [];
    function init() {
        Eissorten = document.getElementById("Eissorten");
        Toppings = document.getElementById("Toppings");
        Darreichungsform = document.getElementById("Darreichungsform");
        Delivery = document.getElementById("Lieferung");
        Warenkorb = document.getElementById("Warenkorb");
        Bestellung = document.getElementById("BestellungAbschicken");
        createAuswahlDerProdukte();
        Eissorten.addEventListener("change", change);
        Toppings.addEventListener("change", change);
        Darreichungsform.addEventListener("change", change);
        Delivery.addEventListener("change", change);
        Bestellung.addEventListener("click", BestellungAbschicken);
    }
    function BestellungAbschicken() {
        let Korrektur = ["Bitte ueberpruefen/ergaenzen Sie folgende Eingaben: \n"];
        let Vorname = document.getElementById("Vorname");
        let Nachname = document.getElementById("Nachname");
        let Strasse = document.getElementById("Strasse");
        let PLZ = document.getElementById("PLZ");
        let Ort = document.getElementById("Ort");
        let Mail = document.getElementById("Mail");
        let Telefon = document.getElementById("Telefon");
        if (Vorname.validity.valid == false)
            Korrektur.push("Vorname \n");
        if (Nachname.validity.valid == false)
            Korrektur.push("Nachname \n");
        if (Strasse.validity.valid == false)
            Korrektur.push("Stra�e \n");
        if (PLZ.validity.valid == false)
            Korrektur.push("Postleitzahl \n");
        if (Ort.validity.valid == false)
            Korrektur.push("Ort \n");
        if (Mail.validity.valid == false)
            Korrektur.push("Email-Adresse \n");
        if (Telefon.validity.valid == false)
            Korrektur.push("Telefonnummer \n");
        let Eiskugeln = 0;
        let Darbietung = 0;
        let Delivery = 0;
        let Toppings = 0;
        //Es wurde keine Eissorte ausgew�hlt
        for (let i = 0; i < inputsEis.length; i++) {
            if (parseInt(inputsEis[i].value) > 0)
                Eiskugeln += 1;
        }
        if (Eiskugeln == 0)
            Korrektur.push("Sie haben keine Eissorte ausgewhlt \n");
        //Es wurde keine Darreichungsform ausgew�hlt
        for (let i = 0; i < inputsDarreichung.length; i++) {
            if (inputsDarreichung[i].checked)
                Darbietung += 1;
        }
        if (Darbietung == 0)
            Korrektur.push("Das Eis kann leider nicht in Luft verpackt werden \n");
        //Es wurde keine Lieferart ausgew�hlt
        for (let i = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[i].checked)
                Delivery += 1;
        }
        if (Delivery == 0)
            Korrektur.push("Es wurde keine Lieferart ausgewaehlt \n");
        //Es wurden keine Toppings ausgew�hlt
        for (let i = 0; i < inputsToppings.length; i++) {
            if (inputsToppings[i].checked)
                Toppings += 1;
        }
        if (Toppings == 0)
            Korrektur.push("Wollen Sie wirklich keines unserer leckeren Toppings probieren? \n");
        if (Korrektur.length > 1) {
            for (let i = 0; i < Korrektur.length; i++)
                Korrektur.push;
            alert(Korrektur.join(""));
        }
        else {
            alert("Vielen Dank f�r Ihre Bestellung! Diese wird nun bearbeitet!");
            location.reload();
        }
    }
    function createAuswahlDerProdukte() {
        for (let i = 0; i < sorts.length; i++) {
            createInput(sorts[i]);
        }
        for (let i = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (let i = 0; i < containers.length; i++) {
            createRadio(containers[i]);
        }
        for (let i = 0; i < delivery.length; i++) {
            createRadio2(delivery[i]);
        }
    }
    function createInput(_sort) {
        // Stepper f�r Eissorte und Anzahl
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _sort;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "BLAAAA";
        input.name = _sort;
        label.id = _sort;
        Eissorten.appendChild(label);
        inputsEis.push(input);
    }
    function createCheckbox(_topping) {
        // Checkboxen f�r Toppings
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _topping;
        label.appendChild(input);
        // Die Art des Inputs wird �ber den Typ definiert
        input.type = "checkbox";
        input.name = "topping";
        input.value = _topping;
        label.id = _topping;
        Toppings.appendChild(label);
        inputsToppings.push(input);
    }
    function createRadio(_darbietung) {
        // Radiobuttons f�r Art der Darbietung
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _darbietung;
        label.appendChild(input);
        // Die Art des Inputs wird �ber den Typ definiert
        input.type = "radio";
        input.name = "darbietung";
        input.value = _darbietung;
        input.required = true;
        label.id = _darbietung;
        Darreichungsform.appendChild(label);
        inputsDarreichung.push(input);
    }
    function createRadio2(_delivery) {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszul�sen
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _delivery;
        label.appendChild(input);
        // Die Art des Inputs wird �ber den Typ definiert
        input.type = "radio";
        input.name = "delivery";
        input.value = _delivery;
        input.required = true;
        label.id = _delivery;
        Delivery.appendChild(label);
        inputsDelivery.push(input);
    }
    // Sobald �nderungen auftreten, neue Werte summieren
    function change() {
        let sum = 0;
        for (let i = 0; i < inputsEis.length; i++) {
            sum += parseInt(inputsEis[i].value);
        }
        for (let i = 0; i < inputsToppings.length; i++) {
            if (inputsToppings[i].checked) {
                sum += 0.4;
            }
        }
        for (let i = 0; i < inputsDarreichung.length; i++) {
            if (inputsDarreichung[i].checked) {
                sum += 0;
            }
        }
        for (let i = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[0].checked) {
                sum += 0;
            }
        }
        changeWarenkorb(sum);
    }
    function changeWarenkorb(_sum) {
        let Warenliste = document.getElementById("Warenliste");
        Warenliste.innerText = "";
        for (let i = 0; i < inputsEis.length; i++) {
            if (parseInt(inputsEis[i].value) > 0) {
                Warenliste.innerText += sorts[i] + " - " + (parseInt(inputsEis[i].value) * 1) + " Euro" + "\n";
            }
        }
        for (let i = 0; i < inputsToppings.length; i++) {
            if (inputsToppings[i].checked) {
                Warenliste.innerText += toppings[i] + " - 40 Cent" + "\n";
            }
        }
        for (let i = 0; i < inputsDarreichung.length; i++) {
            if (inputsDarreichung[i].checked) {
                Warenliste.innerText += containers[i] + " - Keine Extrakosten" + "\n";
            }
        }
        for (let i = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[i].checked) {
                Warenliste.innerText += delivery[i] + " - Keine Extrakosten" + "\n";
            }
        }
        let summeHtml = document.getElementById("Summe");
        summeHtml.innerText = _sum.toString() + " Euro";
    }
})(ClientServer || (ClientServer = {}));
//# sourceMappingURL=ClientServer.js.map