const setting = JSON.parse(localStorage.getItem("setting"));
const version = setting.version;

console.log(
    '%c警告！\n%c使用這個主控台可能會讓攻擊者有機會利用名為 Self-XSS 的攻擊方式冒用你的身分，然後竊取你的資訊。請勿輸入或貼上來路不明的程式碼。',
    'font-size: 20px;font-weight: bolder;font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;',
    'font-size: 15px;'
);
console.log(
    `Powered by %cpersonal-webpage%c${version}`,
    'display: inline—block;background-color:rgba(66,66,66,0.8);color:#fff;margin—bottom:6px;padding:4px;border-radius:4px 0 0 4px',
    'display: inline-block;background-color:rgba(0,180,0,1);color:#fff;padding:4px;border-radius:0 4px 4px 0'
);