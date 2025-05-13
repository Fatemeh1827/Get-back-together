let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "对不起，我知道错了", 
    "我零花钱都给你", 
    "欲情故纵，我知道 ", 
    "能不能给我个台阶", 
    "原谅我吗~"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "images/expectation.gif"; // 期待
    if (clickCount === 2) mainImage.src = "images/angry.gif";   // 难过
    if (clickCount === 3) mainImage.src = "images/sad.gif";   // 期待
    if (clickCount === 4) mainImage.src = "images/Peeping.jpg";  // 哭
    if (clickCount >= 5) mainImage.src = "images/cryingx.gif";  // 之后一直是哭

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!喜欢你!! ( >᎑<)♡︎ᐝ</h1>
            <img src="images/love.gif" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});










(function() {
        let audio = new Audio('music/musicqq.mp3');
        audio.loop = true;
        audio.volume = 0.5;
        let isPlaying = false;

        // 创建控制按钮
        const control = document.createElement('div');
        control.id = 'musicControl';
        control.innerHTML = '🎵';
        document.body.appendChild(control);

        // 自动播放逻辑
        function tryAutoPlay() {
            audio.play()
                .then(() => {
                    isPlaying = true;
                    control.style.animation = 'musicRotate 3s linear infinite';
                })
                .catch(() => {
                    // 自动播放失败时不显示错误
                    isPlaying = false;
                    control.style.animation = 'none';
                });
        }

        // 多种自动播放尝试方式
        document.addEventListener('DOMContentLoaded', tryAutoPlay);
        window.addEventListener('load', tryAutoPlay);
        document.addEventListener('mousemove', tryAutoPlay);
        document.addEventListener('click', tryAutoPlay);

        // 音乐控制
        control.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                control.style.animation = 'none';
            } else {
                audio.play();
                control.style.animation = 'musicRotate 3s linear infinite';
            }
            isPlaying = !isPlaying;
        });

        // 页面可见性处理
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                audio.pause();
            } else if (isPlaying) {
                audio.play();
            }
        });
    })();
