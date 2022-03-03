// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here

    const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

    let n1 = document.getElementById("n-1")
    let n2 = document.getElementById("n-2")
    let n3 = document.getElementById("n-3")
    let n4 = document.getElementById("n-4")
    let n5 = document.getElementById("n-5")
    let n6 = document.getElementById("n-6")
    let n7 = document.getElementById("n-7")
    let n8 = document.getElementById("n-8")
    let n9 = document.getElementById("n-9")
    let n10 = document.getElementById("n-10")

    let min = document.getElementById("min")
    let max = document.getElementById("max")
    let sumVar = document.getElementById("sum")
    let averageVar = document.getElementById("average")

    console.log(array);

    document.getElementById("run").addEventListener("click", () => {


        n1.innerHTML = array[0]
        n2.innerHTML = array[1]
        n3.innerHTML = array[2]
        n4.innerHTML = array[3]
        n5.innerHTML = array[4]
        n6.innerHTML = array[5]
        n7.innerHTML = array[6]
        n8.innerHTML = array[7]
        n9.innerHTML = array[8]
        n10.innerHTML = array[9]

        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        min.innerHTML = Math.min.apply(Math, array); // the apply() method was used before ES6/ES2015 
        max.innerHTML = Math.max(...array); // With ES6/ES2016 destructuring assignment it becomes easier
        sumVar.innerHTML = sum;
        averageVar.innerHTML = sum / array.length;

    })

})();


