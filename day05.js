let user = false

if (user) {
    console.log('this is a user false statement.')
}
else {
    console.log('this is a user true statement')
}

const score = [10, 20, 0, 30, 100, 24,28,99]

for (let i = 0; i < score.length; i++){
    if (score[i] === 0) {
        
        console.log('its zero')
        continue
        
    }
    if (score[i] === 100) {
        console.log('lets break, its 100')
        break
    }
    console.log('score', score[i])
    
}

const grade = 50

switch (grade) {
    case 'A':
        console.log('The grade is A')
        break
    case 'B':
        console.log('The grade is B')
        break
    case 50:
        console.log('The grade is 50')
        break
    case 'D':
        console.log('The grade is D')
        break
    default:
        console.log('This grade has no value')
}

const age = 20

if (true) {
    let age = 40
    const name = 'hello'
    console.log('inline 1st code block', age, name)
    
    if (true) {
        age = 50
        console.log('inline 2nd block',age)
    }
}

console.log('out of code block',age,name)

