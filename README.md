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
