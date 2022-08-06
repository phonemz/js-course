const button = document.querySelector('button')
const colorBox = document.querySelector('.color-box')

button.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6d11325b9dmshd1e9b0dacb4fabfp14350bjsn1efc98472941',
            'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com'
        }
    };
    
    fetch('https://random-palette-generator.p.rapidapi.com/palette/10/3', options)
        .then(response => response.json())
        .then(colorCode => changeColor(colorCode.data[0].palette[0]))
        .catch(err => console.error(err));
})

function changeColor(colorCode) {
    const background = `background : ${colorCode}`
    
    colorBox.setAttribute('style', background)
    console.log(colorCode)
}