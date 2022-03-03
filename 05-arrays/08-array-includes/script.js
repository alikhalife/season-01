// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
        
    ];

    // your code here

    let answer;

    document.getElementById("run").addEventListener("click", () => {
        for (let i = 0; i < fruits.length; i++) {
            if(fruits[i] == "apple")  {
               answer = "yes"
               break;  
            } else {
               answer = "no"
            }
        }
        console.log(answer)
    })


})();

