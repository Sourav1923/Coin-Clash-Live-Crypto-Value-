// menu
const menu = document.querySelector('.menu')
const navUl = document.querySelector('.nav-ul');

menu.addEventListener('click', function() {
    menu.classList.toggle('active')
    navUl.classList.toggle('active')
})

document.querySelectorAll('.nav-a').forEach(n => n.addEventListener('click', function() {
    menu.classList.remove('active');
    navUl.classList.toggle('active');
}))

// scroll

const root = document.documentElement;
const brandElementsDisplayed = getComputedStyle(root).getPropertyValue('--brand-elements-displayed');

const brandContent = document.querySelector('.brand-content');

root.style.setProperty('--brand-elements', brandContent.children.length);

for (let i = 0; i < brandElementsDisplayed; i++) {
    brandContent.appendChild(brandContent.children[i].cloneNode(true))
}

let ws = new WebSocket ('wss://stream.binance.com:9443/ws/btceur@trade');
let stockPriceElement = document. getElementById('stock-price');
let lastPrice = null;
// let bitcoin=document.querySelector(".bitcoin");

ws.onmessage = (event) => {
let stockObject = JSON.parse (event. data) ;
let price = parseFloat (stockObject.p).toFixed (2);
stockPriceElement.innerText = price;
// bitcoin.innerText= price;
stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? '#50cc2d' : '#cc2d2d'
lastPrice = price;
}

// Fetch live cryptocurrency prices and update the DOM
// Function to fetch and update prices, then restart the animation
async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,cardano,okb,solana,tether&vs_currencies=usd');
        const data = await response.json();

        // Update each cryptocurrency price in the `.brand-content` div
        document.querySelector('.bitcoin').textContent = `$${data.bitcoin.usd}`;
        document.querySelector('.ethereum').textContent = `$${data.ethereum.usd}`;
        document.querySelector('.dogecoin').textContent = `$${data.dogecoin.usd}`;
        document.querySelector('.cardano').textContent = `$${data.cardano.usd}`;
        document.querySelector('.okb').textContent = `$${data.okb.usd}`;
        document.querySelector('.solana').textContent = `$${data.solana.usd}`;
        document.querySelector('.tether').textContent = `$${data.tether.usd}`;

        // Restart animation by removing and re-adding the animation class
        const brandContent = document.querySelector('.brand-content');
        brandContent.style.animation = 'none';  // Temporarily disable animation
        void brandContent.offsetWidth;          // Trigger reflow
        brandContent.style.animation = '';      // Re-enable animation with updated content

    } catch (error) {
        console.error("Error fetching cryptocurrency prices:", error);
    }
}

// Initial call and set interval for refreshing data and animation every minute
fetchCryptoPrices();
setInterval(fetchCryptoPrices, 60000);
