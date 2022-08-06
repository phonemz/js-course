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

//Class is an object template

const userOne = new User('pedri', 20)
const userTwo = new User('gavi', 20)

console.log(userOne, userTwo, typeof userOne)

userOne.login().incScore().incScore().login()