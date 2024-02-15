# HTML How
推介使用[replit.com](https://replit.com/)、[NetLify](https://www.netlify.com/)或[Github page](https://pages.github.com/)所提供的網頁托管\
Import`https://github.com/JerryIs-strong/personal-webpage.git`from GitHub\
預覽: [NetLify](https://jerrypro.netlify.app/)\
參考教程: [JERRY PRO](https://jerryis-strong.github.io/posts/jp-5465/)、[BiliBili](https://www.bilibili.com/video/BV1R4421c7xZ/?vd_source=47382271a1d0750dd75f1b095a12ba29)
## 配置項
以下所用配置項均可以透過`setting.json`文件配置，如果你不是開發者，請不要移動或刪除`setting.json`配置文件以外的文件，以免發生錯誤
### Basic Environment 基本環境
```Json
"basic environment": {
    "website name": "My SPACE", //網站標題(瀏覽器)
    "website description": "海内存知己 天涯若比鄰", //内容描述
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
    }
}
```
### Link 鏈接按鈕
```Json
"Link": {
    "link-1": { 
        "enabled": true, //true: 開啓 | false: 關閉
        "name": "fb", //用於URL Parameters檢測
        "icon": "fa-brands fa-facebook", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "https://facebook.com", //連結目標
        "target": "blank" //_blank | _self | _parent | _top
    },
    "link-2": {
        "enabled": true, //true: 開啓 | false: 關閉
        "name": "yt", //用於URL Parameters檢測
        "icon": "fa fa-youtube", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "https://youtube.com", //連結目標
        "target": "blank" //_blank | _self | _parent | _top
    },
    "link-3": {
        "enabled": true, //true: 開啓 | false: 關閉
        "name": "", //用於URL Parameters檢測
        "icon": "fa fa-link", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "https://google.com", //連結目標
        "target": "blank" //_blank | _self | _parent | _top
    },
    "link-4": {
        "enabled": true, //true: 開啓 | false: 關閉
        "name": "ig", //用於URL Parameters檢測
        "icon": "fa fa-instagram", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "https://instagram.com", //連結目標
        "target": "blank" //_blank | _self | _parent | _top
    },
    "link-5": {
        "enabled": true, //true: 開啓 | false: 關閉
        "name": "blog", //用於URL Parameters檢測
        "icon": "fa  fa-telegram", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "https://web.telegram.org/", //連結目標
        "target": "blank" //_blank | _self | _parent | _top
    }
}
```
## URL Parameters
syntax: ```url + ?media=```

Case: 在Instagram中發放連結
| Url | NEW | OLD |
| :---: | :---: | :---: |
| https://jerrypro.netlify.app/?media=instagram | ![](https://s2.loli.net/2024/02/15/hEydFbJLOV6c4ko.png) | ![](https://s2.loli.net/2024/02/15/WEYTNaJC3fMot2b.png) |

## 更新日志
> V1.0.4[1]: 添加對URL Parameters的支持，能在不同場景打開的連結中隱藏當前社交媒體的連結按鈕

> V1.0.3[1]: 更改背景加載動畫速率