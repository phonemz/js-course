const cityForm = document.querySelector('form')

const updateCity = async (name) => {
    const cityName = await getCity(name)
    const weatherInfo = await getWeatherInfo(cityName.Key)
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