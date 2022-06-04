for (let i = 1; i <= 5; i++){
    console.log('hello', i)
}
console.log('Loop Finished')

let name = ['no u turn', 'pink nation', 'the peacists']

for (let i = 0; i < name.length; i++){
    console.log(name[i])
}

let i = 0
while (i <= 5) {
    i++
    console.log('hello', i)
}

let a=0
while (a < name.length) {
    console.log(name[a])
    a++
}

let s = 0
do {
    console.log('hey this number is ', s)
    s++
}
while (s < 8);

const age = 25

if (age > 20) {
    console.log('You are older than 20')
}

let password = 'thi@'

if (password.length >= 12 && password.includes('@')) {
    console.log('Your password is pretty strong')
}
else if (password.length >= 8 && password.includes('@')) {
    console.log('Your password is storng enough')
}
else {
    console.log('Your password is not storng enough, try again.')
}