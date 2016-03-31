# Trendy.js
A handy JS library for interactive content

Developed by TrendCT.org / Jake Kara (jkara@trendct.org)

### use
Load jQuery.js (first), then Trendy.js in your preferred manner and the Trendy variable is set. Call its methods to make your life easier.

### methods

__Trendy.getParam(z) —__ get URL parameter z

__Trendy.underscore("A string with spaces") -__ returns "A_string_with_spaces" 

__Trendy.space("A_string_without_spaces") -__ returns "A string without spaces" 

__Trendy.comma(2000.00) -__ returns "2,000.00"

__Trendy.dollars(2000) -__ returns "$2,000"

__Trendy.bigDollars(24000000.95) -__ returns "$24,000,000" (drops cents, because who cares?)

__Trendy.getObjectWithKeyValue(object, key, value) -__ returns (first) object object with a matching key value or false 

__Trendy.brightness(r,g,b) -__ returns the W3C-specified brightness value of a color with given r, g, b values 

__Trendy.brighterThan(r,g,b,x) -__ returns true/false depending on whether color with rgb values r, g, b has a W3C-specified brightness val greater than x 

__Trendy.bright(r,g,b) -__ returns true/false depending on whether color with rgb values r, g, b have a value brighter than 123 (out of 255)

### files

Trendy.js -- the library
test_trendy.js -- a bunch of test scripts
tests.html -- a page that runs the test script and displays the output (in the DOM and the console)

### misc
handy.js is just the old file name, Trendy.js is a fork. 

