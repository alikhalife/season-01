
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here

    let body = document.querySelector("body")

    document.getElementById("red").addEventListener("click", () => {
        document.body.style.backgroundColor = "red";
    })

    document.querySelector("#green").addEventListener("click", () => {
        body.style.backgroundColor = "green";
    })

    document.getElementById("yellow").addEventListener("click", () => {
        body.style.backgroundColor = "yellow";
    })

    document.querySelector("#blue").addEventListener("click", () => {
        body.style.backgroundColor = "blue";
    })

})();
