function clearErrors() {
    for (var i = 0; i < document.forms["evens"].elements.length; i++) {
        if (document.forms["evens"].elements[i].parentElement.className.indexOf("has-") != -1) {
            document.forms["evens"].elements[i].parentElement.className = "col-sm-3";            
        }
    }
}