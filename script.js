function Toggler(section){

    this.section = document.querySelector(section);

    if(!(this instanceof Toggler)){
        return new Toggler(section);
    }
}

Toggler.prototype.getElem = function(){
    return this.section;
};

Toggler.prototype.show = function(){
    this.section.style.display = 'block';
};

Toggler.prototype.hide = function(){
    this.section.style.display = 'none';
};

var elem = new Toggler("#section");
var button = document.querySelector("#button");
 
button.addEventListener("click", function() {
 
    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }
 
}, false);














