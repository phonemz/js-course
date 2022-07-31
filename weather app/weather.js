const key = 'w4fI6V8vrzna8vfaOGaZT0lWXFqRS7J8'

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0]
}

getCity('manchester')
    .then(data => console.log(data))
    .catch(error => console.log('error'))