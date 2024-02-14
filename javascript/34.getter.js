class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }


    get password() {
        return `${this._password}vishal`
    }
    set password(value) {
        this._password = value
    }
}
const vishal = new User("vishal@gmail.com", "abc")
console.log(vishal.password);
console.log(vishal.email);


console.log("---properties get set (old version)---");
//properties get set (old version)
function User1(email, password) {
    this._email = email;
    this._password = password
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}
const chai = new User1("chai@gamil.com", "education")
console.log(chai.password);



//object get set
console.log("---object get set---");

const User2 = {
    _email: 'sishal@gmail.com', //private property ke liye underscore use krte hai
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}
const tea = Object.create(User2)
console.log(tea.email);