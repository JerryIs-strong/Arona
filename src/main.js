document.addEventListener('DOMContentLoaded', () => {
    const settings = JSON.parse(localStorage.getItem('setting'));
    const { profile, SEO, links, display, alert } = settings;
    const { skills } = profile;
    const { github_icon, music } = display.share;
    initializeProfile(profile, music, display, SEO);
    initializeLinks(links);
    initializeSkills(skills);
    initializeGithubIcon(github_icon);
    if (music.enabled && github_icon.enabled) {
        infiniteLoop();
    }
    if(alert.enabled){
        if(alert.https){
            if(window.location.protocol === 'https:'){
                showSnackbar('You\'re browsing with https:// protocol, the connection is safe!', 8000, "#6ac97f", "fa-solid", "fa-lock");
            }else{
                showSnackbar('It seems that you are not browsing using the http:// protocol. Your connection may be not secure!', 10000, "#d55757", "fa-solid", "fa-lock-open");
            }
        }
        initializeAlert(alert['data'])
    }
});

function createLink(id, className, target, title, url, linkName) {
    const LinkBtn = document.createElement('a');
    LinkBtn.id = id;
    LinkBtn.className = className;
    LinkBtn.target = target;
    LinkBtn.title = title;
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

function infiniteLoop() {
    let shareCounter = 0;
    const shareElement = document.getElementById("share");
    const loop = () => {
        shareElement.scrollTop = shareCounter === 0 ? 100 : 0;
        shareCounter = shareCounter === 0 ? 1 : 0;
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
}

function initializeProfile(profile, music, display, SEO) {
    const { icon, skills: skillSettings } = profile;
    const { background, signature } = display;
    const { language, description, keywords } = SEO;
    const { music_data: musicSetting } = music;
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const gravatarUrl = `https://www.gravatar.com/avatar/${md5(icon.gravatar.email)}?size=500`;

    document.documentElement.lang = language || 'zh-TW';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description || 'Powered by JerryIs-strong/personal-webpage');
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', keywords || 'webpage');
    document.title = profile.website_name;
    document.getElementById('title').innerText = `HEY! ${profile.name}`;
    document.getElementById('description').innerText = profile.subtitle;

    handleSignature(signature);
    handleMusic(music, musicSetting);
    handleBackground(background.url);
    handleDarkMode(darkMode);
    handleHolderIcon(icon, gravatarUrl);
}

function handleSignature({ enabled, content, auto_hide }) {
    const signElement = document.getElementById('sign');
    if (enabled) {
        signElement.innerText = content;
        if (auto_hide) {
            signElement.classList.add("auto-hide");
        }
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
        musicElement.title = musicKey.name;
    } else {
        document.getElementById('music').remove();
    }
}

function handleBackground(backgroundUrl) {
    const backgroundElement = document.getElementById('background');
    if (backgroundUrl) {
        backgroundElement.style.backgroundImage = `url(${backgroundUrl})`;
    }
}

function handleDarkMode(darkMode) {
    document.documentElement.setAttribute("data-mode", darkMode ? "dark" : "light");
}

function handleHolderIcon(holderIcon, gravatarUrl) {
    const imgElement = document.getElementById('img');
    if (holderIcon.method === "local") {
        imgElement.style.backgroundImage = `url("${holderIcon.local.url}")`;
    } else if (holderIcon.method === "gravatar") {
        imgElement.style.backgroundImage = `url("${gravatarUrl}")`;
    }
}

function initializeGithubIcon(github_icon) {
    const githubProject = document.getElementById("githubProject");
    if (github_icon.enabled) {
        githubProject.classList.add("github-loop");
        if (github_icon.github_user_name && github_icon.github_repo_name) {
            githubProject.innerText = `${github_icon.github_user_name}/${github_icon.github_repo_name}`;
        }
    } else {
        document.getElementById("github").remove();
    }
}

function initializeSkills(skillSettings) {
    const hasSkills = Object.values(skillSettings).some(skills => Object.keys(skills).length > 0);
    if (hasSkills) {
        Object.entries(skillSettings).forEach(([key, skills]) => {
            const skillGroup = document.getElementById(key);
            Object.values(skills).forEach(skill => {
                skillGroup.appendChild(createSkills(skill, skillSettings.breath));
            });
        });
    } else {
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
        document.getElementById('mediaBtn_wrapper').remove();
    }
}

function initializeAlert(alertSettings){
    if (alertSettings && Object.keys(alertSettings).length > 0) {
        Object.keys(alertSettings).forEach(key => {
            const message = alertSettings[key];
            showSnackbar(message.content, message.duration, message.color, message.iconType, message.iconName);
        });
    } else {
        document.getElementById('mediaBtn_wrapper').remove();
    }
}