//arrow function

// const findArea = (radius) => {
//     let area = 3.14 * radius ** 2
//     return area
// }

const findArea = radius => 3.14 * radius ** 2

// const findArea = function (radius) {
//     let area = 3.14 * radius ** 2
//     return area
// }

const area = findArea(5)
console.log(area)

// const greet = function () {
//     return 'hello, world'
// }

const greet = () => 'hello,world 2'

const greeting = greet()
console.log(greeting)

const array = [10, 20, 30]

for (let i = 0; i < array.length; i++){
    console.log('hello' + array[i])
}

//functions and mehtods

const sayHi = () => 'hello'

const hello = sayHi()
console.log(hello)

// methods 

const change = hello.toUpperCase()
console.log(change)

//callbacks function and forEach

let people = ['phone', 'nway', 'myint', 'nway']

const logPerson = (person, index) => {
    console.log(`${index} is ${person}`)
}

people.forEach(logPerson)

let html = ``;

people.forEach(function (person) {
    
    html += `<li style="color : purple">${person}</li>`
})

console.log(html)

const ul = document.querySelector('.people')

ul.innerHTML = html;

