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

function ChineseDetect(text) {
    const hasEnglish = /[a-zA-Z]/.test(text);

    const hasChinese = /[\u4e00-\u9fa5]/.test(text);

    if (hasEnglish && !hasChinese) { //english
        return false;
    } else if (!hasEnglish && hasChinese) { //chinese
        return true;
    } else {
        return true; //both
    }
}


function showSnackbar(message, duration = 3000, iconType = "fa-regular", iconName = "fa-bell", level = "info", notification_name = language.notification_name) {
    const wrapper = document.getElementById('notification');

    const main = document.createElement('div');
    main.classList.add('notification_wrapper', 'snackbar');

    const iconDiv = document.createElement('div');
    iconDiv.className = "notification_icon";
    const iconElement = document.createElement('i');
    iconElement.classList.add(iconType, iconName);
    iconElement.classList.add("notification_icon");

    const titleDiv = document.createElement('div');
    titleDiv.innerText = notification_name;
    titleDiv.classList.add("notification_title");

    const LevelDiv = document.createElement('div');
    LevelDiv.innerText = level === 'danger' ? language.level_danger : level === 'warn' ? language.level_warn : language.level_info;
    LevelDiv.style.backgroundColor = level === 'danger' ? '#d57079' : level === 'warn' ? 'rgb(145, 112, 52)' : 'rgb(52, 118, 145)';
    LevelDiv.classList.add("notification_level");

    const title = document.createElement('div');
    title.classList.add('snackbar_title_sub');

    const title_top = document.createElement('div');
    title_top.classList.add('snackbar_title');

    const snackbar = document.createElement('div');
    snackbar.classList.add('notification_main');

    const contentDiv = document.createElement('div');
    contentDiv.className = 'notification_content';
    contentDiv.innerHTML = message;
    contentDiv.style.setProperty('--scroll-time', (duration / 1000) - 1 + 's');

    if (ChineseDetect(message) == true) {
        if (message.length > 13) {
            contentDiv.classList.add("mobile-scroll")
        } else {
            snackbar.classList.add("mobile-center")
        }
    } else {
        if (message.length > 25) {
            contentDiv.classList.add("mobile-scroll")
        } else {
            snackbar.classList.add("mobile-center")
        }
    }

    snackbar.appendChild(contentDiv);
    title.appendChild(iconElement);
    title.appendChild(titleDiv);
    title_top.appendChild(title);
    title_top.appendChild(LevelDiv);
    main.appendChild(title_top);
    main.appendChild(snackbar);
    wrapper.appendChild(main);
    main.classList.add('snackbar-show');

    setTimeout(function () {
        main.classList.remove('snackbar-show');
        main.classList.add('snackbar-hide');
        setTimeout(function () {
            wrapper.removeChild(main);
        }, 300);
    }, duration);
}

styleInfo("Arona version", version, "#4d6491", "#fff");
if (!debugInfo) {
    styleInfo("Log process:", "disabled", `#d280e5`, "#fff");
}