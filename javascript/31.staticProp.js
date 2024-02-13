//jab bhi static use krte hai toh bahar se access nhi hota just like private ho jata hai 

class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    createId(){ //static createId(){ isme static likhega toh isko sab access nhi kr sakte hai
        return `123`
    }
}
const vishal=new User("vishal")
console.log(vishal.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone =new Teacher("iphone","i@phone.com")
iphone.logMe()
console.log(iphone.createId());