const descripter =Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);


//this is object not a descriptor
const chai={
    name:'ginger chai',
    prince:250,
    isAvailable:true,

    orderChai:function(){
        console.log("chai nhi bni");
    }

}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !=='function'){
        console.log(`${key}:${value}`);
    }
    
}

