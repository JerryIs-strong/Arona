function getBing() {
    fetch('https://bing.biturl.top')
        .then(response => response.json())
        .then(data => {
            const address = data['url']
            document.getElementById('background').style.backgroundImage = `url(${address})`;
        })
        .catch(error => {
            console.error('Error fetching or parsing the bing-api:', error);
        });
}

getBing()