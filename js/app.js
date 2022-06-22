const form = document.querySelector('.quiz-form')
const correctAnswer = ['right', 'right', 'right', 'right']
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault()
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    let score = 0

    userAnswer.forEach((answer, index) => {
        
        if (answer === correctAnswer[index]) {
            score += 25
        }

        
    })

    let output = 0
    const timer = setInterval(() => {
        result.textContent = `Your score is ${output}`
        if (output === score) {
            clearInterval(timer)
        }
        else {
            output++
        }
    }

    ,10)

   
})

//window is the global object

// setTimeout(() => {
//     alert("Hello, Here we go");
// }, 3000);