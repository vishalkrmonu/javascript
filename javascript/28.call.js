function SetUsername(username){
    //complex DB calls
    this.username=username
    console.log("called");
}

function createUser(username,email,password){
    SetUsername.call(this,username)   //bina this ke username output me nhi aayega
    this.email=email
    this.password=password
}
const chai = new createUser("chai","vishal@gmail.com","123")
console.log(chai);
