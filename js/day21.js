console.log(1)
console.log(2)

const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        
        if (request.readyState === 4 && request.status === 200) {
            const jsData = JSON.parse(request.responseText)
            callback('error', jsData)
        }
        else if (request.readyState === 4) {
            callback('this is error','this is data')
        }
        // else {
        //     callback('hello','world')
        // }
    })
    
    request.open('GET', resource)
    request.send()
}

// getTodos('js/data.json',(err, data) => {
//     console.log(err, data)
// })


console.log(3)
console.log(4)

