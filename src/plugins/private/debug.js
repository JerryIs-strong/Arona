const debugInfo = setting.debug;
let debugCounter = 1;

function debug(message, action = 'info') {
    if (debugInfo === true) {
        console.log(`%c${debugCounter}. ${message}`, `color: ${action === 'error' ? 'red' : 'black'}`);
        debugCounter += 1;
    }
}