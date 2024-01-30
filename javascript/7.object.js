//----day:16-object------

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



//----day:17-object------
console.log("-----day:17-object----");

//const tinderUser=new Object() //singlton
const tinderUser={};   //non-singleton(obj)

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);


const regularUser={
    email:"sonu@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vishal",
            lastname:"kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1={1:"a",2:"b"} //console me dekho
const obj2={3:"a",4:"b"}
const obj4={6:"a",5:"b"}
// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2,obj4) //combine proper way

const obj3={...obj1,...obj2} //combine
// console.log(obj3);


const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //sabko array me alg alg dalega

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //present or not



//----day:18-object------
console.log("-----day:18-object----");

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"vishal"
}

// course.courseInstructor
// const {courseInstructor}=course
// console.log(courseInstructor);

const {courseInstructor:instructor}=course //isko bolte destructure krna 
//phle courseInstructor tha ab hum use kr skate hai instructor
console.log(instructor);


//json
// {
//     "name":"vishal",
//     "coursename":"js in hindi",
//     "price":"free"
// }
// https://api.github.com/users/hiteshchoudhary 
[
    {},
    {},
    {}
]
