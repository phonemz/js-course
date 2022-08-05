class User {
    constructor(name, age) {
        this.username = name
        this.age = age
    }
}

//Class is an object template

const userOne = new User('pedri', 20)
const userTwo = new User('gavi', 20)

console.log(userOne, userTwo, typeof userOne)

