// const number = [10, 40, 30, 20, 50, 8, 100]

// // const result = number.find(num => {
// //     return num > 30
// // })

// // console.log(result)

// number.sort((a, b) => {
//     if (a > b) {
//         return -1
//     }
// })

const number = [10, 34, 12, 99, 100, 7]

number.sort((a, b) => a - b)

console.log(number)

const products = [
    { product: 'iphone 12 mini', price: 1200 },
    { product: 'pixel 4', price: 1000 },
    { product: 'iphone 13 mini', price: 1400 },
    { product: 'pixel 6', price: 1400 }    
]

// const filter = products.filter(product => product.price > 1000)

// console.log(filter)

// const map = filter.map(product => `The ${product.product} is ${product.price / 2}`)

// console.log(map)

const result = products
    .filter(product => product.price > 1000)
    .map(product => `The ${product.product} is ${product.price / 2}`)

    console.log(result)


