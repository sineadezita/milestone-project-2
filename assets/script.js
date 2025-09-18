let balance = 10000;
let portfolio = { 
    LVMH: { shares : 0, avgPrice : 0 }
    Prada: { shares : 0, avgPrice : 0 }
    Burberry: { shares : 0, avgPrice : 0 } 
};
const stocks = { LVMH: 812.5, Prada: 116.2, Burberry: 235.4 };

let liveInterval = null; //for live updates
let startingBalance = 10000;
let currentLevel = 1;

// Dom Elemants
const gameSection = document.getElementById("game");
const startBtn = document.getElementById("start-btn");
const liveToggle = document.getElementById("live-toggle");

// Start game button
startBtn.addEventListener("click", () => {
    document.getElementById("landing").classList.add("hidden");
    gameSection.classList.remove("hidden");
    renderStocks();
    updatePortfolio();
    startLiveMarket();
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
    //Update visible cash balance
    document.getElementById("balance").textContent = balance.toFixed(2);

    const holdingsList = document.getElementById("holdings");
    holdingsList.innerHTML = "";
    let totalValue = balance;

    for (let stock in portfolio) {
        if (portfolio[stock].shares > 0) {
        let currentValue = portfolio[stock].shares * stocks[stock];
        let costBasis = portfolio[stock].shares * portfolio[stock].avgPrice;
        let profitLoss = currentValue - costBasis;
        totalValue += currentValue;

        let li = document.createElement("li");
        li.innerHTML = `${stock}: ${portfolio[stock]} shares
        <span class="value">€${(portfolio[stock] * stocks[stock]).toFixed(2)}</span>
        <span class="pl" style="color:${profitLoss >= 0 ? 'green' : 'red'}">
            (${profitLoss >= 0 ? '+' : ''}€${profitLoss.toFixed(2)})
        </span>
        `;
        holdingsList.appendChild(li);
        }
    }

    //Add totals
    if (totalValue > 0) {
        let totalLi = document.createElement("li");
        totalLi.innerHTML = `<strong>Total Portfolio</strong>
            <span class="value">€${totalValue.toFixed(2)}</span>`;
        holdingsList.appendChild(totalLi);
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

// Fake stock market simulator
function updatePrices() {
    for (let name in stocks) {
        let changePercent = (Math.random() - 0.5) * 0.04;
        stocks[name] *= (1 + changePercent);
        if (stocks[name] < 10)stocks[name] = 10;
    }
    renderStocks();
    updatePortfolio();
}

// Start live updates
function startLiveMarket () {
    if (liveInterval) clearInterval(liveInterval);
    liveInterval = setInterval(updatePrices, 5000);
}

// Level system
function checkLevelUp() {
    if (currentLevel === 1 && portfolioValue >= startingBalance * 1.06) {
        alert("Congratulations! You unlocked level 2 with €20000 to invest!");

        // Reset for level 2
        currentLevel = 2;
        balance = 20000;
        startingBalance = 20000;
        portfolio = {};
        stocks = { Gucci: 140.3, Chanel: 980.6, Hermes: 1856.3, Moncler: 78.4, Cartier: 226.4 };
        renderStocks();
        updatePortfolio();
    }
}