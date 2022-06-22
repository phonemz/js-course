const numbers = ['10', '20', '30', '40', '50', '60']

const filterNumber = numbers.filter(number => {
    return number > 30
})

console.log(numbers.filter((number => {
    return number > 30
})))

console.log(filterNumber)

const SVs = [
    { name: 'jared', premium: true },
    { name: 'richard', premium: true },
    { name: 'gilfoyle', premium: true },
    { name: 'gavin', premium: false }
]

const filterSV = SVs.filter(sv => {
    return sv.premium
})

filterSV.forEach(sv => {
    console.log(sv)
})

const mapNumber = numbers.map(number => {
    return number / 2
})

console.log(mapNumber)

const products = [
        { product: 'iphone 12 mini', price: 1200 },
        { product: 'pixel 4', price: 1000 },
        { product: 'iphone 13 mini', price: 1400 },
        { product: 'pixel 6', price: 1400 }    
]

const mapProduct = products.map(product => {
    if (product.price >= 1200) {
        return {product: product.product, price: product.price /2}
        
    }
    else {
        return product
    }
})

mapProduct.forEach(product => {
    console.log(product)
})

const reduceNum = [10, 20, 30, 50, 70, 90, 100]

const result = reduceNum.reduce((count, number) => {
    if (number > 50) {
        count++
    }
    return count
}, 2)

console.log (result)