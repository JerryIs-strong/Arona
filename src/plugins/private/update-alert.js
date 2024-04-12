fetch('https://raw.githubusercontent.com/JerryIs-strong/personal-webpage/main/version.txt')
    .then(response => response.text())
    .then((text) => {
        const cloudVersion = text.match(/V([\d.]+)/)[1];
        const localVersion = setting['version'].match(/V([\d.]+)/)[1];
        function compareVersions(localVersion, cloudVersion) {
            const localArrs = localVersion.split('.');
            const cloudArrs = cloudVersion.split('.');
            for (let i = 0; i < localArrs.length; i++) {
                const localNumber = parseInt(localArrs[i]);
                const cloudNumber = parseInt(cloudArrs[i]);
                if (localNumber > cloudNumber) {
                    return false;
                } else if (localNumber < cloudNumber) {
                    return true;
                }
            }
            return false;
        }
        if (compareVersions(localVersion, cloudVersion)) {
            styleInfo("New version available", cloudVersion, "#b1a968", "#FFF");
        }
    })
    .catch(error => {
        console.error('Error fetching or parsing the version.txt:', error);
    });