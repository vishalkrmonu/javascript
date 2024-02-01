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


// ------day:30-lead the previous lecture-------
console.log(" ------day:30-lead the previous lecture----");
const coding1 = ["js", "ruby", "java", "python", "cpp"]

