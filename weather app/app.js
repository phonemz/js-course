const cityForm = document.querySelector('form')

const updateCity = async (name) => {
    console.log(name)
}

// function updateCity(hello) {
//     console.log(hello)
// }

cityForm.addEventListener('submit', e => {
    e.preventDefault()

    const city = cityForm.city.value.trim()
    cityForm.reset()

    updateCity(city)
})