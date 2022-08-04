// localStorage.setItem('name', 'pedri')
// localStorage.setItem('age', 20)

// // let name = localStorage.getItem('name')
// let age = localStorage.getItem('age')
// // console.log(name, age, typeof age)

// localStorage.setItem('name', 'gavi')
// let name = localStorage.getItem('name')
// // console.log(name)

// localStorage.removeItem('name')
// localStorage.clear()

const data = [
    { name: 'pedri', age: 20 },
    { name: 'gavi', age: 20 },
    { name: 'fati', age: 20 }
]

localStorage.setItem('data', JSON.stringify(data))

const storedData = localStorage.getItem('data')
console.log(storedData, typeof storedData)

const arrayData = JSON.parse(storedData)
console.log(arrayData, typeof arrayData)

