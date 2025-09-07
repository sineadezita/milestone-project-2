let balance = 10000;
let portfolio = { LVMH: 0, Prada: 0, Burberry: 0 };
const stocks = { LVMH: 812.5, Prada: 116.2, Burberry: 235.4 };

const gameSection = document.getELementById("game");
const startBtn = document.getElementById("start-btn");

// Start game button
startBtn.addEventListener("click", () => {
    document.getElementById("landing").classList.add("hidden");
    gameSection.classList.remove("hidden");
});