const debugInfo = setting.debug;

function styleInfo(message1, message2, primary_color, second_color) {
    console.log(
        `%c${message1}%c${message2}`,
        `background-color: ${primary_color}; color: ${second_color}; padding: 5px`,
        `background-color: ${second_color}; color: ${primary_color}; padding: 5px`
    );
}

function debug(DebugMessage, action = 'info') {
    if (debugInfo) {
        styleInfo(`${action}`, DebugMessage, `${action === 'error' ? '#d57079' : action === 'warn' ? '#e5c07b' : '#6eaf91'}`, "#fff");
    }
}

function showSnackbar(message, scroll = true, duration = 3000, color = "#4388d9", iconType = "fa-regular", iconName = "fa-bell") {
    const wrapper = document.getElementById('notification');
    const snackbar = document.createElement('div');
    snackbar.classList.add('notification_wrapper', 'snackbar');
    snackbar.style.backgroundColor = color;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'notification_content';
    contentDiv.innerHTML = message;
    contentDiv.style.setProperty('--scroll-time', (duration / 1000) - 1 + 's');
    if (scroll) {
        contentDiv.classList.add("mobile-scroll")
    } else {
        contentDiv.classList.add("mobile-center")
    }

    const iconDiv = document.createElement('div');
    iconDiv.className = "notification_icon";
    const iconElement = document.createElement('i');
    iconElement.classList.add(iconType, iconName);

    iconDiv.appendChild(iconElement);
    snackbar.appendChild(iconDiv);
    snackbar.appendChild(contentDiv);
    wrapper.appendChild(snackbar);
    snackbar.classList.add('snackbar-show');

    setTimeout(function () {
        snackbar.classList.remove('snackbar-show');
        snackbar.classList.add('snackbar-hide');
        setTimeout(function () {
            wrapper.removeChild(snackbar);
        }, 300);
    }, duration);
}

styleInfo("Arona version", version, "#4d6491", "#fff");
if (!debugInfo) {
    styleInfo("Log process:", "disabled", `#d280e5`, "#fff");
}