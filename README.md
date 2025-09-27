# Fashion Stock Picker
A web-based stock trading simulation game where you invest in luxury fashion brands. Start with €10000, buy and sell stocks as the market fluctuates and try to grow your portfolio. Reach +6% to unlock **Level 2** with €20000 to invest and new stocks.

## UX

### Project Goals
- Allow **teenagers** to practice investing without risking money.
- Make stock trading **fun and educational** by rising luxury fashion brands.

### Player Goals
- Learn the **basics of stock trading** in a simple, gamified environment.
- Experience **profit/loss tracking** in real time.
- Unlock new levels and brands as a reward for growth.
- Play on **mobile or desktop** without needing special setup.

### Developer/Business Goals
- Build a **scaleable MVP** that works fully in the browser.
- Later expand into a **mobile app** for iOS/Android.
- Monetise through:
    - App store sales
    - In-app purchase (extra levels, premuim brands)
    - Partnerships with fashion or finance communities.

### User Stories
- As a **new player**, I want clear instructions so I can understand how to play immediately.
- As a **casual player**, I want a one-click Buy/Sell interface so it's quick and easy.
- As a **competitive player**, I want to see my profits and losses so I can measure success.
- As a **teenager**, I want a stylish and fun design that feels modern and engaging.

### Design Choices
- **Colour Palette**: Pink tones inspired by Instagram viral coquette theme appealing to younger females romantising their daily lives.
- **Typogrophy**: Clean, sans-serif font for readability.
- **Layout**: Card-based sections (Market and Portfolio) for familiarity with financial dashboards.
- **Icons**: Social media icons (Instagram, Pinterest and Youtube) to connect with teen-friendly audiences.
- **Responsiveness**: Mobile-first approach, since teens are most likely to play on their phones.

### Wireframes
- **Wireframes** were created at the initial planning phase to visualise the layout before development:
 - [Mobile](https://share.balsamiq.com/c/2LGERnbF67ZTmincDmDJus.jpg)
 - [Tablet](https://share.balsamiq.com/c/9nxjkJtC8JXwqmkBWVZ2cE.jpg)
 - [Desktop](https://share.balsamiq.com/c/7pmsEzNPBB6TheaNAfNAoE.jpg)

## Features

-**Simulated Stock Market**
    Prices update automatically every 5 seconds (When Live Prices are enabled). Stocks fluctuate randomly between + - 2%.

-**Luxury Brand Stocks**
    Level 1 includes:
    - LVMH
    - Prada
    - Burberry
    - Missoni
    - Tiffany

    Level 2 unlocks:
    - Gucci
    - Chanel
    - Hermes
    - Moncler
    - Cartier

-**Trading System**
    - Buy and sell stocks with single click
    - Tracks your **average buy price**, **current value** and **profit/loss**.
    - Displays total portfolio value (cash + holdings).

-**Level System**
    - Start at **Level 1** with €10,000.
    - Grow portfolio by **+6%** to unlock Level 2 with €20,000.
    - New stocks appear in Level 2 and game resets.

**Responsive Design**
    - Mobile-friendly layout.
    - Portfolio and market display side by side on desktop.
    - Smooth hover effects for buttons and social icons.

## Layout

- **Header Navigation** with Home, Market and Portfolio.
- **Landing Page** with game title, instructions and 'Start Game' button.
- **Game Section**:
    - Market (stock list with Buy/Sell).
    - Portfolio (cash balance, holdings, porfit/loss).
- **Footer** with social links (Instagram, Pinterest, YouTube).

## Technologies Used

- **HTML** - Structure
- **CSS3** - Styling (responsive with media queries)
- **JavaScript** - Game logic and interactivity
- **Bootstrap 5** - Navigation & grid system
- **Font Awesome** - Social media icons

## Code

### 1. **HTML ('index.html')**
- Contains **landing page** with title, instructions, start button and toggle for live prices when api connected.
- Defines the **game area** with two cards:
    - **Market** Displays stocks with live updating prices.
    - **Portfolio** Shows balance, purchased stocks, profit/loss.
- Includes a **footer** with copyright and social links.
- Uses [Bootstrap](https://getbootstrap.com/) for responsiveness and [Font Awesome](https://fontawesome.com/) for icons.

### 2. **CSS ('style.css')**
- Provides a **consistent design theme** (pastel pinks, neutral tones, rounded cards)
- **Styles Include:**
    - Cards for market and portfolio.
    - Buttons for buy/sell with hover effects.
    - Portfolio items styled to match market cards.
- **Responsive behaviour**
    - On **mobile**, buy/sell buttons stack and profit/loss text shrinks slightly.
    - On **tablet/desktop**, elements align side by side.

### 3. **Javascript ('script.js')**
Controls the **game logic and interactivity**

### State Variables
- 'balance', 'portfolio, 'stocks': Track player's money, owned stocks, and stock prices.
- 'currentLevel', 'startingBalance': Manage levels and progression.

### Core Functions
- 'renderStocks()': Builds the stock list dynamically with Buy\Sell buttons.
- 'updatePortfolio()': Updates balance, calculates profit/loss and renders holdings.
- 'buyStock()' / 'sellStock': Update holdings and balance.
- 'updatePrices()': Randomly adjusts stock prices every interval.
- 'checkLevelUp()': Unlocks Level 2 when portfolio grows by **=6%**.

### Live Prices
- Implemented with 'setInterval' to refresh stock values every **5 seconds** when enabled.

### References
- [MDN Web Docs - Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Font Awesome Docs](https://fontawesome.com/)

## Deployment

### Steps for Deployment
1. Log in to [Github](https://github.com/)
2. Navigate to the **Settings** tab.
3. In the left-hand menu, select **Pages**.
4. Under **Sources**, choose the 'main' branch and set folder to '/root'.
5. Click **Save**
6. The page will automatically refresh, and after a few minutes, your site will be live at'https://<your-username>.github.io/<repositiory-name>/'

##Testing

### Manual Testing

The project was tested manually in the following ways:

- **Navigation Bar**
    - All links are clickable and responsive on desktop and mobile.

- **Landing Page**
    - The title, subtitle, and instructions display clearly across all screen sizes.

- **Start Buttons**
    - Hides the landing page and displays the game section as expected.

- **Market Section**
    - Stocks display with buy/sell buttons.
    - Prices update every 5 seconds when "Live Prices" toggle is enabled.

 - **Portfolio Section**
    - Balance updates correctly after buying/selling.
    - Profit/Loss is calculated and color-coded (green = gain, red = loss).
    - Total portfolio value displays at the bottom.

- **Level Up**
    - When the portfolio grows by +6%, Level 2 unlocks with €20,000 starting balance and new stock options.

- **Footer**
    -Social icons link correctly to external sites.

### Responsive Testing

Tested on multiple devices and screen sizes:

- **Mobile**
    - Buy/Sell buttons stack
    - Profit/Loss test shrinks for readability.

- **Tablet/Desktop**
    - Layout displays side-by-side with no overlap.

