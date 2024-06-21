(async () => {
    try {
        const userLang = navigator.language || navigator.userLanguage;
        console.log(userLang);
        let languageResponse;

        try {
            languageResponse = await fetch(`src/language/${userLang}.json`);

            if (!languageResponse.ok) {
                if (languageResponse.status === 404) {
                    languageResponse = await fetch('src/language/en.json');
                } else {
                    throw new Error(`Failed to fetch language file: ${languageResponse.status}`);
                }
            }
        } catch (error) {
            console.error('Error fetching language file:', error);
            languageResponse = await fetch('src/language/en.json');
        }

        const [settingResponse, versionResponse] = await Promise.all([
            fetch('setting.json'),
            fetch('version.txt')
        ]);

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
        console.log(error, "error")
    }
})();