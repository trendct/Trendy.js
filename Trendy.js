/** trendy **

handy functions for every project

**/



/* extend String ? Not sure why */
String.prototype.toProperCase = function(txt) {

    return this.toString().replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

/* Test if a string is 'true' or 'false' or unknown (-1)*/
String.prototype.toBoolean = function () {
    
    if (this.toString() === "true") {
        return true;
    }
    else if (this.toString() === "false") {
        return false;
    }
    else {
        throw "Neither 'true' nor 'false'";
    }
}
function Trendy(){
    
    return this;
}

Trendy.getParam = function (param) {
    
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === param) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    };
    
    return null;
}

// convert spaces to underscores
Trendy.underscore = function(string) {
    return string.split(' ').join('_');
}

// conver underscores to spaces
Trendy.space = function(string) {
    return string.split('_').join(' ');
}

// add commas to whole or decimal number
Trendy.comma = function (val) {

    // only works with .00 or 00 format. 

    var valString = val.toString();
    var leftOfDecimal = null;
    var rightOfDecimal = null;


    // if decimal number, use recursion
    if (valString.indexOf(".") >= 0) {
        leftOfDecimal = valString.substring(0, valString.indexOf("."));
        rightOfDecimal = valString.substring(valString.indexOf(".") + 1);
        return this.comma(leftOfDecimal) + "." + rightOfDecimal;
    }

    // otherwise, just get to it
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }

    return val;

}

// format for dollars
Trendy.dollars = function(val) { 

    // format        
    return ("$" + this.comma(val));
}

Trendy.bigDollars = function(val)
{
    // lop off decimal
    val = Math.round(parseFloat(val));

    // format        
    return ("$" + this.comma(val));

}

Trendy.getObjectWithKeyValue = function(object, key, value)
{
    var foundObject = false;
    $.each(object, function(index, object_item) {
        if (object_item.hasOwnProperty(key)){
                if (object_item[key] == value){
                    foundObject = object_item;
                    return false;
                }
        }
    });

    if (foundObject == false) {
        return false;
    }
    else {
        return foundObject;
    }
    
}

Handy = new Trendy();