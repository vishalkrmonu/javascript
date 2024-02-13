class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
addCourse(){
    console.log(`A new course was added by ${this.username}`);
}
      
}
const chai=new Teacher("chai","vishal@gmail.com","123") //bina new ke run nhi hoga
chai.addCourse()
// chai.logMe() //just because of inheritance


const masalachai=new User("masalachai")
masalachai.logMe()
console.log(chai instanceof User);