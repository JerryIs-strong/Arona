fetch('/setting.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('setting', JSON.stringify(data));
    })
    .catch(error => {
        console.error('Error fetching or parsing the setting.json file:', error);
    });