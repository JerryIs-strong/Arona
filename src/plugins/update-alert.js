styleInfo("Welcome to", "update-alert", "rgb(60 185 235)", "#fff");
fetch('https://raw.githubusercontent.com/JerryIs-strong/personal-webpage/main/version.txt')
    .then(response => response.text())
    .then((text) => {
        const cloudlArrs = text;
        const localVersion = setting['version'];

        function compareVersions(localVersion, cloudVersion) {
            // Extract the version numbers from the strings
            const localArrs = localVersion.split('.');
            const cloudlArrs = cloudVersion.split('.');

            // Compare each component of the version numbers
            for (let i = 0; i < localArrs.length; i++) {
                var localNumber = parseInt(localArrs[i]);
                var cloudNumber = parseInt(cloudlArrs[i]);

                if (localNumber > cloudNumber) {
                    return false;
                } else if (localNumber < cloudNumber) {
                    return true;
                }
            }

            // If all components are equal, the versions are the same
            return false;
        }

        if (compareVersions(localVersion, cloudlArrs)) {
            styleInfo("New version available:", cloudlArrs, "#b1a968", "#FFF")
        }
    })
    .catch(error => {
        console.error('Error fetching or parsing the version.txt:', error);
    });