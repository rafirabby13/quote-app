fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
        quoteGenerator(data);
    });
// document.addEventListener("DOMContentLoaded", (event) => {
//   fetch("https://api.quotable.io/random")
//     .then((response) => response.json())
//     .then((data) => {
//       quoteGenerator(data);
//     });
// });
function quoteGenerator(data) {
  const quoteContent = document.getElementById("quote-container");
  console.log(data.author);

 
    const quote = document.createElement("h1");
    const author = document.createElement("p");
    quote.innerText = data.content;
    author.innerText = data.author;
    quoteContent.appendChild(quote);
     quoteContent.appendChild(author);
  
}

const btn = document.getElementById("btn");

btn,addEventListener("click", () => {
    location.reload();
})

