const API_URL = 'https://api.adviceslip.com/advice';

const elHeading = document.querySelector('.advice__id');
const elText = document.querySelector('.advice__text');
const elBtn = document.querySelector('.btn');

async function getRandomQuote() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const {id, advice} = data.slip;
    
    elHeading.textContent = `Advice #${id}`;
    elText.textContent = `"${advice}"`;
}

getRandomQuote();
elBtn.addEventListener('click', getRandomQuote);