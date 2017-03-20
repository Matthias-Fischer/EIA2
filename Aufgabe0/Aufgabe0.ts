 
//Aufgabe: 0
//Name: Matthias Fischer
//Matrikel: 255035
//Datum: 19.03.17
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.




document.addEventListener('DOMContentLoaded', function () {
    var name:string = prompt("Bitte geben Sie Ihren Namen ein.");
    var willkommen:string = "Herzlich Willkommen ";
    document.body.innerHTML = willkommen + name;
});