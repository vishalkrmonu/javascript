// for of

// ["","",""]
// [{},{},{}]

console.log("----for-of loop-----");
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greeting = "hello vishal"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

//Maps : duplicate store nhi hota hai
console.log("----Map-----");
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FR', "France")
map.set('IN', "India")
//map is iterable but object is not
console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
}


//"for of" loop is not work for object
// const myObject = {
//     game1:'NFS',
//     game2:'Spiderman'
// }
// for (const [key,value] of myObject) {  //not work because object is not iterable
//     console.log(key, ':-', value);
// }


console.log("----for-in loop-------");
//"for in" loop is work on object
// discuss the obj
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    //    console.log(key);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}


// const map1=new Map()  //not work because of for-in
// map1.set('IN',"India")
// map1.set('USA',"United states of america")
// map1.set('FR',"France")
// map1.set('IN',"India")
// for (const key in map1) {
//   console.log(key);
// }


// ----forEach loop-----
console.log("----forEach loop-----");
const coding = ["js", "ruby", "java", "python", "cpp"]

// method 1: simple function
// coding.forEach(function(val){
//     console.log(val);
// })

//method 2:arrow function
// coding.forEach((val) => {
//     console.log(val);
// })

//method 3
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item) =>{
console.log(item.languageName);
})