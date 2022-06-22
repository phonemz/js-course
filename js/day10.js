const button = document.querySelector('button')

const ul = document.querySelector('ul')

button.addEventListener('click', () => {
    const newLi = document.createElement('li')
    newLi.textContent = 'Another brick in the wall'
    ul.append(newLi)
})

const list = document.querySelectorAll('li')

list.forEach(li => {
    li.addEventListener('click', e => {
        e.target.style.color = 'red'
        // e.stopPropagation();
    })
})

//Event Bubbling and delegation
ul.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'green'
    }
})



