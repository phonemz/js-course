//Class is an object template

class User {
    constructor(name, age) {
        this.username = name
        this.age = age
        this.score = 0
    }
    login() {
        console.log(`${this.username} has log in`)
        return this
    }
    incScore() {
        this.score ++
            console.log(`${this.username} score is ${this.score}`)
        return this
    }
}

class Admin extends User {
    deleteUser(user) {
        array = array.filter((a) => {
            return a.username !== user.username
        })
    }
}


const userOne = new User('pedri', 20)
const userTwo = new User('gavi', 20)
const admin = new Admin('Xavi', 38)

let array = [userOne, userTwo, admin]

console.log(userOne, userTwo, typeof userOne)

userOne.login().incScore().incScore().login()

admin.deleteUser(userTwo)

console.log(array)

