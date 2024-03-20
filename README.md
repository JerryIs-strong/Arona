<br/>
<div align="center">
    <img src="/src/sample/banner.png" width=85%>
    <br/>
    <br/>
    <a href="https://personal-webpage-demo-53of.vercel.app/" target="blank"><strong>🌎 DEMO</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#%EF%B8%8F-部署" target="blank"><strong>📦️ 部署</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#-配置項" target="blank"><strong>💾 配置項</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#-模組" target="blank"><strong>🚛 模組</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <strong>💌 V1.2.4(推送版本)</strong>
    <br/>
    <br/>
    <img src="/src/sample/demo.png">
</div>

---
歡迎使用JerryIs-strong/personal-webpage，你將瞭解如何部署此項目，並簡單地配置網頁的必要設置。請放心，我們將會一切從簡。
## ✨ 特性
- ⚡簡易性: 一切基於setting.json文件進行配置
- 🚀高性能: 去除一切其他的功能，只做一個純粹的個人主頁
- 🌍SEO優化: 我們盡力為你在前期做好SEO優化，減少後續的工作
- 📱自適應: 我們為不同尺寸的設備做出了適配
- 🌓暗黑模式: 支援自動暗黑模式的切換
- 👩‍💻可用性: 全力支援二次開發
- 🔗URL Parameters: 支援傳入URL Parameters，隱藏不需要的連結
- 🎠美學: 支援高斯模糊
- 🚛模組化: 開發者能夠輕易地管理或加入網頁的各項功能與組件

## 📦️ 部署
1. [NetLify](#%EF%B8%8F-以netlify開始)
2. [Github page](#%EF%B8%8F-以github-page開始)
3. [Vercel](#%EF%B8%8F-以vercel開始)(推介)
4. 更多靜態網頁托管平臺

## ⚙️ 以NetLify開始
歡迎使用NetLify部署你的個人主頁，相信這是一個簡單且穩定的方式! 以下教程將會講解如何將此項目部署至NetLify的伺服器。<br/>
<br/>
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JerryIs-strong/personal-webpage)
<br/>
1. 點擊以上的```Deploy to Netlify```按鈕
2. 點擊```Connect to GitHub```
![](/src/sample/netlify/screenshot-1.png)
3. 授權GitHub賬戶，點擊```Authorize netlify```
![](/src/sample/netlify/screenshot-2.png)
4. 根據步驟，創建Git儲存庫，點擊```Save & Deploy```
![](/src/sample/netlify/screenshot-3.png)
5. 等待NetLify的部署工作，部署成功
![](/src/sample/netlify/screenshot-4.png)

## ⚙️ 以Github Page開始
歡迎使用Github Page部署你的個人主頁，相信這是一個簡單且穩定的方式! 以下教程將會講解如何將此項目部署至NetLify的伺服器。<br/>
1. 點擊```Fork```按鈕
![](/src/sample/github/screenshot-1.png)
2. 根據步驟，創建GitHub儲存庫，點擊```Create```
![](/src/sample/github/screenshot-2.png)
3. 點擊```Settings```一欄
![](/src/sample/github/screenshot-3.png)
4. 點擊```Pages```一項
![](/src/sample/github/screenshot-4.png)
5. 選擇```Main```分支，點擊```Save```
![](/src/sample/github/screenshot-5.png)
6. 等待Github Page的部署工作，部署成功
![](/src/sample/github/screenshot-6.png)
## ⚙️ 以Vercel開始
歡迎使用Vercel部署你的個人主頁，相信這是一個簡單且穩定的方式! 以下教程將會講解如何將此項目部署至Vercel的伺服器。<br/>
<br/>
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JerryIs-strong/personal-webpage.git)
<br/>
1. 點擊以上的```deploy```按鈕
2. 在"Create Git Repository"一欄中，選擇一個Git儲存庫(推介GitHub)
![](/src/sample/vercel/screenshot-1.png)
3. 根據步驟，創建Git儲存庫，點擊```Create fork```
![](/src/sample/vercel/screenshot-2.png)
4. 等待Git任務完成
![](/src/sample/vercel/screenshot-3.png)
5. 部署成功
![](/src/sample/vercel/screenshot-4.png)

## 💾 配置項
以下所用配置項均可以透過`setting.json`文件配置，如果你不是開發者，請不要移動或刪除`setting.json`配置文件以外的文件，以免發生錯誤
### Basic Environment 基本環境
```Json
"basic environment": {
    "website name": "My SPACE", //網站標題(瀏覽器)
    "subtitle": "海内存知己 天涯若比鄰", //網站副標題
    "meta description": "JERRY's Homepage", //SEO description
    "holder name": "SPACE", //作者名稱
    "holder icon":{
        "method": "local", //作者頭像：1.local | 2.gravatar(自動獲取)
        "local":{
            "url": "/icon.png" //填寫絕對路徑 e.g: sub-background.png
        },
        "gravatar": {
            "email": "" //作者gravatar電郵
        }
    },
    "background":{
        "method": "bing", //1.Local/外部連結 | 2.Bing Api
        "url": "background.png" //1.Local: 填寫絕對路徑 e.g: background.png | 2.外部連結: 添加https://標頭 e.g: https://jerrypro.xyz/background.png
    },
    "signature":{
        "enabled": true, //true: 開啓 | false: 關閉
        "content": "JP", //個性簽名
        "auto-hide": true //true: 在移動設備中自動隱藏 | False: 在移動設備中顯示
    },
    "music": { 
        "enabled": true, //true: 開啓 | false: 關閉
        "data":{ //可添加多首歌曲，但music-$必須由1開始!
            "music-1":{
                "name": "那年 - 任然 • 任然精選集 • 2016",
                "url": "https://music.youtube.com/watch?v=LXBiGyEQmZw"
            },
            "music-2":{
                "name": "圈住你 - 一口甜 • 圈住你 • 2019",
                "url": "https://music.youtube.com/watch?v=RR9w_ZSsTvM"
            }
        }
    }
}
```
### Link 鏈接按鈕
```Json
"Link": {
    "link-1": { 
        "enabled": true, //true: 開啓 | false: 關閉
        "title": "facebook",
        "name": "fb", //用於URL Parameters檢測
        "icon": "fa-brands fa-facebook", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "https://facebook.com", //連結目標
        "target": "blank" //_blank | _self | _parent | _top
    },
    "link-2": {
        "enabled": true, //true: 開啓 | false: 關閉
        "title": "youtube",
        "name": "yt", //用於URL Parameters檢測
        "icon": "fa fa-youtube", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "https://youtube.com", //連結目標
        "target": "blank" //_blank | _self | _parent | _top
    },
    "link-3": {
        "enabled": false, //true: 開啓 | false: 關閉
        "title": "",
        "name": "", //用於URL Parameters檢測
        "icon": "", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "", //連結目標
        "target": "" //_blank | _self | _parent | _top
    },
    "link-4": {
        "enabled": true, //true: 開啓 | false: 關閉
        "title": "instagram",
        "name": "ig", //用於URL Parameters檢測
        "icon": "fa fa-instagram", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "https://instagram.com", //連結目標
        "target": "blank" //_blank | _self | _parent | _top
    },
    "link-5": {
        "enabled": true, //true: 開啓 | false: 關閉
        "title": "telegram",
        "name": "tg", //用於URL Parameters檢測
        "icon": "fa  fa-telegram", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "https://web.telegram.org/", //連結目標
        "target": "blank" //_blank | _self | _parent | _top
    }
}
```
## 🔗 URL Parameters
syntax: ```url + ?media=```

Case: 在Instagram中發放連結
| Url | NEW | OLD |
| :---: | :---: | :---: |
| https://jerrypro.netlify.app/?media=ig | ![](/src/sample/hEydFbJLOV6c4ko.png) | ![](/src/sample/WEYTNaJC3fMot2b.png) |

## 🚛 模組
> 切記請勿移除與/plugins/private下的必須模組，移除有關模組可能會導致網頁出錯。

在V1.2.1開始，PW已模組化。你可以隨意添加你需要的功能或組件，同時移除你無需使用的功能或組件以輕量化你的網頁! 一下是添加或移除相關功能或組件的方式:

1. 於```setting.json```中的"plugins"添加功能或組件的名稱，同時以","分割多於一個的功能或組件。(功能或組件的名稱應以"xxx.js"中的xxx作爲命名方式)
2. 於```/plugins```放置相關功能或組件的js檔案

## ✨ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=JerryIs-strong/personal-webpage&type=Date)](https://star-history.com/#JerryIs-strong/personal-webpage&Date)

## 🎀 更新日志
> V1.2.4[4]: 補丁更新

> V1.2.4[3]: 重新構建debug的邏輯代碼與樣式\
> 受影響的文件: \
> root\
> &ensp;|_ src\
> &ensp;&ensp;&ensp;|_ plugins\
> &ensp;&ensp;&ensp;&ensp;&ensp;|_ private\
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|_ debug.js\
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|_ log.js\
> &ensp;&ensp;&ensp;|_ plugins-manager.js

> V1.2.4[2]: 補丁更新，增加隱藏Github Icon的設置

> ***V1.2.4[1][Important]: 重新構建數個重要的邏輯代碼***\
> 受影響的文件: \
> root\
> &ensp;|_ version.txt\
> &ensp;|_ src\
> &ensp;&ensp;&ensp;|_ plugins\
> &ensp;&ensp;&ensp;&ensp;&ensp;|_ private\
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|_ debug.js\
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|_ fetcher.js\
> &ensp;&ensp;&ensp;|_ main.js\
> &ensp;&ensp;&ensp;|_ plugins-manager.js

> V1.2.3[1]: 修復數個bug

> V1.2.2[1]: 重新構建Plugins的執行邏輯(這是一次大型的邏輯重構，你幾乎一定會遇到bug，如果遇到不可緩解的bug，請及時向我們報告)

> V1.2.1[1]: 加入模組化，開發者能夠隨時且輕易地管理網頁的各項功能與組件

> INFO:  V1.0.x更新生命期完結，共更新 ***8*** 次

> INFO:  V1.0.5更新生命期完結，共更新 ***1*** 次

> V1.0.5[1]: 解決Android設備背景錯位的問題

> INFO: V1.0.4更新生命期完結，共更新 ***6*** 次

> V1.0.4[6]: 優化SEO，增加對description meta tag的設置項，解決未啟用音樂分享時的錯位問題，增加noscript tag，重命名website description設置項為subtitle

> V1.0.4[5]: 合并Github與music欄，使整體更爲整潔

> V1.0.4[4]: 優化無障礙設置，添加Debug Mode

> V1.0.4[3]: 添加Music Share功能，快來和別人分享喜歡的音樂吧！

> V1.0.4[2]: 改進以移除的方式隱藏沒有使用的連結

> V1.0.4[1]: 添加對URL Parameters的支持，能在不同場景打開的連結中隱藏當前社交媒體的連結按鈕

> INFO: V1.0.3更新生命期完結，共更新 ***1*** 次

> V1.0.3[1]: 更改背景加載動畫速率