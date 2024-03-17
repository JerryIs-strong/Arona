document.addEventListener('DOMContentLoaded', () => {
    const basicEnvironment = setting['basic environment'];
    const linkSettings = setting.Link;
    const musicData = basicEnvironment.music.data;
    const musicNumber = Object.keys(musicData).length;
    const musicRandom = Math.floor(Math.random() * (musicNumber - 1 + 1) + 1);
    const musicKey = musicData[`music-${musicRandom}`];
    const holderIcon = setting['basic environment']['holder icon'];
    const backgroundUrl = setting['basic environment']['background'];
    const gravatarUrl = `https://www.gravatar.com/avatar/${md5(holderIcon.gravatar.email)}?size=500`;
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const sign = basicEnvironment.signature
    const music = basicEnvironment.music
    const urlParams = new URLSearchParams(window.location.search);
    const shareElement = document.getElementById("share");
    let linkCounter = 0;
    let linkEnabled = 0;
    let shareCounter = 0;

    function infiniteLoop() {
        setTimeout(() => {
            if (shareCounter == 0) {
                shareElement.scrollTop = 100;
                shareCounter += 1;
            } else {
                shareElement.scrollTop = 0;
                shareCounter -= 1;
            }
            infiniteLoop(); // Call the function again to create an infinite loop
        }, 6500);
    }

    // Apply the basic environment settings to the HTML elements
    document.querySelector('meta[name="description"]').setAttribute('content', basicEnvironment['meta description']);
    document.title = basicEnvironment['website name'];
    document.getElementById('title').innerText = "HEY! " + basicEnvironment['holder name'];
    document.getElementById('description').innerText = basicEnvironment.subtitle;

    if (sign.enabled === true) {
        document.getElementById('sign').innerText = sign.content;
        debug(`個性簽名已經加載✅`, true);
        if (sign.auto-hide === true) {
            document.getElementById('sign').classList.add("auto-hide");
            debug(`個性簽名自動隱藏開始運作⛔`, "info", true);
        }
    } else if (sign.enabled === false) {
        debug(`個性簽名已禁用⛔`, "info", true);
    } else {
        debug(`個性設置錯誤❌`, "error", true);
    }

    if (music.enabled === true) {
        document.getElementById('MusicName').innerText = musicKey.name;
        document.getElementById('MusicName').setAttribute('href', musicKey.url);
        document.getElementById('MusicName').setAttribute('title', musicKey.name);
        infiniteLoop();
        document.getElementById('github').classList.add("github-loop");
        debug(`隨機歌曲已經加載✅`, true);
    } else {
        if (music.enabled === false) {
            debug(`隨機歌曲已禁用⛔`, "info", true);
        } else {
            debug(`隨機歌曲設置錯誤❌`, "error", true);
        }
        document.getElementById('music').remove()
    }

    if (backgroundUrl.url != null || backgroundUrl.url != "") {
        document.getElementById('background').style.backgroundImage = `url(${backgroundUrl["url"]})`;
        debug(`本地壁紙已經加載✅`, true);
    } else {
        debug(`壁紙設置錯誤❌`, "error", true);
    }

    if (darkMode == true) {
        document.documentElement.setAttribute("data-mode", "dark");
        debug(`Dark Mode🌑`, true);
    } else {
        document.documentElement.setAttribute("data-mode", "light");
        debug(`Light Mode🌕`, true);
    }

    if (holderIcon.method === "local") {
        document.getElementById('img').style.backgroundImage = `url("${holderIcon["local"]["url"]}")`;
        debug(`本地頭像已經加載✅`, true);
    } else if (holderIcon.method === "gravatar") {
        document.getElementById('img').style.backgroundImage = `url("${gravatarUrl}")`;
        debug(`gravatar頭像已經加載✅`, true);
    } else {
        debug(`頭像設置錯誤❌`, "error", true);
    }

    // Apply the link settings to the HTML elements
    Object.keys(linkSettings).forEach(key => {
        const link = linkSettings[key];
        const linkElement = document.getElementById(`${key}`);
        const linkName = link.name;
        linkCounter += 1;
        if (link.enabled === true) {
            linkElement.setAttribute('l-name', linkName);
            if (linkElement.getAttribute('l-name') == urlParams.get('media')) {
                linkElement.remove();
            } else {
                if (link.enabled === true) {
                    linkElement.className = link["icon"];
                    linkElement.target = link["target"];
                    linkElement.setAttribute("title", link.title);
                    if (link.url != "") {
                        linkElement.setAttribute('href', link.url);
                    }
                    linkEnabled += 1;
                }
                debug(`${key}已經加載✅`, "info", true);
            }
        } else {
            if (link.enabled === false) {
                debug(`${key}已禁用⛔`, "info", true);
            } else {
                debug(`${key}設置錯誤❌`, "error", true);
            }
            linkElement.remove();
        }
    });
})
