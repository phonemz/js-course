const error = document.querySelectorAll('div.error')

error.forEach(errorSingle => {
    console.log(errorSingle)
})

const content = document.querySelector('.content')
console.log(content.innerHTML)
content.innerHTML = '<h2 class="contentNew"> This is a H2 now </h2>'

const contentNew = document.querySelector('.contentNew')
contentNew.innerText = 'This is not a H2'

const people = ['thet mhue', 'hsu lay', 'theint']

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})