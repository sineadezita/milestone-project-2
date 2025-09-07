let balance = 10000;
let portfolio = { LVMH: 0, Prada: 0, Burberry: 0 };
const stocks = { LVMH: 812.5, Prada: 116.2, Burberry: 235.4 };

const gameSection = document.getElementById("game");
const startBtn = document.getElementById("start-btn");

// Start game button
startBtn.addEventListener("click", () => {
    document.getElementById("landing").classList.add("hidden");
    gameSection.classList.remove("hidden");
});

// Display stock list
function renderStocks() {
    const stockList = document.getElementById("stock-list");
    stockList.innerHTML = "";
    for (let name in stocks) {
        let div = document.createElement("div");
        div.className = "stock";
        div.innerHTML = `
            <span>${name} €${stocks[name].toFixed(2)}</span>
            <div>
                <button class="buy" onclick="buyStock('${name}')">Buy</button>
                <button class="sell" onclick="sellStock('${name}')">Sell</button>
            </div>
        `;
        stockList.appendChild(div);  
    }
}

// Update portfolio
function updatePortfolio() {
    document.getElementById("balance").textContent = balance.toFixed(2);
    const holdingsList = document.getElementById("holdings");
    holdingsList.innerHTML = "";
    for (let stock in portfolio) {
        let li = document.createElement("li");
        li.textContent = `${stock}: ${portfolio[stock]} shares`;
        holdingsList.appendChild(li);
    }
}

// Buy Stock
function buyStock(name) {
    if (balance >= stocks[name]) {
        balance -= stocks[name];
        portfolio[name]++;
        updatePortfolio();
    } else {
        alert("Not enough balance to buy " + name);
    }
}

// Sell Stock
function sellStock(name) {
    if (portfolio[name] > 0) {
        balance += stocks[name];
        portfolio[name]--;
        updatePortfolio();
    } else {
        alert("No shares of " + name + " to sell");
    }
}



