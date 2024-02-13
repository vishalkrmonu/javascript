class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }


    get password(){
        return `${this._password}vishal`
    }
    set password(value){
        this._password=value
    }
}
const vishal=new User("vishal@gmail.com","abc")
console.log(vishal.password);
console.log(vishal.email);
