# Trendy.js
A handy JS library for interactive content

Developed by TrendCT.org / Jake Kara (jkara@trendct.org)

###use
Simply load jQuery.js (first), then Trendy.js in your preferred manner and the Trendy variable is set. Call its methods to make your life easier.

###methods

**Trendy.getParam(z) — ** get URL parameter z

**Trendy.underscore("A string with spaces") - ** returns "A_string_with_spaces" 

**Trendy.space("A_string_without_spaces") - ** returns "A string without spaces" 

**Trendy.comma(2000.00) - ** returns "2,000.00"

**Trendy.dollars(2000) - ** returns "$2,000"

**Trendy.bigDollars(24000000.95) - ** returns "$24,000,000" (drops cents, because who cares?)

**Trendy.getObjectWithKeyValue(object, key, value) - ** returns (first) object object with a matching key value or false 

**Trendy.brightness(r,g,b) - ** returns the W3C-specified brightness value of a color with given r, g, b values 

**Trendy.brighterThan(r,g,b,x) - ** returns true/false depending on whether color with rgb values r, g, b has a W3C-specified brightness val greater than x 

**Trendy.bright(r,g,b) - ** returns true/false depending on whether color with rgb values r, g, b have a value brighter than 123 (out of 255)


###misc
handy.js is just the old file name, Trendy.js is a fork. 
