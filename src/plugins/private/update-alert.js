const fetchAndCompareVersion = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/JerryIs-strong/Arona/main/version.txt');
        const text = await response.text();
        const cloudVersion = text.match(/V([\d.]+)/)[1];
        const localVersion = setting['version'].match(/V([\d.]+)/)[1];

        const compareVersions = (localVersion, cloudVersion) => {
            const localArrs = localVersion.split('.').map(Number);
            const cloudArrs = cloudVersion.split('.').map(Number);
            for (let i = 0; i < Math.max(localArrs.length, cloudArrs.length); i++) {
                const localNumber = localArrs[i] || 0;
                const cloudNumber = cloudArrs[i] || 0;
                if (localNumber < cloudNumber) {
                    return true;
                } else if (localNumber > cloudNumber) {
                    return false;
                }
            }
            return false;
        };

        if (compareVersions(localVersion, cloudVersion)) {
            styleInfo("New version available", text, "#b1a968", "#FFF");
        }
    } catch (error) {
        console.error('Error fetching or parsing the version.txt:', error);
    }
};

fetchAndCompareVersion();