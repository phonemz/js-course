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