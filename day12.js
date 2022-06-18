const form = document.querySelector('.signup-form')

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(form.username.value)
})

const name = 'steven'
const pattern = /^[a-zA-Z0-9]{6,}/

const result = pattern.test(name)
console.log(result)