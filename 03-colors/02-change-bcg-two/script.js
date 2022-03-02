
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2



(() => {

    // your code here

    let userInput = document.getElementById("color")
    let body = document.querySelector("body")

    document.getElementById("run").addEventListener("click", () => {
        console.log(userInput.value)

        body.style.backgroundColor = userInput.value.toLowerCase();
    })

})();
