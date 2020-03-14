video = document.getElementById("videoplay");
var start = document.getElementById("info");
var showBoard = document.getElementsByClassName("result")[0];
var me = document.getElementById("me");
var you = document.getElementById("you");

var btn = document.getElementsByClassName("btn-box")[0];
var stone = document.getElementById("stone");
var knif = document.getElementById("knif");
var wrap = document.getElementById("wrap");

var selectImg = [
    "url(/stone.jpg)",
    "url(/knif.jpg)",
    "url(/wrap.jpg)"
];

var y;
var re;
init("GameStart");

//初始化
function init(sT) {
    y = 0;
    re = 0;
    start.innerText = sT;
    start.style.display = "block";
    btn.style.display = "none";
    showBoard.style.display = "none";
    video.currentTime = 0;
}

//游戏开始
start.addEventListener("click", () => {
    start.style.display = "none";
    video.play();
    playVideo();

});

//游戏开始视频
function playVideo() {
    setTimeout(() => {
        video.pause();
        btn.style.display = "flex";
        y = randPlay();
    }, 15000);
}

//结果显示
function showResult(mS, yS) {
    me.style.backgroundImage = mS;
    you.style.backgroundImage = yS;
    showBoard.style.display = "flex";
}

//随机出拳
function randPlay() {
    var x = 0;
    x = (Number)(Math.round(Math.random() * 3));
    return x;
}

//计算胜负逻辑
function judge(x, y) {
    showBoard.style.display = "flex";
    me.style.backgroundImage = selectImg[x];
    you.style.backgroundImage = selectImg[y];
    video.play();
    switch (x - y) {
        case -2:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return -1;
    }
}

//绑定输入
stone.addEventListener("click", () => {
    var x = (Number)(stone.innerHTML);
    btn.style.display = "none";

    re = judge(x, y);
    again();

});
knif.addEventListener("click", () => {
    var x = (Number)(knif.innerHTML);
    btn.style.display = "none";
    re = judge(x, y);
    again();
});
wrap.addEventListener("click", () => {
    var x = (Number)(wrap.innerHTML);
    btn.style.display = "none";
    re = judge(x, y);
    again();
});

//再来一次
function again() {
    setTimeout(() => {
        init("GameAgain");
    }, 2000);

}

