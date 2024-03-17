const debugInfo = setting.debug;
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