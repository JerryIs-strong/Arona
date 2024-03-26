document.addEventListener('DOMContentLoaded', async () => {
    try {
        const pluginsList = setting['plugins'];
        if (pluginsList != null && pluginsList != '' && pluginsList != false) {
            Object.keys(pluginsList).forEach((key) => {
                const pluginName = pluginsList[key];
                const script = document.createElement('script');
                script.src = `./src/plugins/${pluginName}.js`;
                document.body.appendChild(script);
            });
            styleInfo("已安裝的組件:", pluginsList, "#f39898", "#fff");
        }
    } catch (error) {
        console.error('Error fetching or parsing the setting.json file:', error);
    }
});