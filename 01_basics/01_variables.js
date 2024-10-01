const accountId = 445456
let accountEmail = "arjun@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"

// accountId = 2  not allowed

accountEmail = "rana@google.com"
accountPassword = "12121212"
accountCity = "delhi"
let accountState

// console.log(accountId);

/*
prefer not to use var keyword to declare a variable 
because of issues with block scope and functional scope
in moern js we mostly use let and const to define variabe these two were defined in ecmascript 6 
const means constant if a variable is defined with const we cannot change its value.
but if that variable is defined with let we can change its value.
also javascript is a very supportive language, if we dont give any let var or const to a varaible
still we can access that variable
*/

console.table([accountId , accountEmail, accountPassword, accountCity, accountState])
