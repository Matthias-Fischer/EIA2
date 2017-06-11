namespace Form {
    
    window.addEventListener("load", init);


    let sorts: string[] = ["Vanille", "Schokolade", "Erdbeere", "Haselnuss", "Joghurt", "Banane", "Zitrone"];
    let toppings: string[] = ["Sahne", "Schokososse", "Streusel"];
    let containers: string[] = ["Becher", "Waffel"];
    let delivery: string[] = ["Abholung", "Lieferung"];

    let fieldset: HTMLFieldSetElement;
    let fieldsetToppings: HTMLFieldSetElement;

    let Eissorten: HTMLElement;
    let Toppings: HTMLElement;
    let Delivery: HTMLElement;
    let Bestellung: HTMLElement;
    let Warenkorb: HTMLElement;
    let Darreichungsform: HTMLElement;

    let toppingPreis: number = 0;

    let inputsEis: HTMLInputElement[] = [];
    let inputsToppings: HTMLInputElement[] = [];
    let inputsDarreichung: HTMLInputElement[] = [];
    let inputsDelivery: HTMLInputElement[] = [];

    function init(): void {

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


    function BestellungAbschicken(): void {
    
        let Korrektur: string[] = ["Bitte ueberpruefen/ergaenzen Sie folgende Eingaben: \n"];
        let Vorname: HTMLInputElement = <HTMLInputElement> document.getElementById("Vorname");
        let Nachname: HTMLInputElement = <HTMLInputElement> document.getElementById("Nachname");
        let Strasse: HTMLInputElement = <HTMLInputElement> document.getElementById("Strasse");
        let PLZ: HTMLInputElement = <HTMLInputElement> document.getElementById("PLZ");
        let Ort: HTMLInputElement = <HTMLInputElement> document.getElementById("Ort");
        let Mail: HTMLInputElement = <HTMLInputElement> document.getElementById("Mail");
        let Telefon: HTMLInputElement = <HTMLInputElement> document.getElementById("Telefon");
       
        if(Vorname.validity.valid == false)
            Korrektur.push("Vorname \n");
        if(Nachname.validity.valid == false)
            Korrektur.push("Nachname \n");
        if(Strasse.validity.valid == false)
            Korrektur.push("Straﬂe \n");
        if(PLZ.validity.valid == false)
            Korrektur.push("Postleitzahl \n"); 
        if(Ort.validity.valid == false)
            Korrektur.push("Ort \n");
        if(Mail.validity.valid == false)
            Korrektur.push("Email-Adresse \n");
        if(Telefon.validity.valid == false)
            Korrektur.push("Telefonnummer \n"); 
        
        
        let Eiskugeln: number = 0;
        let Darbietung: number = 0;
        let Delivery: number = 0;
        let Toppings: number = 0;
        
        
        //Es wurde keine Eissorte ausgew‰hlt
        for(let i: number = 0; i < inputsEis.length; i++){
            if(parseInt(inputsEis[i].value) > 0)
                Eiskugeln += 1;
        } 
        if(Eiskugeln == 0)
            Korrektur.push("Sie haben keine Eissorte ausgewhlt \n");
        

        //Es wurde keine Darreichungsform ausgew‰hlt
        for(let i: number = 0; i < inputsDarreichung.length; i++){
            if(inputsDarreichung[i].checked)
                Darbietung += 1;
        } 
        if(Darbietung == 0)
            Korrektur.push("Das Eis kann leider nicht in Luft verpackt werden \n");
        
        
        //Es wurde keine Lieferart ausgew‰hlt
        for (let i: number = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[i].checked)
                Delivery += 1;
        }
        if (Delivery == 0)
            Korrektur.push("Es wurde keine Lieferart ausgewaehlt \n");


        //Es wurden keine Toppings ausgew‰hlt
        for (let i: number = 0; i < inputsToppings.length; i++) {
            if (inputsToppings[i].checked)
                Toppings += 1;
        }
        if (Toppings == 0)
            Korrektur.push("Wollen Sie wirklich keines unserer leckeren Toppings probieren? \n");
        



        if(Korrektur.length > 1){
            for(let i: number = 0; i < Korrektur.length; i++)
                Korrektur.push
                alert(Korrektur.join(""));}
            else{
            alert("Vielen Dank f¸r Ihre Bestellung! Diese wird nun bearbeitet!");
            location.reload();
            }
        }
    
        

    function createAuswahlDerProdukte(): void {

        for (let i: number = 0; i < sorts.length; i++) {
            createInput(sorts[i]);
        }
        for (let i: number = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (let i: number = 0; i < containers.length; i++) {
            createRadio(containers[i]);
        }
        for (let i: number = 0; i < delivery.length; i++) {
            createRadio2(delivery[i]);
        }
    }

    function createInput(_sort: string): void {
        // Stepper f¸r Eissorte und Anzahl
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _sort;
        label.appendChild(input);
      
        input.type = "number";
        input.min = "0";
        input.value = "0";
        label.id = _sort;

        Eissorten.appendChild(label);
        inputsEis.push(input);
    }

    function createCheckbox(_topping: string): void {
        // Checkboxen f¸r Toppings
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _topping;
        label.appendChild(input);
        // Die Art des Inputs wird ¸ber den Typ definiert
        input.type = "checkbox";
        label.id = _topping;

        Toppings.appendChild(label);
        inputsToppings.push(input);
    }

    function createRadio(_darbietung: string): void {
        // Radiobuttons f¸r Art der Darbietung
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _darbietung;
        label.appendChild(input);
        // Die Art des Inputs wird ¸ber den Typ definiert
        input.type = "radio";
        input.name = "darbietung";
        input.required = true;
        label.id = _darbietung;

        Darreichungsform.appendChild(label);
        inputsDarreichung.push(input);
    }

    function createRadio2(_delivery: string): void {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulˆsen
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _delivery;
        label.appendChild(input);
        // Die Art des Inputs wird ¸ber den Typ definiert
        input.type = "radio";
        input.name = "delivery";
        input.required = true;
        label.id = _delivery;

        Delivery.appendChild(label);
        inputsDelivery.push(input);
    }


    // Sobald ƒnderungen auftreten, neue Werte summieren
    
    function change(): void {
        
        let sum: number = 0;
        for (let i: number = 0; i < inputsEis.length; i++) {
            sum += parseInt(inputsEis[i].value);
        }
        for (let i: number = 0; i < inputsToppings.length; i++) {
            if (inputsToppings[i].checked)
            { sum += 0.4; }
        }
        for (let i: number = 0; i < inputsDarreichung.length; i++) {
            if (inputsDarreichung[i].checked)
            { sum += 0; }
        }
        for (let i: number = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[0].checked)
            { sum += 0; }
        }
        
        changeWarenkorb(sum);

    }

    function changeWarenkorb(_sum: number): void {

        let Warenliste: HTMLElement = document.getElementById("Warenliste");
        Warenliste.innerText = "";

        for (let i: number = 0; i < inputsEis.length; i++) {
            if (parseInt(inputsEis[i].value) > 0) {
                Warenliste.innerText += sorts[i] + " - " + (parseInt(inputsEis[i].value) * 1) + " Euro" + "\n";
            }
        }
        
        for (let i: number = 0; i < inputsToppings.length; i++) {
            if (inputsToppings[i].checked) {
                Warenliste.innerText += toppings[i] + " - 40 Cent" + "\n";
            }
        }
        
        for (let i: number = 0; i < inputsDarreichung.length; i++) {
            if(inputsDarreichung[i].checked)
            {
                Warenliste.innerText += containers[i] + " - Keine Extrakosten" + "\n";
            }
        } 
        
        for (let i: number = 0; i < inputsDelivery.length; i++) {
            if(inputsDelivery[i].checked)
            {
                Warenliste.innerText += delivery[i] + " - Keine Extrakosten" + "\n";
            }
        }
            
        
        let summeHtml: HTMLElement = document.getElementById("Summe");
        summeHtml.innerText = _sum.toString() + " Euro";
    }

}












 


