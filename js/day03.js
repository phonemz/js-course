let title = 'Best reads of 2019'
let author = 'Mario'
let likes = 30

//string concatenation
/*let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes '
console.log(result)*/

//template string
let result = `The blog called ${title} by ${author} has ${likes} likes.`
console.log(result)

//creating html remplate with template string
let html = `<h2> ${title} </h2>
<p> ${author} </p>
<span> This blog has ${likes} likes </span>`
console.log(html)

let ninja = ['ninja1', 'ninja2', 'ninja3']
ninja[1]= 'hello'
console.log(ninja[1])

let number = [100, 200, 300]
console.log(number[2])

let random = ['ninja', 200, 300]
console.log(random[2])

console.log(ninja.length)

//array methods

console.log(ninja.join('--'))

// let ninjaResult = ninja.indexOf('hello')
// console.log(ninjaResult)

console.log(ninja.concat(['sunset', 'rollarcoaster']))

// let ninjaResult = ninja.push('world')
let ninjaResult = ninja.pop()
console.log(ninjaResult)

//Null
let age = null
console.log(age, age + 3, `The age is ${age}`)

//Undefined
let newAge
console.log(newAge, newAge + 3, `The age is ${newAge}`)

console.log("hello", "true", true)

let booleanText = 'helloworld'

let booleanCheck = booleanText.includes('a')
console.log(booleanText.includes('o'))

let booleanNumber = 25

console.log(booleanNumber == 30)
console.log(booleanNumber != 25)
console.log(booleanNumber > 40)
console.log(booleanNumber < 40)
console.log(booleanNumber >= 40)
console.log(booleanNumber <= 40)

let booleanName = 'Shaun'

console.log(booleanName == 'Shaun')
console.log(booleanName == 'shaun')
console.log(booleanName > 'haun')
console.log(booleanName < 'shaun')

//strcit comparison
let booleanStrict = '25'
console.log(booleanStrict == 25)
console.log(booleanStrict == '25')
console.log(booleanStrict === 25)

let score = '100'
score = Number(score)
console.log(score + 1, typeof (score))

// let typeConvert = Number('hello')
// let typeConvert = String(100)
// let typeConvert = Boolean('0')
console.log(typeConvert, typeof typeConvert)

