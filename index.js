const quoteBank = [
  {
    quote: '“Without music, life would be a mistake.”',
    author: '- Friedrich Nietzsche'
   },
   {
    quote: '“One good thing about music, when it hits you, you feel no pain.”',
    author: '― Bob Marley'
   },
   {
    quote: '“And, in the end the love you take is equal to the love you make.”',
    author: '― Paul McCartney'
   },
   {
    quote: '“Without deviation from the norm, progress is not possible.”',
    author: '― Frank Zappa'
   },
   {
    quote: '“Some people have lives; some people have music.”',
    author: '― John Green, Will Grayson, Will Grayson'
   },
   {
    quote: '“If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.”',
    author: '― Albert Einstein'
   },
   {
    quote: '“After silence, that which comes nearest to expressing the inexpressible is music.”',
    author: '― Aldous Huxley'
   }

  ];

window.onload = init;
function init() {
  generateQuote()
}

function generateQuote() {
  let quoteSize = quoteBank.length;
  let randomQuote = Math.floor(Math.random() * quoteSize);
  let randomQuoteInfo = quoteBank[randomQuote];

  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="

  //Add The Quote
  let quoteInApiFormat = randomQuoteInfo.quote.replace(/ /g, "%20");
  twitterLink += quoteInApiFormat
  //Add The Author
  let authorInApiFormat = randomQuoteInfo.author.replace(/ /g, "%20");
  twitterLink += " - " + authorInApiFormat

  document.getElementById("tweet-quote").href =twitterLink;
  document.getElementById("text").innerText = randomQuoteInfo.quote;
  document.getElementById("author").innerText = randomQuoteInfo.author;
}