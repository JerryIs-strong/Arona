fetch('setting.json')
    .then(response => response.json())
    .then(data => {
        if (localStorage.getItem('setting') == null) {
            localStorage.setItem('setting', JSON.stringify(data));
            fetch('/version.txt')
                .then(response => response.text())
                .then((text) => {
                    const setting = JSON.parse(localStorage.getItem('setting'));
                    setting['version'] = text;
                    localStorage.setItem('setting', JSON.stringify(setting));
                })
                .catch(error => {
                    console.error('Error fetching or parsing the version.txt:', error);
                });
            window.location.reload();
        } else {
            localStorage.setItem('setting', JSON.stringify(data));
            fetch('/version.txt')
                .then(response => response.text())
                .then((text) => {
                    const setting = JSON.parse(localStorage.getItem('setting'));
                    setting['version'] = text;
                    localStorage.setItem('setting', JSON.stringify(setting));
                })
                .catch(error => {
                    console.error('Error fetching or parsing the version.txt:', error);
                });
        }
    })
    .catch(error => {
        console.error('Error fetching or parsing the setting.json file:', error);
    });
