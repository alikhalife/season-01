
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)




(() => {

    // your code here
    let body = document.querySelector("body");
    let result = document.getElementById("result")

    document.getElementById("run").addEventListener("click", () => {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        body.style.backgroundColor = "#" + randomColor

        result.innerHTML = "#" + randomColor;

    })

})();

