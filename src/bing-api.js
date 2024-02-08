function getBing() {
    fetch('https://bing.biturl.top')
        .then(response => response.json())
        .then(data => {
            const address = data['url']
            document.getElementById('background').style.backgroundImage = `url(${address})`;
        })
}