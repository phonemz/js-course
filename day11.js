const copy = document.querySelector('.copy')

// copy.addEventListener('copy', () => {
//     copy.textContent = 'HI I AM COPIED'
//     // console.log('it is copied')
// })

// const button = document.querySelector('button')

// button.addEventListener('mouseup', () => {
//     button.style.background = 'red'
// })

// const box = document.querySelector('.box')

// box.addEventListener('mouseover', e => {
//     box.textContent = `${e.offsetX}, ${e.offsetY}`
// })

// document.addEventListener('wheel', e => {
//     const copy = document.querySelector('.copy')
//     copy.style.color = 'red'
// })

const popupBtn = document.querySelector('.popup-Btn')
const popup = document.querySelector('.popup')
const close = document.querySelector('.close')

popupBtn.addEventListener('click', () => {
    popup.style.display = 'block'
    // console.log('hello')
})

close.addEventListener('click', () => {
    popup.style.display = 'none'
})