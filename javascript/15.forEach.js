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
myCoding.forEach((item) => {
    console.log(item.languageName);
})


// ------day:30-lead the previous lecture-------
console.log(" ------day:30-lead the previous lecture----");
// const coding1 = ["js", "ruby", "java", "python", "cpp"]
// const value = coding.forEach((item) =>{
//     console.log(item);
//     return item
// })
// console.log(value); //forEach value return nhi krta 


//filter value return krta hai(condition rahna chahiye)
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// method 1
// const newNums =myNums.filter((num) =>(num>4))  // paranthesis lga rhe ho toh return likhna nhi hai
// console.log(newNums);

// method2
// const newNums =myNums.filter((num) => { //curly bracket lga rhe ho toh return likhna padta hai(means scope start kr diye hai ,curly bracket ko scope bolte hai)
//     return num>4
// })
// console.log(newNums);

// method 3
const newNums = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);


