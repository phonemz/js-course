function User(username, age) {
    this.username = username
    this.age = age
    this.score = 0
    this.incScore = function() {
        this.score ++
        console.log(`${this.username} score is ${this.score}`)
        return this
    }
}

User.prototype.login = function () {
    console.log(`${this.username} has log in`)
         return this
}

function Admin(username, age, title) {
    User.call(this, username, age)
    this.title = title
}

Admin.prototype = new Object (User)

const userOne = new User('pedri', 20)
const userTwo = new User('gavi', 20)
const admin = new Admin('xavi', 35, 'manager')
console.log(userOne, userTwo, admin)