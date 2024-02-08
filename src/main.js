document.addEventListener('DOMContentLoaded', () => {
    const version = "V1.0.3";
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
            const holderIcon = data['basic environment']['holder icon'];
            const backgroundUrl = data['basic environment']['background'];
            const gravatarUrl = `https://www.gravatar.com/avatar/${md5(holderIcon['gravatar']['email'])}?size=500`;
            const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const sign = basicEnvironment['signature']

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
                linkElement.className = link["icon"];
                linkElement.target = link["target"];
                linkElement.style.display = link['enabled'] ? 'inline-block' : 'none';
                linkElement.setAttribute('href', link['url']);
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing the setting.json file:', error);
        });
})
