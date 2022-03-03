// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        let removeLast = fruits.pop();
        console.log(removeLast);
        console.log(fruits);

        let removeFirst = fruits.shift();
        console.log(removeFirst);
        console.log(fruits);

        let addLast = fruits.push("kiwi");
        let addFirst = fruits.unshift("banana");

        console.log(fruits);

    })

})();
