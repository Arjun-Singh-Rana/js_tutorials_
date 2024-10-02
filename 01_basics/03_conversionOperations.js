let score = 33

// two ways to check data type of a variable

//console.log(typeof score)   // 1st way to directly write varaible beside typeof (output will be number)
//console.log(typeof(score)) // 2nd way to write varaible as a method inside typeof() (output will be number)
//console.log(score)  // output will be 33

let secondScore = true // here we have givwn the value as a string
//console.log(typeof secondScore) // this will check the type of datatype which will be string.
//console.log(secondScore) // output will be 33

// now here is a common problem in javascript...both score and secondScore have a value 33 but one is number datatype and other one is string datatype
// what if we want to perform some operation that will only work on number dataype....we want to give this secondScore value to backend for some operation
// and that operation will work only with number datatype, but from frontend we have got string datatype...how will we give number value to backend from secondScore?

// to overcome this type of type conversion problems javscript introduced some functions to convert the type of data from one datatype to another dataytype.

let valueInNUmber = Number(secondScore)
//console.log(valueInNUmber)

// this Number() function can convert a given string datatype to a number datatype.
//similarly we can convert a number datatype to a string datatype..


let isLoggedIn = 
console.log(typeof isLoggedIn);

let booleanValue = Boolean(isLoggedIn)
console.log(booleanValue)


// numeber => true 
// ""  -> false
// "arjun" -> true

//there are various things we can do in conversion of datatypes, like Number() and Boolean() we also have String() function and we can convert into objects
//arrays etc