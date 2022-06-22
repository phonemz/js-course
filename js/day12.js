const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', e => {
    e.preventDefault();
    const submitName = form.username.value
    const pattern = /^[a-zA-Z0-9]{6,15}$/
    if (pattern.test(submitName)) {
        feedback.textContent = 'Username is Valid'
    }
    else {
        feedback.textContent = 'Please use characters between a-z and 0-9 and 6 to 15 characters only'
    }
})

form.username.addEventListener('keyup', e => {
    if (pattern.test(e.target.value)) {
        e.target.style.color = 'green' }
    else {
        e.target.style.color = 'red'
    }
})



//Regular Expression - Regex

const name = 'steven'
const pattern = /^[a-zA-Z0-9]{6,15}/

const result = pattern.test(name)
console.log(result)