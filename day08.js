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

const link = document.querySelector('a')
console.log(link.getAttribute('href'))
link.setAttribute('href', 'https://instagram.com')
link.innerText = 'Instagram'

const text = document.querySelector('.day09_error')
console.log(text.getAttribute('class'))
text.setAttribute('class', 'success')
text.setAttribute('style', 'color : green')
text.innerText = 'This is a success message'

const header = document.querySelector('h1')
header.style.color = 'red'
header.style.fontSize = '100px'

const day09 = document.querySelectorAll('div.day09 > p')

day09.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error')
    }
    if (p.innerText.includes('success')) {
        p.classList.add('success')
    }
})