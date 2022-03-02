
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    var number = document.getElementById("number");
    let result = document.getElementById("result");

    function factorial(n) {
        let answer = 1;
        if (n == 0 || n == 1) {
            return answer
        } else {
            for (var i = n; i >= 1; i--) {
                answer = answer * i;
            }
            return answer;
        }
    }


    document.getElementById("run").addEventListener("click", () => {

        // your code here

        answer = factorial(number.value);
        console.log("The factorial of " + number.value + " is " + answer);
        result.innerHTML = result.innerHTML + "<br>" + "The factorial of " + number.value + " is " + answer;

    });



})();
