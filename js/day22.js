const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        
        if (request.readyState === 4 && request.status === 200) {
            const jsData = JSON.parse(request.responseText)
            resolve (jsData)
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
    console.log('hello this is resoloved', data)
    return getTodos('js/local.json')
}).then(data2 => {
    console.log('hello 2 this is resolved', data2)
    return getTodos('js/lemon.json')
}).then(data3 => {
    console.log('hello 3 this is resovled', data3)
}).catch(error => {
    console.log('sorry this is rejected')
})

fetch('js/data.json').then((response) => {
    console.log('resoleved', response)
    return response.json()
}).then(data => {
    console.log(data)
}).catch(error => {
    console.log("This is error")
})

