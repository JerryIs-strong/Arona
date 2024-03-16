fetch('https://github.com/JerryIs-strong/personal-webpage/blob/main/version.txt')
    .then(response => response.text())
    .then((text) => {
        const onlineVersion = text.replace("V", "");
        const localVersion = localStorage.getItem("version").replace("V", "");
        if (localVersion < onlineVersion) {
            debug("New version available: " + onlineVersion, "info");
        };
    })
    .catch(error => {
        console.error('Error fetching or parsing the version.txt:', error);
    });