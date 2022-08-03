const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const detail = document.querySelector('.details')

function updateUI(hi) {
    const name = hi.cityName
    const weather = hi.weatherInfo

    detail.innerHTML = 
        `   <h5 class="my-3">${name.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg; C</span>
            </div>
        `
    
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}

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
        .then(data => updateUI(data))
        .catch(error => updateUI(error))
})