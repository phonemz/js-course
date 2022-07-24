console.log(1)
console.log(2)

const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        
        if (request.readyState === 4 && request.status === 200) {
            const jsData = JSON.parse(request.responseText)
            resolve ('this is resolved:' ,jsData)
        }
        else if (request.readyState === 4) {
            reject ('this is rejected')
        }
        // else {
        //     callback('hello','world')
        // }
    })
    
    request.open('GET', resource)
    request.send()
})
    
    
}

getTodos('js/data.json').then(data => {
    console.log('hello this is resolved', data)
}).catch(error => {
    console.log('sorry this is rejected', error)
})




console.log(3)
console.log(4)

