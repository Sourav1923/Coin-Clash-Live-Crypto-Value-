# Crypto Exchange Coin Clash

![Crypto Exchange Coin Clash](https://crypto-exchange-coin-clash-sourav.netlify.app/)

A live cryptocurrency value display website that fetches and displays the latest prices of popular cryptocurrencies in real time.

## 🌐 Live Preview

Visit the live website here: [Crypto Exchange Coin Clash](https://crypto-exchange-coin-clash-sourav.netlify.app/)

## 📌 Features

- **Live Data**: Displays real-time prices of popular cryptocurrencies.
- **User-Friendly Interface**: Simple and intuitive design for ease of navigation.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 🛠️ Tech Stack

- **HTML** - For structuring the content.
- **CSS** - For styling and layout.
- **JavaScript** - To fetch and display live cryptocurrency prices.
- **APIs**:
  - **Binance WebSocket API**: Used for real-time BTC/EUR trade data.
    - Endpoint: `wss://stream.binance.com:9443/ws/btceur@trade`
  - **CoinGecko REST API**: Used to fetch current prices of various cryptocurrencies in USD.
    - Endpoint: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,cardano,okb,solana,tether&vs_currencies=usd`
- **Netlify** - Hosting platform for live deployment.

## 🚀 Getting Started

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Sourav1923/Coin-Clash-Live-Crypto-Value-.git
   cd crypto-exchange-coin-clash
