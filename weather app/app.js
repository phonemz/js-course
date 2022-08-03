const cityForm = document.querySelector('form')

const updateCity = async (name) => {
    const cityName = await getCity(name)
    const weatherInfo = await getWeatherInfo(cityName.Key)

    return {
        cityName,
        weatherInfo
    }
}

// function updateCity(hello) {
//     console.log(hello)
// }

cityForm.addEventListener('submit', e => {
    e.preventDefault()

    const city = cityForm.city.value.trim()
    cityForm.reset()

    updateCity(city)
        .then(data => console.log(data))
        .catch(error => console.log(err))
})