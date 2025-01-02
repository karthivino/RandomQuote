const copyButton = document.getElementById("copy");

copyButton.addEventListener("click", () => {
    copyQuote();
})

const copyQuote = () => {
    let quoteText = document.getElementById("Quote-text").innerText;
    navigator.clipboard.writeText(quoteText);
}

const quoteButton = document.getElementById("generate");

quoteButton.addEventListener("click", () => {
    generateQuote();
})


async function generateQuote() {
    const response = await fetch("https://quotes-api-self.vercel.app/quote");

    const data = await response.json();
    console.log(data)
    console.log(data.author)

    const quote = document.getElementById("Quote-text");
    quote.innerText = data.quote;

    const author = document.getElementById("author");
    author.innerText = "-" + data.author;
}
