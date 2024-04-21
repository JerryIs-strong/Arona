const setting = JSON.parse(sessionStorage.getItem("setting"));
const version = setting.version;

console.log(
    '%c警告！\n%c使用這個主控台可能會讓攻擊者有機會利用名為 Self-XSS 的攻擊方式冒用你的身分，然後竊取你的資訊。請勿輸入或貼上來路不明的程式碼。',
    'font-size: 20px;font-weight: bolder;font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;',
    'font-size: 15px;'
);