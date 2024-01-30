//singleton =>constructor se bnega tb singleton object hi hoga
//Object.create


//object literals(declare)
// key:value =>for obj defined

const mySym=Symbol("key1")


const JsUser = {
    name: "vishal",
    "full name":"vishal kumar",
    [mySym]:"mykeys1",
    age: 19,
    location: "bhilai",
    email: "vishalkrmonu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}

//method to access
console.log(JsUser.email);
console.log(JsUser["email"]); //method to access the email
console.log(JsUser["full name"]); //not correct for access
console.log(JsUser[mySym]);
console.log(typeof JsUser.mySym);  

JsUser.email="monu@gmail.com"
// Object.freeze(JsUser) //aage koi change nhi kr skta hai actual data me
JsUser.email="sonu@gmail.com"
console.log(JsUser);


JsUser.greeting =function(){
    console.log("hello js user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo =function(){
    console.log(`hello js user ,${this.name}`);
}
console.log(JsUser.greetingTwo());
