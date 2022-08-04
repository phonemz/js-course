const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const detail = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

function updateUI(hi) {
    const {cityName, weatherInfo} = hi

    detail.innerHTML = 
        `   <h5 class="my-3">${cityName.EnglishName}</h5>
            <div class="my-3">${weatherInfo.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weatherInfo.Temperature.Metric.Value}</span>
                <span>&deg; C</span>
            </div>
        `
    
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }

    let timeSrc = weatherInfo.IsDayTime ? 'img/day.jpg' : 'img/night.jpg'

    time.setAttribute('src', timeSrc)

    let iconSrc = 
    `img/icons/${weatherInfo.WeatherIcon}.svg`
    icon.setAttribute('src',iconSrc)
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