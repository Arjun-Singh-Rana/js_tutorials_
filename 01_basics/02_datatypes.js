"use strict";  // treat all JS code as newer version

// alert(3+3); // this is not possible here because we are using node js. this alert function will
// run inside a browser engine but it will give an error in node js.

// there is a different way to write alert function in node JS.


// console.log(
//     3
//     +
//     3
// )  // this is very wrong way of writting codes tho it will run but this is not following code readability standards.

//console.log(3+3); console.log("Arjun")  // this is also not good, again its not following code readability standards.


// -----------------------datatypes---------------------

let name = "arjun"
let age = 23
let isLoggedIn = true

// number dataype ( this number data type has a limit of 2^53 maximum number it can store, after 2^53 we have to use a different datatype called bigInt)
// string dataype (anything within a "" or '' is a string dataype for example let name = "arjun" here dataype of variable name is string.. string do not have any limit...mostly we prefer to use " " for string tho we can aso use ' ')
// boolean datatype ( boolean dataype is basically just true/false value, for example let isLoggedIn = true...here isLoggedIn ka datatype is boolean..it can have only two values either true or either false)
// null datatype ( null is a standalone value actually but it is treated as a datatype also.. it is a representation of "empty" value.. if we check the typeOf null it will give us object)
// unefined datatype
//symbols datatypes

console.log(typeof undefined);

