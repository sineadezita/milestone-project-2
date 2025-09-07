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

// Render stock list

function renderStocks() {
    const stockList = document.getELementById("stock-list");
    stockList.innerHTML = "";
    for (let name in stocks) {
        let div = document.createElement("div");
        div.className = "stock";
        div.innerHTML = `
        <span>${name} €${stocks[name].toFixed(2)}</span>
        <div>
            <button class="buy" onclick="buyStock"('${name}')">Buy</button>
            <button class="sell" onclick="sellStock"('${name}')">Sell</button>
        </div>
        `;
    }
}

