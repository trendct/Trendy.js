/** trendy **

handy functions for every project
by Jake Kara / TrendCT.org

**/

/* TODO move toProperCase and toBoolean out of the string hack */
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
    // make sure val is a string
    val = val.toString();

    // do nothing on non-numeric values
    if (isNaN(parseFloat(val))) {
	console.error("Trendy.comma: Value is not numeric.");
	return val;
    }
    // if there are more than two periods, it's not a valid number
    var dec_count = (val.match(/\./g) || []).length;
    if (dec_count > 1) {
		console.error("Trendy.comma: Value is not numeric (more than one decimal point: " + dec_count + ") ");
	return val
    }

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

    //Limit to 2 decimal places
    val = val.toFixed(2);

    // format
    return ("$" + toString(this.comma(val)));
}

// big meaning we don't care about the pennies.
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

// based on brightness formula here http://www.w3.org/TR/AERT#color-contrast
// ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
Trendy.brightness = function(r, g, b){
    return (r * 299 + g * 587 + b * 114) / 1000
}

// return true if r, g, b of color is brighter than x
Trendy.brighterThan = function(r, g, b, x) {
    return (this.brightness(r,g,b) > x);
}

// return true if r, g, b is "bright" by arbitrary definition
Trendy.bright = function (r, g, b) {
    return (this.brighterThan(r, g, b, 123));
}

Handy = new Trendy();
