//registration event document load
if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

//registration event handler

function init() {
    // what is firstForm. not obvious.
    // looks wierd that you are adding load event by using
    // addEventListener and this one inline
    firstForm.userName.onchange = nameOnChange;
    firstForm.email.onchange = emailOnChange;
    firstForm.zip.onchange = zipcodeOnChange;
    firstForm.onsubmit = onsubmitHandler;
}

function validate(elem, pattern) {
    var res = elem.value.search(pattern);
    if (res == -1) elem.className = "invalid";
    else elem.className = "valid";
}

function nameOnChange() {
    var pattern = /\S/; // well it's disussible using extra variable in this
    //case
    validate(this, pattern);
}

function emailOnChange() {
    // same here. it can be simplified to 
    // validate(this, /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i);
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(this, pattern);
}

function zipcodeOnChange() {
    var pattern = /\d{5}/;
    validate(this, pattern);
}

function onsubmitHandler() {

    var invalid = false;
    // you can use forEach instead but converts nodeList to Array
    for (var i = 0; i < firstForm.elements.length; ++i) {
        var e = firstForm.elements[i]; // better name el or elem
        // because one letter var is pretty confusing
        if (e.type == "text" && e.onchange) {
            e.onchange();
            if (e.className == "invalid") invalid = true;
        }
    }

    if (invalid) {
        alert("Wrong!");
        return false;
    }

}