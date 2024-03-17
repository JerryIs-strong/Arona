document.addEventListener('DOMContentLoaded', () => {
    fetch('/setting.json')
        .then(response => response.json())
        .then(data => {
            const pluginsList = data['plugins'];
            if(pluginsList != null || pluginsList != "" || pluginsList != false){
                Object.keys(pluginsList).forEach(key => {
                    const pluginName = pluginsList[key]
                    var script = document.createElement('script');
                    script.src = `./src/plugins/${pluginName}.js`;
                    document.body.appendChild(script);
                });
            };
            console.log(
                `%c已安裝的組件:%c${pluginsList}`,
                'background-color: #f39898; color: #fff; padding: 5px',
                'background-color: #fff; color: #f39898; padding: 5px'
            );
        })
        .catch(error => {
            console.error('Error fetching or parsing the setting.json file:', error);
        });
})