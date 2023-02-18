function changeImage() {
    let displayImage = document.getElementById('image1')
    if (displayImage.src.match('./assets/btn.png')) {
        displayImage.src = './assets/anuncio.png'
    } else {
        displayImage.src = './assets/btn.png'

    }
}



