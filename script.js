//registration event document load
if (window.addEventListener) window.addEventListener("load",init,false);
else if (window.attachEvent) window.attachEvent("onload", init);

//registration event handler

function init() {     
    firstForm.userName.onchange = nameOnChange;
    firstForm.email.onchange = emailOnChange;
    firstForm.zip.onchange = zipcodeOnChange;
    firstForm.onsubmit = onsubmitHandler;
}

function validate(elem,pattern) {
    var res = elem.value.search(pattern);
    if  (res == -1) elem.className ="invalid";
    else    elem.className= "valid";
}

function nameOnChange() {
    var pattern = /\S/;
    validate(this,pattern);
}

function emailOnChange() {
    var pattern =   /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(this,pattern);
}

function zipcodeOnChange() {
    var pattern = /\d{5}/;
    validate(this,pattern);
}

function onsubmitHandler() {
    
    var invalid = false;
    
    for (var i = 0 ; i < firstForm.elements.length; ++i){
        var e = firstForm.elements[i];
        if (e.type == "text" && e.onchange){
            e.onchange();
            if  (e.className == "invalid") invalid = true;
        }
    }
    
    if (invalid) {
        alert("Wrong!");
        return false;
    }
    
}