
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const author = document.getElementById('author')
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [...localQuotes];
// show loading

function loading() {
    loader.hidden = false;
    quoteContainer.parentElement.hidden = true;
}

/* hide loading */
function complete() {
    if (!loader.hidden) {
        quoteContainer.parentElement.hidden = false;
        loader.hidden = true;
    }
}



//hard coded quotes ;
// show new quote
function newQuote() {
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //check if author field is empty;
    if (!quote.author) {
        author.textContent = "unKnown";
    } else {
        author.textContent = quote.author;
    }
    // check length to determine styling;
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();
}



/* get Quote from API */
/* async function getQuote() {
    loading();
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/"
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();

        // if author is blank replace it with unknown 
        if (data.quoteAuthor === "") {
            authorText.innerText = "unknown";
        } else {
            authorText.innerText = data.quoteAuthor;
        }

        // reduce font size for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;
        // stop loader and show Quote
        Complete();

    } catch (error) {
        getQuote();
    }
} */





/* tweet Quote */

function tweetQuote() {
    const quote = quoteText.innerText;
    const byAuthor = author.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${byAuthor}`;
    window.open(twitterUrl, '_blank');
}

/* Event listeners */
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// onload external api
// getQuote();
newQuote();