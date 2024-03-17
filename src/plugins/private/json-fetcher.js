fetch('/setting.json')
    .then(response => response.json())
    .then(data => {
        if(localStorage.getItem('setting') == "" || localStorage.getItem('setting') == null){
            localStorage.setItem('setting', JSON.stringify(data));
            window.location.reload();
        }else{
            localStorage.setItem('setting', JSON.stringify(data));
        }
    })
    .catch(error => {
        console.error('Error fetching or parsing the setting.json file:', error);
    });