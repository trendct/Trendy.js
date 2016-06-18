function print (output) {
    console.log (output);
    document.write ("<li>" + output + "</li>");
}

function assert(condition, message) {
    if (!condition) {
	var output = message || "Assertion failed";
	throw output;
	print (output);
    }
}

// Test out a function
function test_f (f, input, expected_output,test_name) {
    var ev = f (input);
    assert(ev == expected_output, "Test failed: " + test_name + ": (result: " + ev.toString() + ")");
    var output = test_name + ": " + ev.toString(); 
    print (output);
}

// Tests for the comma function
test_f(Trendy.comma, "", "", "Trendy.comma of empty string");
test_f(Trendy.comma, "100","100", "Trendy.comma of '100' string");
test_f(Trendy.comma, 100, "100", "Trendy.comma of 100 int");
test_f(Trendy.comma, 1000, "1,000", "Trendy.comma of 1000 int");
test_f(Trendy.comma, 123456789, "123,456,789", "Trendy.comma of 123456789 int");
test_f(Trendy.comma, "123456789", "123,456,789", "Trendy.comma of '123456789' string");
test_f(Trendy.comma, "$123456789","$123456789", "Trendy.comma of '$123456789' string");
test_f(Trendy.comma, "127.0.0.1","127.0.0.1", "Trendy.comma of '127.0.0.1' string");
