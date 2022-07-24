console.log(1)
console.log(2)

setTimeout(() => {
    console.log('This is a async js function')
}, 2000);
console.log(3)
console.log(4)

// const request = new XMLHttpRequest()



// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log( request.responseText)
//     }
//     else if (request.readyState === 4) {
//         console.log('could not fetch the data')
//     }
//     else {
//         console.log('Something went wrong')
//     }
// })

// request.open('GET', 'https://jsonplaceholder.cypress.io/todos/')
// request.send();;/