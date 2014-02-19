//Hämtar lite gerjer från html
var form = document.querySelector("#konventerare");
var konventeringsknapp = form.querySelector("#knapp2");
var inmatat = form.querySelector("input");
var resultat = document.querySelector("#resultat");
var val = inmatat.value;
//När man trycker man knappen
konventeringsknapp.onclick = function () {
    

    if (isNaN(val) || val === "") {
        alert("Ange ett godkänt värde.");
    }
    else {
        var p = document.createElement("p");        

        val = "" + inmatat.value + " SEK = " + (inmatat.value * 0.11).toFixed(2)  + "€ eller " + (inmatat.value * 0.15).toFixed(2) + "$."  ;    

        var text = document.createTextNode(val);

        p.appendChild(text);
        resultat.appendChild(p);

    }
};

//Sparar
var sparat = [];

function nyttvärde(val) {
    sparat.push(val);
}





