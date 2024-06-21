function enableLanguage() {
    const localData = JSON.parse(sessionStorage.getItem('setting'));
    localData.language[0].enabled = true;
    sessionStorage.setItem('setting', JSON.stringify(localData));
    window.location.reload();
}

(async () => {
    try {
        const [languageResponse, settingResponse, versionResponse] = await Promise.all([
            fetch(`src/language/${navigator.language || navigator.userLanguage}.json`),
            fetch('setting.json'),
            fetch('version.txt')
        ]);

        if (!languageResponse.ok) {
            if (languageResponse.status === 404) {
                languageResponse = await fetch('src/language/en.json');
            } else {
                throw new Error(`Failed to fetch language file: ${languageResponse.status}`);
            }
        }

        const data = await settingResponse.json();
        const version = await versionResponse.text();
        const languageData = await languageResponse.json();
        const existingSetting = JSON.parse(sessionStorage.getItem('setting') || '{}');

        if (!existingSetting.version || existingSetting.version !== version) {
            const setting = { ...data, version, language: languageData };
            sessionStorage.setItem('setting', JSON.stringify(setting));
            window.location.reload();
        }
    } catch (error) {
        console.log(error)
    }
})();