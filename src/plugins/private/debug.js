const setting = JSON.parse(localStorage.getItem("setting"));
let debugCounter = 1;

function debug(message, action, count) {
    if (setting.debug === true) {
        if (action === "error") {
            if(count === true){
                console.error(`${debugCounter}.${message}`);
                debugCounter += 1;
            }else if(count === false){
                console.error(`${message}`);
            }
        } else if (action === "info") {
            if(count === true){
                console.log(`${debugCounter}.${message}`);
                debugCounter += 1;
            }else if(count === false){
                console.log(`${message}`);
            }
        } else if (action === "warn") {
            if(count === true){
                console.warn(`${debugCounter}.${message}`);
                debugCounter += 1;
            }else if(count === false){
                console.warn(`${message}`);
            }
        }
    }
}