let quote = document.getElementById("quote")
let author = document.getElementById("author")
let btn = document.getElementById("new-quote")
var getquote = () => {
    fetch("https://api.quotable.io/random").then(data => data.json()).then(item => {
        quote.innerText=item.content
        author.innerText=item.author
    })
}
window.addEventListener("load", getquote)
btn.addEventListener("click", getquote)