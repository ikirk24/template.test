// 
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader');


let apiQuotes = []; 

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true; 
}

// Hide Loading 
function complete() {
    quoteContainer.hidden = false; 
    loader.hidden = true; 
}


// Show New Quote
function newQuote(){
    loading();
    // Pick a Random Quote Form apiQUotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is blank and raplace it with a string
    if (!quote.author){
        author.Text.textContent = 'Unknown'
    } else {
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
    }
    // Check Quote length to determine styling
    if(quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    //Set Quote, Hide Loader
    quoteText.textContent = quote.text; 
    complete();
    
}
// Get Quotes From API 
async function getQuotes() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){
        // Catch Error Here 
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank'); 
}

// Event Listener 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();

// complete();