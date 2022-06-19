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

    result.textContent = `Your score is ${score}`
   
})