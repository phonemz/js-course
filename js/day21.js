console.log(1)
console.log(2)

const getTodos = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback('error','data')
        }
        else if (request.readyState === 4) {
            callback('this is error','this is data')
        }
        // else {
        //     callback('hello','world')
        // }
    })
    
    request.open('GET', 'https://jsonplaceholder.cypress.io/todos/')
    request.send()
}

getTodos((err, data) => {
    console.log(err, data)
})


console.log(3)
console.log(4)