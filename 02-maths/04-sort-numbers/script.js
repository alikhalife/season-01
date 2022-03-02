// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value


    let numberValue = document.getElementsByName("numbers")[0].value
    let answer = document.getElementById("result")

    const array = numberValue.split(",");


    // console.log(numberValue);
    // console.log(array);


    document.getElementById("run").addEventListener("click", () => {

        // your code here

        array.sort(function (a, b) { return a - b });
        answer.innerHTML = "Congratulations, you have created an array which is in ascending order: " + array;
        console.log(array)

        array.sort(function(a, b) { return b - a});
        answer.innerHTML = answer.innerHTML + "<br>" 
            + "Congratulations, you have created an array which is in descending order: " + array;
        console.log(array)



    });

})();
