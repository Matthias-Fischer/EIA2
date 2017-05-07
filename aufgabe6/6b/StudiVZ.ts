//Aufgabe: 6 - StudiVZ
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 07.05.17 
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.





namespace StudiVZ {

    interface StudentData {

        Vorname: string;
        Nachname: string;
        Alter: number;
        Matrikelnummer: number;
        Geschlecht: boolean;
        Kommentar: string;

    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {

        //Zuerst wird durch folgende Abfragen sichergestellt, dass alle Eingaben korrekt sind um weiterverarbeitet werden zu können

        //Variablen-Deklaration, damit der Input-String bei jedem Komma zerlegt wird
        let starArr: string[] = _input.split(",");

        //Die geforderten 5 Daten müssen eingegeben werden, ansonsten ist die Eingabe nicht vollständig
        if (starArr.length < 5)
        { return "Eingabe nicht vollständig"; }

        //An der 1. Stelle muss eine Zahl eingegeben werden, ansonsten kommt folgende Meldung
        if (isNaN(parseInt(starArr[0])))
        { return "Die eingegebene Matrikelnummer ist keine Zahl."; }

        //An der 4. Stelle muss eine Zahl eingegeben werden, ansonsten kommt folgende Meldung
        if (isNaN(parseInt(starArr[3])))
        { return "Bitte geben Sie das Alter als Zahl ein."; }

        //An der 5. Stelle soll das Geschlecht als 0 für weiblich oder 1 für männlich eingegeben werden
        if (parseInt(starArr[4]) != 0 && parseInt(starArr[4]) != 1)
        { return "Geschlecht bitte als 0 für w oder 1 für m eingeben."; }


        //Mit der parseInt Funktion hat man die Möglichkeit, eine Zeichenkette in eine Zahl umzuwandeln. 
        //Benutzereingaben werden von der Funktion prompt() immer als String zurückgeliefert.

        let daten: StudentData = {
            Matrikelnummer: parseInt(starArr[0]),
            Nachname: starArr[1],
            Vorname: starArr[2],
            Alter: parseInt(starArr[3]),
            Geschlecht: parseInt(starArr[4]) == 1,
            Kommentar: starArr[5]
        }

        //Dem students-Array werden die daten hinzugefügt
        students.push(daten)

        //Variablen-Deklaration für das Geschlecht
        let geschlecht: string = daten.Geschlecht ? "m" : "w";

        //Nun wird die Ausgabe definiert
        return "Diese Daten wurden gespeichert: \nMatrikelnummer: " + daten.Matrikelnummer + "\nName: " + daten.Nachname + "\nVorname: " + daten.Vorname + "\nAlter: " + daten.Alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + daten.Kommentar;
    }

    //„queryData“ nimmt eine Matrikelnummer entgegen und liefert den darunter in students 
    //gefundenen Datensatz als formatierten String zurück, oder 
    //eine entsprechende Meldung, wenn unter der Nummer keine Daten gefunden wurden.

    function queryData(_matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {

            //Stimmt die nun eingegebene Matrikelnummer mit der zuvor gespeicherten überein, werden die Daten, die zu dieser Nummer passen angezeigt
            if (students[i].Matrikelnummer == _matrikel) {
                let geschlecht: string = students[i].Geschlecht ? "m" : "w";
                return "Folgende Daten sind unter der eingegebenen Matrikelnummer gespeichert: \nMatrikelnummer: " + students[i].Matrikelnummer + "\nName: " + students[i].Nachname + "\nVorname: " + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].Kommentar;
            }
        }

        //Ist dies nicht der Fall, wird folgende Ausgabe angezeigt
        return "Der eingegebenen Matrikelnummer konnten keine Daten zugewiesen werden.";
    }



}