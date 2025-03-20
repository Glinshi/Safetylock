
//Ophalen van alle benodigde elementen met Id in variabelen

//Ophalen van elementen voor de kaarten en twee losse knoppen
var card = document.getElementById("js--card");
var card2 = document.getElementById("js--card2");
var fab = document.getElementById("js--fab");
var refresh = document.getElementById("js--refresh");

//Ophalen van elementen voor de inputs en button van card 
var safetylockButton = document.getElementById("js--safetylockButton");
var safetylockInput1 = document.getElementById("js--safetylock__input1");
var safetylockInput2 = document.getElementById("js--safetylock__input2");

//Ophalen van elementen voor de titel, wachtwoord en show en verwijder button voor de eerste set  
var wachtwoordenSheetTitel1 = document.getElementById("js--wachtwoordenSheetTitel1");
var wachtwoordenSheetWachtwoorden1 = document.getElementById("js--wachtwoordenSheetWachtwoorden1");
var showButton1 = document.getElementById("js--wachtwoordenSheetButtonShow1");
var onthoudentextwachtwoord1 //opslaan variabele om wachtwoord op te slaan zoals is ingeput
var verwijderButton1 = document.getElementById("js--wachtwoordenSheetButtonVerwijder1");

//Ophalen van elementen voor de titel, wachtwoord en show en verwijder button voor de tweede set  
var wachtwoordenSheetTitel2 = document.getElementById("js--wachtwoordenSheetTitel2");
var wachtwoordenSheetWachtwoorden2 = document.getElementById("js--wachtwoordenSheetWachtwoorden2");
var showButton2 = document.getElementById("js--wachtwoordenSheetButtonShow2");
var onthoudentextwachtwoord2 //opslaan variabele om wachtwoord op te slaan zoals is ingeput
var verwijderButton2 = document.getElementById("js--wachtwoordenSheetButtonVerwijder2");

//Ophalen van elementen voor de titel, wachtwoord en show en verwijder button voor de derde set  
var wachtwoordenSheetTitel3 = document.getElementById("js--wachtwoordenSheetTitel3");
var wachtwoordenSheetWachtwoorden3 = document.getElementById("js--wachtwoordenSheetWachtwoorden3");
var showButton3 = document.getElementById("js--wachtwoordenSheetButtonShow3");
var onthoudentextwachtwoord3 //opslaan variabele om wachtwoord op te slaan zoals is ingeput
var verwijderButton3 = document.getElementById("js--wachtwoordenSheetButtonVerwijder3");

//Ophalen van elementen voor de titel, wachtwoord en show en verwijder button voor de vierde set  
var wachtwoordenSheetTitel4 = document.getElementById("js--wachtwoordenSheetTitel4");
var wachtwoordenSheetWachtwoorden4 = document.getElementById("js--wachtwoordenSheetWachtwoorden4");
var showButton4 = document.getElementById("js--wachtwoordenSheetButtonShow4");
var onthoudentextwachtwoord4 //opslaan variabele om wachtwoord op te slaan zoals is ingeput
var verwijderButton4 = document.getElementById("js--wachtwoordenSheetButtonVerwijder4");

//Ophalen van elementen voor de showAll button
var showAllButton = document.getElementById("wachtwoordenSheetShowAllButton");



function naamEnWachtwoordToevoegen1() { //functie: titel en wachtwoord toevoegen aan set1
    if (safetylockInput1.value === "") { //controleren of het eerste inputveld leeg is
        wachtwoordenSheetTitel1.innerText = "Invoer vereist --> refresh";//geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden1.innerText = "Invoer vereist";//geeft melding bij foute invoer

        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }

    else if (safetylockInput2.value === "") { //controleren of tweede eerste inputveld leeg is
        wachtwoordenSheetTitel1.innerText = "Invoer vereist --> refresh";//geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden1.innerText = "Invoer vereist";//geeft melding bij foute invoer

        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }


    else if (safetylockInput2.value === "" && safetylockInput2.value === "") { //controleren of beide inputvelden leeg zijn
        wachtwoordenSheetTitel1.innerText = "Invoer vereist --> refresh"; //geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden1.innerText = "Invoer vereist";//geeft melding bij foute invoer

        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }


    else {
        wachtwoordenSheetTitel1.innerText = safetylockInput1.value; //weergave titel heeft dezelfde waarde als is ingevoerd in inputveld

        onthoudentextwachtwoord1 = safetylockInput2.value;//bewaar waarde van de ingevoerde waarde in het inputveld

        wachtwoordenSheetWachtwoorden1.innerText = "•".repeat(onthoudentextwachtwoord1.length); //weergeef het in ingevoerde wachtwoord in inputveld als bollejtes 



        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }

};





function jsShowButton1() { //functie: klikken op show knop verandert bolletjes in set1 naar orginele ingevoerde waarde in inputveld



    if (wachtwoordenSheetWachtwoorden1.innerText === "•".repeat(onthoudentextwachtwoord1.length)) {//Als wachtwoord weergave in set 1 bolletjes zijn

        wachtwoordenSheetWachtwoorden1.innerText = onthoudentextwachtwoord1;//weergeef opgeslagen orginele waarde van wachtwoorden veld set 1 (gelijk aan ingevoerde inputveld waarde)


    }
    else {
        wachtwoordenSheetWachtwoorden1.innerText = "•".repeat(onthoudentextwachtwoord1.length); //weergeef opgeslagen orginele waarde van wachtwoorden veld set 1 (gelijk aan ingevoerde inputveld waarde)

    }



}



function jsVerwijderButton1() { //functie: klikken op verwijderen knop verandert waarde titel(in orginele waarde) en wachtwoordin(in geen waarde) in set 2

    wachtwoordenSheetTitel1.innerText = "Test #1"; //verandert text in orginele waarde
    wachtwoordenSheetWachtwoorden1.innerText = "";//verandert text in geen waarde
    onthoudentextwachtwoord1 = "";//verandert text in geen waarde


}



function naamEnWachtwoordToevoegen2() {//functie: titel en wachtwoord toevoegen aan de set2
    if (safetylockInput1.value === "") { //controleren of eerste inputveld leeg is
        wachtwoordenSheetTitel2.innerText = "Invoer vereist --> refresh";//geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden2.innerText = "Invoer vereist";//geeft melding bij foute invoer

        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }

    else if (safetylockInput2.value === "") {
        wachtwoordenSheetTitel2.innerText = "Invoer vereist --> refresh";//geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden2.innerText = "Invoer vereist";//geeft melding bij foute invoer

        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }


    else if (safetylockInput2.value === "" && safetylockInput2.value === "") {
        wachtwoordenSheetTitel2.innerText = "Invoer vereist --> refresh";//geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden2.innerText = "Invoer vereist";//geeft melding bij foute invoer

        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }


    else {
        wachtwoordenSheetTitel2.innerText = safetylockInput2.value; //weergave titel heeft dezelfde waarde als is ingevoerd in inputveld

        onthoudentextwachtwoord2 = safetylockInput2.value; //bewaar waarde van de ingevoerde waarde in het inputveld

        wachtwoordenSheetWachtwoorden2.innerText = "•".repeat(onthoudentextwachtwoord2.length); //weergeef het in ingevoerde wachtwoord in inputveld als bollejtes


        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }



}



function jsShowButton2() {//functie: klikken op show knop verandert bolletjes in set2 naar orginele ingevoerde waarde in inputveld



    if (wachtwoordenSheetWachtwoorden2.innerText === "•".repeat(onthoudentextwachtwoord2.length)) { //Als wachtwoord weergave in set 1 bolletjes zijn

        wachtwoordenSheetWachtwoorden2.innerText = onthoudentextwachtwoord2;//weergeef opgeslagen orginele waarde van wachtwoorden veld set 2 (gelijk aan ingevoerde inputveld waarde)


    }
    else {
        wachtwoordenSheetWachtwoorden2.innerText = "•".repeat(onthoudentextwachtwoord2.length); //weergeef het in ingevoerde wachtwoord in inputveld als bollejtes

    }



}




function jsVerwijderButton2() {  //functie: klikken op verwijderen knop verandert waarde titel(in orginele waarde) en wachtwoordin(in geen waarde) in set 2

    wachtwoordenSheetTitel2.innerText = "Test #2";//verandert text in orginele waarde
    wachtwoordenSheetWachtwoorden2.innerText = ""; //verandert text in geen waarde
    onthoudentextwachtwoord2 = ""; //verandert text in geen waarde


}



function naamEnWachtwoordToevoegen3() { //functie: titel en wachtwoord toevoegen aan set3
    if (safetylockInput1.value === "") { //controleren of eerste inputveld leeg is
        wachtwoordenSheetTitel3.innerText = "Invoer vereist --> refresh";//geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden3.innerText = "Invoer vereist";//geeft melding bij foute invoer


        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }

    else if (safetylockInput2.value === "") { //controleren of tweede inputveld leeg is
        wachtwoordenSheetTitel3.innerText = "Invoer vereist --> refresh";//geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden3.innerText = "Invoer vereist";//geeft melding bij foute invoer

        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }


    else if (safetylockInput2.value === "" && safetylockInput2.value === "") { //controleren of beide inputvelden leeg zijn
        wachtwoordenSheetTitel3.innerText = "Invoer vereist --> refresh";//geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden3.innerText = "Invoer vereist";//geeft melding bij foute invoer

        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }


    else {
        wachtwoordenSheetTitel3.innerText = safetylockInput2.value; //weergave titel heeft dezelfde waarde als is ingevoerd in inputveld

        onthoudentextwachtwoord3 = safetylockInput2.value; //bewaar waarde van de ingevoerde waarde in het inputveld

        wachtwoordenSheetWachtwoorden3.innerText = "•".repeat(onthoudentextwachtwoord3.length); //weergeef het in ingevoerde wachtwoord in inputveld als bollejtes


        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }



}


function jsShowButton3() {//functie: klikken op show knop verandert bolletjes in set3 naar orginele ingevoerde waarde in inputveld



    if (wachtwoordenSheetWachtwoorden3.innerText === "•".repeat(onthoudentextwachtwoord3.length)) { //Als wachtwoord weergave in set 3 bolletjes zijn

        wachtwoordenSheetWachtwoorden3.innerText = onthoudentextwachtwoord3; //weergeef opgeslagen orginele waarde van wachtwoorden veld set 3 (gelijk aan ingevoerde inputveld waarde)


    }
    else {
        wachtwoordenSheetWachtwoorden3.innerText = "•".repeat(onthoudentextwachtwoord3.length);  //weergeef het in ingevoerde wachtwoord in inputveld als bollejtes

    }



}


function jsVerwijderButton3() {  //functie: klikken op verwijderen knop verandert waarde titel(in orginele waarde) en wachtwoordin(in geen waarde) in set 3

    wachtwoordenSheetTitel3.innerText = "school.nl"; //verandert text in orginele waarde
    wachtwoordenSheetWachtwoorden3.innerText = ""; //verandert text in geen waarde
    onthoudentextwachtwoord3 = ""; //verandert text in geen waarde


}



function naamEnWachtwoordToevoegen4() { //functie: titel en wachtwoord toevoegen aan set4
    if (safetylockInput1.value === "") { //controleren of eerste inputveld leeg is
        wachtwoordenSheetTitel4.innerText = "Invoer vereist --> refresh";//geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden4.innerText = "Invoer vereist";//geeft melding bij foute invoer

        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }

    else if (safetylockInput2.value === "") { //controleren of tweede inputveld leeg is
        wachtwoordenSheetTitel4.innerText = "Invoer vereist --> refresh";//geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden4.innerText = "Invoer vereist";//geeft melding bij foute invoer

        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }


    else if (safetylockInput2.value === "" && safetylockInput2.value === "") { //controleren of beide inputvelden leeg zijn
        wachtwoordenSheetTitel4.innerText = "Invoer vereist --> refresh";//geeft melding bij foute invoer
        wachtwoordenSheetWachtwoorden4.innerText = "Invoer vereist";//geeft melding bij foute invoer

        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }


    else {
        wachtwoordenSheetTitel4.innerText = safetylockInput2.value; //weergave titel heeft dezelfde waarde als is ingevoerd in inputveld

        onthoudentextwachtwoord4 = safetylockInput2.value; //bewaar waarde van de ingevoerde waarde in het inputveld

        wachtwoordenSheetWachtwoorden4.innerText = "•".repeat(onthoudentextwachtwoord4.length); //weergeef het in ingevoerde wachtwoord in inputveld als bollejtes



        //maak inputvelden leeg nadat is geklikt op safetylockButton(toevoegen)
        safetylockInput1.value = "";
        safetylockInput2.value = "";

    }



}


function jsShowButton4() {//functie: klikken op show knop verandert bolletjes in set4 naar orginele ingevoerde waarde in inputveld



    if (wachtwoordenSheetWachtwoorden4.innerText === "•".repeat(onthoudentextwachtwoord4.length)) { //Als wachtwoord weergave in set 4 bolletjes zijn

        wachtwoordenSheetWachtwoorden4.innerText = onthoudentextwachtwoord4; //weergeef opgeslagen orginele waarde van wachtwoorden veld set 4 (gelijk aan ingevoerde inputveld waarde)


    }
    else {
        wachtwoordenSheetWachtwoorden4.innerText = "•".repeat(onthoudentextwachtwoord4.length); //weergeef het in ingevoerde wachtwoord in inputveld als bollejtes

    }



}


function jsVerwijderButton4() { //functie: klikken op verwijderen knop verandert waarde titel(in orginele waarde) en wachtwoordin(in geen waarde) in set 4

    wachtwoordenSheetTitel4.innerText = "wachtwoord.nl"; ////verandert text orginele waarde
    wachtwoordenSheetWachtwoorden4.innerText = ""; //verandert text in geen waarde
    onthoudentextwachtwoord4 = "";////verandert text in geen waarde


}

function showAll() {  //functie: klikken op showall knop zorgt ervoor dat alle wachtwoorden weergeven in bolletjes tijdens inklikken hun orginele waarde tonenen 

    //aanroepen functies voor het tonen van het wachtwoord voor set1
    showAllButton.addEventListener("mouseup", jsShowButton1);
    showAllButton.addEventListener("mousedown", jsShowButton1);

    //aanroepen functies voor het tonen van hte wachtwoord voor set2
    showAllButton.addEventListener("mouseup", jsShowButton2);
    showAllButton.addEventListener("mousedown", jsShowButton2);

    //aanroepen functies voor het tonen van het wachtwoord voor set3
    showAllButton.addEventListener("mouseup", jsShowButton3);
    showAllButton.addEventListener("mousedown", jsShowButton3);

    //aanroepen functies voor het tonen van het wachtwoord voor set4
    showAllButton.addEventListener("mouseup", jsShowButton4);
    showAllButton.addEventListener("mousedown", jsShowButton4);

}

showAllButton.onclick = showAll;//uitvoeren van functie zodra er op de button wordt geklikt




function volgendeInputShowRegel1() {//functie: aanroepen werking set1
    safetylockButton.onclick = function () {//onclick event verbinenen met knop "toevoegen". Als onclick -> uitvoeren van 2 functies
        naamEnWachtwoordToevoegen1();//aanroepen functie om input titel en wachtwoord te weergeven in weergave set1
        volgendeInputShowRegel2();//alvast aanroepen van functie om te voorkomen dat, ingevoerde waarde in inputveld weer word weergeven in de vorige set
    }

    //aanroepen functies voor het tonen van het wachtwoord voor set1
    showButton1.addEventListener("mouseup", jsShowButton1);
    showButton1.addEventListener("mousedown", jsShowButton1);

    verwijderButton1.onclick = jsVerwijderButton1;//aanroepen functie om wachtwoord te verwijderen


}

function volgendeInputShowRegel2() {//functie: aanroepen werking set2
    safetylockButton.onclick = function () {//onclick event verbinenen met knop "toevoegen". Als onclick -> uitvoeren van 2 functies
        naamEnWachtwoordToevoegen2(); //aanroepen functie om input titel en wachtwoord te weergeven in weergave set1
        volgendeInputShowRegel3();//alvast aanroepen van functie om te voorkomen dat, ingevoerde waarde in inputveld weer word weergeven in de vorige set

    }

    //aanroepen functies voor het tonen van het wachtwoord voor set2
    showButton2.addEventListener("mouseup", jsShowButton2);
    showButton2.addEventListener("mousedown", jsShowButton2);

    verwijderButton2.onclick = jsVerwijderButton2;//aanroepen functie om wachtwoord te verwijderen


}

function volgendeInputShowRegel3() {//functie: aanroepen werking set3
    safetylockButton.onclick = function () {//onclick event verbinenen met knop "toevoegen". Als onclick -> uitvoeren van 2 functies
        naamEnWachtwoordToevoegen3();//aanroepen functie om input titel en wachtwoord te weergeven in weergave set1
        volgendeInputShowRegel4();////alvast aanroepen van functie om te voorkomen dat, ingevoerde waarde in inputveld weer word weergeven in de vorige set

    }

    //aanroepen functies voor het tonen van het wachtwoord voor set3
    showButton3.addEventListener("mouseup", jsShowButton3);
    showButton3.addEventListener("mousedown", jsShowButton3);

    verwijderButton3.onclick = jsVerwijderButton3;//aanroepen functie om wachtwoord te verwijderen

}

function volgendeInputShowRegel4() {//functie: aanroepen werking set4
    safetylockButton.onclick = function () {//onclick event verbinenen met knop "toevoegen". Als onclick -> uitvoeren van 2 functies
        naamEnWachtwoordToevoegen4();//aanroepen functie om input titel en wachtwoord te weergeven in weergave set1
        volgendeInputShowRegel1();//alvast aanroepen van functie om te voorkomen dat, ingevoerde waar in inputveld weer word weergeven in de vorige set

    }

    //aanroepen functies voor het tonen van het wachtwoord voor set4
    showButton4.addEventListener("mouseup", jsShowButton4);
    showButton4.addEventListener("mousedown", jsShowButton4);

    verwijderButton4.onclick = jsVerwijderButton4;//aanroepen functie om wachtwoord te verwijderen

}


function volgorde() {//functie: uitvoeren van de aangeroepen functies(alle sets 1-4) in de juiste volgord met if statements
    if (
        volgendeInputShowRegel1() === "true") { //als alle functies goed zijn aageroepen voor de werking van set 1, voer functie uit

        if (
            volgendeInputShowRegel2() === "true") { //als alle functies goed zijn aageroepen voor de werking van set 2, voer functie uit

            if (
                volgendeInputShowRegel3() === "true") { //als alle functies goed zijn aageroepen voor de werking van set 3, voer functie uit
                if (
                    volgendeInputShowRegel4() === "true") { //als alle functies goed zijn aageroepen voor de werking van set 5, voer functie uit


                }
            }
        }
    }

}
volgorde();//uitvoeren functie in goede volgorde



var veranderVolgordeCards = false; //booelan voor de fab knop om kaarten te wisselen

fab.onclick = function () {//functie wisselen card en cards van plek. verbinden fab knop met event onclick
    var ophalenParent = card.parentNode; //maken variabele om card de parent te maken. Door parent te gebruiken kunnen de kaarten zo wisselen en worden niet alleen de stijl verwisseld, maar ook de gegeven functies.
  


    if (veranderVolgordeCards) {//als waarde veranderVolgordeCards is true(dus dat het false is)
        ophalenParent.insertBefore(card, card2);//zet card voor card2
    }

    else {
        ophalenParent.insertBefore(card2, card);//anders zet card2 voor card
    }

    veranderVolgordeCards = !veranderVolgordeCards;//zijn geljk aanelkaar zodat de cards altijd kunnen wisselen
};


refresh.onclick = function () { //functie reloaden pagina. Verbinden refresh knop met event onclick
    location.reload();
};





























//bronnen
//https://redketchup.io/color-picker
//https://medium.com/nerd-for-tech/basics-of-javascript-string-repeat-method-8f225ebe0b3c
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
//https://www.w3schools.com/jsref/jsref_repeat.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//https://www.youtube.com/watch?v=945xZpwy9w8
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
//https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
//https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
//https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/
//https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
//https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
//https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
//https://www.w3schools.com/jsref/met_node_insertbefore.asp
//https://developer.mozilla.org/en-US/docs/Web/Events
//https://www.w3schools.com/jsref/met_loc_reload.asp