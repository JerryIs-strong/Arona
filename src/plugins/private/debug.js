document.addEventListener('DOMContentLoaded', () => {
fetch('/setting.json')
    .then(response => response.json())
    .then(data => {
        const debugInfo = data['debug'];
        let debugCounter = 1;

        function debug(message, action) {
            if (debugInfo === true) {
                if (action === "error") {
                    console.error(`${debugCounter}.${message}`);
                    debugCounter += 1;
                } else if (action === "info") {
                    console.log(`${debugCounter}.${message}`);
                    debugCounter += 1;
                }
            }
        }
    })
    .catch(error => {
        console.error('Error fetching or parsing the setting.json file:', error);
    });
})