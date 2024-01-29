// ---day:11-String----

// node javascript/tut3String.js => run
const name = "vishal"
const repoCount = 50
console.log(name + repoCount + " value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('vishal-kr') //type of string dekho console me isko likhkr

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString=gameName.substring(0,4) //last wala 4th num count nhi hota hai
console.log(newString);

const anotherString=gameName.slice(-7,4)
console.log(anotherString)

const newStringOne="  vishal   "
console.log(newStringOne)
console.log(newStringOne.trim()) //remove the white space


const url="https://vishal.com/monu%20kumar"
console.log(url.replace('%20','-'));

console.log(url.includes('vishal')); //present hai ya nhi

console.log(gameName.split('-'));

