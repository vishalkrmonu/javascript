// let myName ="vishal    "
// let mychannel ="chai   "
// console.log(myName.trueLength);


let  myHeros =["thor","spiderman"]
 
let heroPower={
    thor :"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is  ${this.spiderman}`);
    }
}

Object.prototype.vishal = function(){
    console.log(`vishal is present in all objects`);
}

Array.prototype.heyvishal=function(){
    console.log(`vishal says hello`);
}


// heroPower.vishal()    
myHeros.vishal()
myHeros.heyvishal()
// heroPower.heyvishal()



//Inheritance
const User={
    name:"chai",
    email:"vishal@gmail.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment : 'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport //this is call inheritance
}
Teacher.__proto__=User

//Modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername ="chaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}


anotherUsername.trueLength()
"vishal".trueLength()
"ice".trueLength()