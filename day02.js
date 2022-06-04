//String
let word = 'hello,world'

//String Concatenation
let firstName = 'Hello'
let lastName = 'World'

let fullName = firstName + ' ' + lastName
console.log(fullName)

//getting characters
console.log(fullName[0])

//strings length
console.log(fullName.length)
let findLength = fullName.length
console.log(findLength)

//string method
console.log(fullName.toUpperCase)
console.log(fullName.toLowerCase)

let index = word.indexOf('o')
console.log(index)

let text = 'helloworld@mail.com'

console.log(text.lastIndexOf('o'))
console.log(text.slice(0, 10))
console.log(text.replace('o', 'a'))

let r = 10
const pi = 3.14

//operation order B I D M A S

console.log(r / 2)
console.log(r % 3)
console.log(pi * r ** 2)
console.log(5 * (10 - 3) ** 2)

let likes = 10
//shorthand operation
likes = likes + 2
likes++
likes--
likes += 20
likes -= 4
likes *= 2
likes /= 2
console.log(likes)

let res = 'the blog has ' + likes + ' likes';
console.log(res)
console.log(typeof (res))
