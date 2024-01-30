// -----day:14-Array------
// array is resizable in js
// collection of diff type of datatype in one variable

const myArr=[0,1,2,3,4,5] //console me bhi dekho
const myHeros=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4)
// console.log(myArr[1]);

//Array methods
// myArr.push(6);
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) //add the element in first index
// myArr.shift() //remove element in first index

// console.log(myArr.includes(9)); //check present or not
// console.log(myArr.indexOf(9)); //check index


// const newArr=myArr.join()
// console.log(myArr); 
// console.log(newArr); //convert in string

//slice ,splice
console.log("A",myArr);

const myn1=myArr.slice(1,3) //cut the 1,2(index)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3) //cut the 1,2,3(index)
console.log("C" ,myArr);
console.log(myn2);


// -----day:15-Array------
console.log("-----day:15-Array------");
const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros) //combine but not properly

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); 

// const allHeros=marvel_heros.concat(dc_heros) //combine the array
// console.log(allHeros);

const all_new_heros=[...marvel_heros,...dc_heros] //combine proper way
// console.log(all_new_heros); 


const another_array=[1,2,3,[4,5,6],7,8,[8,9,[2,3]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("vishal"))
console.log(Array.from("vishal"))
console.log(Array.from({name:"vishal"})) //interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

