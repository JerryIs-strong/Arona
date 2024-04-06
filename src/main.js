function createLink(id, className, target, title, url, linkName) {
    const LinkBtn = document.createElement('a');
    LinkBtn.id = id;
    LinkBtn.className = className;
    LinkBtn.target = target;
    LinkBtn.setAttribute("title", title);
    if (url !== "") {
        LinkBtn.setAttribute('href', url);
    }
    LinkBtn.setAttribute('l-name', linkName);
    return LinkBtn;
}

document.addEventListener('DOMContentLoaded', () => {
    const shareElement = document.getElementById("share");
    let shareCounter = 0;

    function infiniteLoop() {
        setTimeout(() => {
            shareElement.scrollTop = shareCounter === 0 ? 100 : 0;
            shareCounter = shareCounter === 0 ? 1 : 0;
            infiniteLoop();
        }, 6500);
    }

    function initializeApp() {
        const settings = JSON.parse(localStorage.getItem('setting'));
        const basicInformation = settings['basic_information'];
        const linkSettings = settings['Links'];
        const music = basicInformation['music'];

        // Initialize basic_information
        initializeBasicInformation(basicInformation, music);

        // Initialize links
        initializeLinks(linkSettings);

        // Start infinite loop for music
        if (music['enabled'] && music['Show Github Icon']) {
            infiniteLoop();
        }
    }

    function initializeBasicInformation(basicInformation, music) {
        const musicsetting = basicInformation['music']['data'];
        const musicNumber = Object.keys(musicsetting).length;
        const musicRandom = Math.floor(Math.random() * (musicNumber - 1 + 1) + 1);
        const musicKey = musicsetting[`music-${musicRandom}`];
        const holderIcon = basicInformation['icon'];
        const backgroundUrl = basicInformation['background'];
        const gravatarUrl = `https://www.gravatar.com/avatar/${md5(holderIcon['gravatar']['email'])}?size=500`;
        const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const sign = basicInformation['signature'];

        // Apply settings to HTML elements
        document.querySelector('meta[name="description"]').setAttribute('content', basicInformation['description']);
        document.title = basicInformation['website_name'];
        document.getElementById('title').innerText = "HEY! " + basicInformation['name'];
        document.getElementById('description').innerText = basicInformation['subtitle'];

        handleSignature(sign);
        handleMusic(music, musicKey);
        handleBackground(backgroundUrl);
        handleDarkMode(darkMode);
        handleHolderIcon(holderIcon, gravatarUrl);
    }

    function handleSignature(sign) {
        const signElement = document.getElementById('sign');
        if (sign['enabled']) {
            signElement.innerText = sign['content'];
            debug(`個性簽名已經加載✅`);
            if (sign['auto-hide']) {
                signElement.classList.add("auto-hide");
                debug(`個性簽名自動隱藏開始運作⛔`, "info");
            }
        } else if (sign['enabled'] === false) {
            debug(`個性簽名已禁用⛔`, "info");
        } else {
            debug(`個性設置錯誤❌`, "error");
        }
    }

    function handleMusic(music, musicKey) {
        const musicElement = document.getElementById('MusicName');
        if (music['enabled']) {
            musicElement.innerText = musicKey['name'];
            musicElement.setAttribute('href', musicKey['url']);
            musicElement.setAttribute('title', musicKey['name']);
            document.getElementById('github').classList.add("github-loop");
            debug(`隨機歌曲已經加載✅`);
        } else {
            if (!music['enabled']) {
                debug(`隨機歌曲已禁用⛔`, "info");
            } else {
                debug(`隨機歌曲設置錯誤❌`, "error");
            }
            document.getElementById('share').remove();
        }
    }

    function handleBackground(backgroundUrl) {
        const backgroundElement = document.getElementById('background');
        if (backgroundUrl['url'] != null && backgroundUrl['url'] != "") {
            backgroundElement.style.backgroundImage = `url(${backgroundUrl["url"]})`;
            debug(`本地壁紙已經加載✅`);
        } else {
            debug(`壁紙設置錯誤❌`, "error");
        }
    }

    function handleDarkMode(darkMode) {
        document.documentElement.setAttribute("data-mode", darkMode ? "dark" : "light");
        debug(`${darkMode ? "Dark Mode🌑" : "Light Mode🌕"}`);
    }

    function handleHolderIcon(holderIcon, gravatarUrl) {
        const imgElement = document.getElementById('img');
        if (holderIcon['method'] === "local") {
            imgElement.style.backgroundImage = `url("${holderIcon["local"]["url"]}")`;
            debug(`本地頭像已經加載✅`);
        } else if (holderIcon['method'] === "gravatar") {
            imgElement.style.backgroundImage = `url("${gravatarUrl}")`;
            debug(`gravatar頭像已經加載✅`);
        } else {
            debug(`頭像設置錯誤❌`, "error");
        }
    }

    function initializeLinks(linkSettings) {
        const urlParams = new URLSearchParams(window.location.search);
        const linkGroup = document.getElementById('mediaBtn_wrapper');
        let linkCounter = 0;

        if (linkSettings != null && Object.keys(linkSettings).length > 0 && linkSettings != false) {
            Object.keys(linkSettings).forEach(key => {
                const link = linkSettings[key];
                const linkName = link['name'];
                linkCounter += 1;
                if (link['enabled']) {
                    linkGroup.appendChild(createLink(key, link["icon"], link["target"], link['title'], link['url'], linkName));
                    if (document.getElementById(`${key}`).getAttribute('l-name') !== urlParams.get('media')) {
                        debug(`${key}已經加載✅`, "info");
                    } else {
                        document.getElementById(`${key}`).remove();
                    }
                } else {
                    if (link['enabled'] === false) {
                        debug(`${key}已禁用⛔`, "info");
                    } else {
                        debug(`${key}設置錯誤❌`, "error");
                    }
                }
            });
        } else {
            document.getElementById('mediaBtn_wrapper').remove();
            debug(`所有鏈接設置為空，可能存在設置錯誤⚠️`, "warn");
        }
    }

    initializeApp();
});