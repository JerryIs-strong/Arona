const debugInfo = setting.debug;
let debugCounter = 1;

function styleInfo(message1, message2, primary_color, second_color) {
    console.log(
        `%c${message1}%c${message2}`,
        `background-color: ${primary_color}; color: ${second_color}; padding: 5px`,
        `background-color: ${second_color}; color: ${primary_color}; padding: 5px`
    );
}

function debug(DebugMessage, action = 'info') {
    if (debugInfo) {
        let message;
        if (action === 'error') {
            message = `Error: ${DebugMessage}`;
        } else if (action === 'warn') {
            message = `Warning: ${DebugMessage}`;
        } else if (action === 'info') {
            message = `Info: ${DebugMessage}`;
        } else {
            message = DebugMessage;
        }
        styleInfo(debugCounter, message, `${action === 'error' ? '#d57079' : action === 'warn' ? '#e5c07b' : '#6eaf91'}`, "#fff");
        debugCounter += 1;
    }
}

styleInfo("Personal-webpage", version, "#4d6491", "#fff");
if (!debugInfo) {
    styleInfo("Log process:", "disabled", `#d280e5`, "#fff");
}