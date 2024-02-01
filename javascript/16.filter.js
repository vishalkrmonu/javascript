// scope  curly bracket ko bolte hai jo function ke andar rahta hai
//scope dalte ho to return likhna jaruri hai

const books = [
    {
    title: 'book one', genre: 'fiction', publish: 2005, edition: 2004},
    {
    title: 'book two', genre: 'math', publish: 1982, edition: 2005},
    {
    title: 'book three', genre: 'science', publish: 1983, edition: 2006},
    {
    title: 'book four', genre: 'phy', publish: 1984, edition: 2007},
    {
    title: 'book five', genre: 'fiction', publish: 2000, edition: 2008},
];
// let userBooks = books.filter((bk) => bk.genre === 'fiction')
// userBooks=books.filter((bk) => {bk.publish >=1983})

//here error because scope are open then return likhna jaruri hai
userBooks=books.filter((bk) => { 
    return bk.publish >=1983  && bk.genre==="fiction"
})
console.log(userBooks);


//------Map---
console.log("-----MAP-----");

const myNUmbers=[1,2,3,4,5,6,7,8,9,10]
// method 1
// const newNums=myNUmbers.map((num) => {
//     return num+10
// })
// console.log(newNums);

//method 2
const newNums = myNUmbers
                      .map((num) => num*10)
                      .map((num) => num+1)
                      .filter((num) => num>=40)
console.log(newNums);



//------Reduce()---

//method 1:function
// console.log("-----Reduce function-----");
// const myNums =[1,2,3]
// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)
// console.log(myTotal);


// method 2:arrow function
const myNums =[1,2,3]
const myTotal = myNums.reduce((acc,currval) => acc+currval ,0)
console.log(` sum is ${myTotal}`);



//new example
const shoppingCard=[
{
itemName: "js course",
price:299
},

{
    itemName: "py course",
    price:2992
    },
    {
        itemName: "java course",
        price:1000
        },
]
const priceToPay =  shoppingCard.reduce((acc,item) => acc + item.price,0 )
console.log(`total pay   ${priceToPay}`);