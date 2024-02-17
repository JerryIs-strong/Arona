document.addEventListener('DOMContentLoaded', () => {
    const version = "V1.0.4";
    console.log(
        `Welcome to my webpage!\n\nPowered by %cpersonal-webpage%c${version}`, 
        'display: inline—block;background-color:rgba(66,66,66,0.8);color:#fff;margin—bottom:6px;padding:4px;border-radius:4px 0 0 4px',
        'display: inline-block;background-color:rgba(0,180,0,1);color:#fff;padding:4px;border-radius:0 4px 4px 0'
    );

    fetch('setting.json')
        .then(response => response.json())
        .then(data => {
            // Extract the settings from the JSON data
            const basicEnvironment = data['basic environment'];
            const linkSettings = data['Link'];
            const musicData = basicEnvironment['music']['data'];
            const musicNumber = Object.keys(musicData).length;
            const musicRandom = Math.floor(Math.random() * (musicNumber - 1 + 1) + 1);
            const musicKey = musicData[`music-${musicRandom}`];
            const holderIcon = data['basic environment']['holder icon'];
            const backgroundUrl = data['basic environment']['background'];
            const gravatarUrl = `https://www.gravatar.com/avatar/${md5(holderIcon['gravatar']['email'])}?size=500`;
            const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const sign = basicEnvironment['signature']
            const music = basicEnvironment['music']
            const urlParams = new URLSearchParams(window.location.search);

            // Apply the basic environment settings to the HTML elements
            document.title = basicEnvironment['website name'];
            document.getElementById('title').innerText = "HEY! " + basicEnvironment['holder name'];
            document.getElementById('description').innerText = basicEnvironment['website description'];
            
            if(sign['enabled']){
                document.getElementById('sign').innerText = sign['content']
                if(sign['auto-hide'] == true){
                    document.getElementById('sign').classList.add("auto-hide");
                }
            }

            if(music['enabled']){
                document.getElementById('MusicName').innerText = musicKey['name']
                document.getElementById('MusicName').setAttribute('href', musicKey['url'])
                
            }else{
                document.getElementById('shareMusic').remove()
            }

            if(holderIcon['method'] == "local"){
                document.getElementById('img').style.backgroundImage = `url("${holderIcon["local"]["url"]}")`;
            }else if(holderIcon['method'] == "gravatar"){
                document.getElementById('img').style.backgroundImage = `url("${gravatarUrl}")`;
            }

            if(backgroundUrl['method'] == "bing"){
                getBing();
            }else if(backgroundUrl['method'] == "local"){
                document.getElementById('background').style.backgroundImage = `url(${backgroundUrl["url"]})`;
            }
            
            if (darkMode) {
                document.documentElement.setAttribute("data-mode", "dark");
            } else {
                document.documentElement.setAttribute("data-mode", "light");
            }

            if(holderIcon['method'] == "local"){
                document.getElementById('img').style.backgroundImage = `url("${holderIcon["local"]["url"]}")`;
            }else if(holderIcon['method'] == "gravatar"){
                document.getElementById('img').style.backgroundImage = `url("${gravatarUrl}")`;
            }

            // Apply the link settings to the HTML elements
            Object.keys(linkSettings).forEach(key => {
                const link = linkSettings[key];
                const linkElement = document.getElementById(`${key}`);
                const linkName = link['name']
                if(link['enabled']){
                    linkElement.setAttribute('l-name', linkName);
                    if(linkElement.getAttribute('l-name') == urlParams.get('media')){
                        linkElement.remove();
                    }else{
                        if(link['enabled']){
                            linkElement.className = link["icon"];
                            linkElement.target = link["target"];
                            linkElement.setAttribute('href', link['url']);
                        }
                    }
                }else{
                    linkElement.remove();
                }
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing the setting.json file:', error);
        });
})
