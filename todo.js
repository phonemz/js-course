const addForm = document.querySelector('.add')

addForm.addEventListener('submit', e => {
    e.preventDefault()
    const input = document.querySelector('.input')
    const todo = input.value
    const ul = document.querySelector('.todos')
    const li = document.createElement('li')
    li.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    const span = document.createElement('span')
    span.textContent = todo
    li.appendChild(span)
    ul.appendChild(li)
    const trashBtn = document.createElement('i')
    trashBtn.classList.add('fas', 'fa-trash-alt', 'delete')
    li.appendChild(trashBtn)
    input.value = ''
})

const list = document.querySelector('ul')

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove()
    }
})