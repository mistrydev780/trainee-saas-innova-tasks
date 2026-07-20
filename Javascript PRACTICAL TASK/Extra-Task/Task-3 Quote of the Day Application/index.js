let quote = [];

const getQuote = async () => {
    let response = await fetch("https://dummyjson.com/quotes/random");
    let data = await response.json()
    quotes = data;
    console.log(data)
    return data;
}

document.getElementById("btnQuote").addEventListener("click", async function () {
    let data = await getQuote();

        document.getElementById("author").innerHTML = `Author: ${data.author}`;
        document.getElementById("quote").innerHTML = `Quote: "${data.quote}"`;

 let authorElement = document.getElementById("author");
        let quoteElement = document.getElementById("quote");

        authorElement.innerHTML = `Author: ${data.author}`;
        quoteElement.innerHTML = `Quote: "${data.quote}"`;
})

 window.addEventListener("DOMContentLoaded", async () => {
    let data = await getQuote();
    if (data) {
        document.getElementById("author").innerHTML = `Author: ${data.author}`;
        document.getElementById("quote").innerHTML = `Quote: ${data.quote}`;
    }
});





