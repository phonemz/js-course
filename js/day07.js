let car = {
    color: 'white',
    whe: '4',
    type: 'auto',
    brand: 'audi',
    drive: function () {
        console.log('forward');
    },
    carArray: [
        {
        title: 'This is a title one',
        likes: 10,
        },
        {
        title: 'This is a title two',
        likes: 20,
        }
    ],
    carMethod: function () {
        console.log('The cars are')
        this.carArray.forEach(singleCar => {
            console.log(singleCar.title, singleCar.likes)
        })
    }
}

console.log(car.color)
console.log(car['type'])
console.log(typeof car)

car.drive()
car.carMethod()

// const blog = [
//     {
//         title: 'This is a title one',
//         likes: 10,
//     },
//     {
//         title: 'This is a title two',
//         likes: 20,
//     }
// ]

console.log(Math)
console.log(Math.random())

const random = Math.random()
console.log(Math.round(random))

const randomNumber = 4.631
console.log(Math.floor(randomNumber))
console.log(Math.ceil(randomNumber))
console.log(Math.trunc(randomNumber))

