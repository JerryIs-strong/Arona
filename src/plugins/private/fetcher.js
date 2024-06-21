// Load language data
async function loadLanguageData(languageCode) {
    try {
        const response = await fetch(`src/language/${languageCode}.json`);
        if (response.ok) {
            return await response.json();
        } else if (response.status === 404) {
            return loadLanguageData('en'); // Fall back to English
        } else {
            throw new Error(`Failed to fetch language file: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching language file:', error);
        return loadLanguageData('en'); // Fall back to English
    }
}

// Load setting and version data
async function loadSettingAndVersion() {
    try {
        const [settingResponse, versionResponse] = await Promise.all([
            fetch('setting.json'),
            fetch('version.txt')
        ]);

        const data = await settingResponse.json();
        const version = await versionResponse.text();
        return { ...data, version };
    } catch (error) {
        debugInfo(error, "error");
        return null;
    }
}

// Enable language
function enableLanguage() {
    const localData = JSON.parse(sessionStorage.getItem('setting')) || {};
    localData.language = localData.language || [];
    language = { ...language, enabled: true };
    sessionStorage.setItem('setting', JSON.stringify(localData));
}

// Check for version update and load data
async function checkVersionAndLoadData() {
    const userLang = navigator.language || navigator.userLanguage;
    const languageData = await loadLanguageData(userLang);
    const settingAndVersion = await loadSettingAndVersion();

    if (settingAndVersion) {
        const { version, ...settingData } = settingAndVersion;
        const existingSetting = JSON.parse(sessionStorage.getItem('setting') || '{}');

        if (!existingSetting.version || existingSetting.version !== version) {
            const setting = { ...settingData, version, language: languageData };
            sessionStorage.setItem('setting', JSON.stringify(setting));
        } else {
            const localData = { ...existingSetting, language: languageData };
            sessionStorage.setItem('setting', JSON.stringify(localData));
        }
    }
}

// Initialize
checkVersionAndLoadData();