(async () => {
    try {
        const response = await fetch('setting.json');
        const data = await response.json();
        if (localStorage.getItem('setting') == null) {
            localStorage.setItem('setting', JSON.stringify(data));
            const response = await fetch('/version.txt');
            const text = await response.text();
            const setting = JSON.parse(localStorage.getItem('setting'));
            setting['version'] = text;
            localStorage.setItem('setting', JSON.stringify(setting));
            window.location.reload();
        } else {
            localStorage.setItem('setting', JSON.stringify(data));
            const response = await fetch('version.txt');
            const text = await response.text();
            const setting = JSON.parse(localStorage.getItem('setting'));
            setting['version'] = text;
            localStorage.setItem('setting', JSON.stringify(setting));
        }
    } catch (error) {
        showSnackbar("The dataset may be corrupted", 10000, "#d55757", "fa-solid", "fa-bomb");
    }
})();