document.addEventListener('DOMContentLoaded', () => {
    const settings = JSON.parse(sessionStorage.getItem('setting'));
    const { profile, SEO, links, display, alert } = settings;
    const { skills } = profile;
    const { github_icon, music } = display.share;
    const notificationElement = document.querySelector('.notification');
    const observer = new MutationObserver((mutations) => {
        if (notificationElement.children.length === 0) {
            document.querySelector('.aplayer-body').setAttribute('show', 'true');
        } else {
            document.querySelector('.aplayer-body').setAttribute('show', 'false');
        }
    });
    const titleSettings = settings.display.title;
    initializeProfile(profile, music, display, SEO, settings.plugins, titleSettings);
    initializeLinks(links);
    initializeSkills(skills);
    if (music.enabled && github_icon.enabled) {
        initializeGithubIcon(github_icon, true);
        infiniteLoop();
    } else if(github_icon.enabled){
        initializeGithubIcon(github_icon);
    }
    if (alert.enabled) {
        if (alert.https) {
            if (window.location.protocol === 'https:') {
                showSnackbar('You\'re browsing with https:// protocol, the connection is safe!', true, 8000, "fa-solid", "fa-lock");
            } else {
                showSnackbar('It seems that you are not browsing using the https:// protocol. Your connection may be not secure!', true, 10000, "fa-solid", "fa-lock-open", "warn");
            }
        }
        initializeAlert(alert.data)
    } else {
        debug("彈幕通知已禁用", "info")
        document.getElementById('notification').remove();
    }
    if (!display.blur) {
        document.body.style.setProperty('--global-blur', 'blur(0)');
    }
    observer.observe(notificationElement, { childList: true });
});

function createLink(id, className, target, title, url, linkName) {
    const LinkBtn = document.createElement('a');
    LinkBtn.id = id;
    LinkBtn.className = className;
    LinkBtn.target = target;
    LinkBtn.title = title;
    LinkBtn.setAttribute('alt', title)
    if (url) {
        LinkBtn.href = url;
    }
    LinkBtn.setAttribute('l-name', linkName);
    return LinkBtn;
}

function createSkills(name, breath) {
    const skillBtn = document.createElement('i');
    const styleTemp = "fa-brands fa-";
    skillBtn.className = `${styleTemp}${name} skill-icon${breath ? ' skill-breath' : ''}`;
    return skillBtn;
}

const shareElement = document.getElementById("share");
let shareCounter = 0;

function infiniteLoop() {
    setTimeout(() => {
        shareElement.scrollTop = shareCounter === 0 ? 100 : 0;
        shareCounter = shareCounter === 0 ? 1 : 0;
        infiniteLoop();
    }, 6500);
}

function greetUser(settings) {
    const currentHour = new Date().getHours();
    const greetings = {
        morning: settings.morning || "Good morning!☕",
        afternoon: settings.afternoon || "Good afternoon!🌤️",
        evening: settings.evening || "Good evening!🌆",
        night: settings.night || "Good night!💤"
    };

    if (currentHour >= 6 && currentHour < 12) {
        return greetings.morning;
    } else if (currentHour >= 12 && currentHour < 18) {
        return greetings.afternoon;
    } else if (currentHour >= 18 && currentHour < 21) {
        return greetings.evening;
    } else {
        return greetings.night;
    }
}

function initializeProfile(profile, music, display, SEO, plugins_list, titleSettings) {
    const { icon } = profile;
    const { background, signature } = display;
    const { language, description } = SEO;
    const { music_data: musicSetting } = music;
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    /* Basic HTML Elements */
    document.documentElement.lang = language || 'zh-TW';
    document.title = profile.website_name;
    document.getElementById('title').innerText = titleSettings.method === "greeting" ? greetUser(titleSettings.advanced_settings) : `HEY! ${profile.name}`;
    document.getElementById('description').innerText = profile.subtitle;
    /* Meta Tags */
    document.querySelector('meta[name="description"]')?.setAttribute('content', description || 'Powered by JerryIs-strong/Arona');
    /* Open Graph */
    // document.querySelector('meta[property="og:title"]').setAttribute('content', profile.website_name);
    // document.querySelector('meta[property="og:url"]').setAttribute('content', profile.url);
    // document.querySelector('meta[property="og:description"]').setAttribute('content', description);

    handleSignature(signature);
    handleMusic(music, musicSetting);
    handleBackground(background.url);
    handleTheme(darkMode, setting.theme);
    handleHolderIcon(icon, plugins_list);
}

function handleSignature({ enabled, content, auto_hide }) {
    const signElement = document.getElementById('sign');
    if (enabled) {
        signElement.innerText = content;
        if (auto_hide) {
            signElement.classList.add("auto-hide");
        } else {
            debug("個性簽名[auto-hide]已禁用", "info")
        }
    } else {
        debug("個性簽名已禁用", "info")
    }
}

function handleMusic(music, musicSetting) {
    const musicElement = document.getElementById('MusicName');
    if (music.enabled) {
        const musicNumber = Object.keys(musicSetting).length;
        const musicRandom = Math.floor(Math.random() * musicNumber) + 1;
        const musicKey = musicSetting[`music_${musicRandom}`];
        musicElement.innerText = musicKey.name;
        musicElement.href = musicKey.url;
        if (musicKey.album != null || musicKey.artist != null) {
            if (musicKey.album.length > 0) {
                var musicKeyName = `${musicKey.name} - ${musicKey.artist} • ${musicKey.album}`;
            } else {
                var musicKeyName = `${musicKey.name} - ${musicKey.artist}`;
            }
        }
        musicElement.innerText = musicKeyName;
        musicElement.title = musicKeyName;
        const currentMusic = {
            name: musicKey.name,
            artist: musicKey.artist
        }
        sessionStorage.setItem('current-music', JSON.stringify(currentMusic));
    } else {
        debug("音樂已禁用", "info")
        document.getElementById('music').remove();
    }
}

function handleBackground(backgroundUrl) {
    const backgroundElement = document.getElementById('background');
    if (backgroundUrl.length > 0 && backgroundUrl.includes('/')) {
        backgroundElement.style.backgroundImage = `url(${backgroundUrl})`;
        backgroundElement.setAttribute('alt', 'background')
    } else {
        debug("本地壁紙設置錯誤", "warn")
    }
}

function handleTheme(darkMode, theme) {
    document.documentElement.setAttribute("dark", darkMode ? "true" : "false");
    if (theme != "" || theme != null) {
        document.documentElement.setAttribute("theme", theme);
    }
}

function handleHolderIcon(holderIcon) {
    const imgElement = document.getElementById('img');
    if (holderIcon.method === "local") {
        imgElement.style.backgroundImage = `url("${holderIcon.local.url}")`;
        imgElement.setAttribute('alt', 'icon');
    } else if (holderIcon.method === "gravatar") {
        const gravatarUrl = `https://www.gravatar.com/avatar/${md5(holderIcon.gravatar.email)}?size=500`;
        imgElement.style.backgroundImage = `url("${gravatarUrl}")`;
        imgElement.setAttribute('alt', 'icon');
    } else {
        debug("頭像設置錯誤", "warn")
    }
}

function initializeGithubIcon(github_icon, margin = false) {
    const githubProject = document.getElementById("github");
    console.log(github_icon);
    if (github_icon.enabled) {
        if (margin) {
            githubProject.classList.add("github-loop");
        }
        if (github_icon.github_user_name != "" && github_icon.github_repo_name != "") {
            githubProject.innerText = `${github_icon.github_user_name}/${github_icon.github_repo_name}`;
        }
        githubProject.setAttribute('alt', 'Github Repository')
    } else {
        debug("Github Icon已禁用", "info")
        document.getElementById("github").remove();
    }
}

function initializeSkills(skillSettings) {
    const languageSkills = skillSettings.language || {};
    const learningSkills = skillSettings.learning || {};
    const languageContainer = document.getElementById("language");
    const learningContainer = document.getElementById("learning");
    if (skillSettings.enabled) {
        if (skillSettings.language != null || skillSettings.learning != null) {
            Object.keys(languageSkills).forEach(key => {
                languageContainer.appendChild(createSkills(languageSkills[key], skillSettings.breath));
            });
            Object.keys(learningSkills).forEach(key => {
                learningContainer.appendChild(createSkills(learningSkills[key], skillSettings.breath));
            });
        } else {
            document.getElementById("skills").remove();
        }
    } else {
        debug("技能已禁用", "info")
        document.getElementById("skills").remove();
    }
}

function initializeLinks(linkSettings) {
    const urlParams = new URLSearchParams(window.location.search);
    const linkGroup = document.getElementById('mediaBtn_wrapper');

    if (linkSettings && Object.keys(linkSettings).length > 0) {
        Object.keys(linkSettings).forEach(key => {
            const link = linkSettings[key];
            if (link.enabled) {
                const linkElement = createLink(key, link.icon, link.target, link.title, link.url, link.name);
                if (linkElement.getAttribute('l-name') !== urlParams.get('media')) {
                    linkGroup.appendChild(linkElement);
                }
            }
        });
    } else {
        debug("連結設置錯誤", "warn")
        document.getElementById('mediaBtn_wrapper').remove();
    }
}

function initializeAlert(alertSettings) {
    if (alertSettings && Object.keys(alertSettings).length > 0) {
        Object.keys(alertSettings).forEach(key => {
            const message = alertSettings[key];
            showSnackbar(message.content, message.scroll, message.duration, message.iconType, message.iconName, message.level);
        });
    }
}