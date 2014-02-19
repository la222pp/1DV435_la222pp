var tableContent = document.getElementById ("tableContent");

function showhide(e) {
    e.preventDefault();
        if (tableContent.className == ("show")) {
            tableContent.setAttribute ("class", "hide");
}
    
    else { tableContent.setAttribute ("class", "show");
    
    }
    
}
    
var knapp = document.getElementById ("buttn");
knapp.addEventListener("click", showhide);