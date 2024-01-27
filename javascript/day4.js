const accountId = 144455
let accountEmail = "vishal@gmail.com"
var accountPassword = "1234"
accountCity = "patna"
let accountState;

//accountId 2 //not allowed

accountEmail = "monu@gmail.com"
accountPassword = "65433"
accountCity = "bhilai"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// node javascript/day4.js => for run in terminal