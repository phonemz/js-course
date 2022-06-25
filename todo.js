

const addForm = document.querySelector('.add')

addForm.addEventListener('submit', e => {
    e.preventDefault()
    const todo = addForm.add.value
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
})

const deleteButton = document.querySelectorAll('.delete')

deleteButton.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', e => {
        e.target.parentElement.remove()
    })
})