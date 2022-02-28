
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let opOne = document.getElementById("op-one")
    let opTwo = document.getElementById("op-two")
    let answer = document.getElementById("result")


    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition

        let add = parseInt(opOne.value) + parseInt(opTwo.value);
        answer.innerHTML = "The result is " + add;
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction

        let substract = parseInt(opOne.value) - parseInt(opTwo.value)
        answer.innerHTML = "The result is " + substract;

    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication

        let multiplication = parseInt(opOne.value) * parseInt(opTwo.value);
        answer.innerHTML = "The result is " + multiplication;
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let division = parseInt(opOne.value) / parseInt(opTwo.value);
        answer.innerHTML = "The result is " + division;
    });
})();

(function () {} )() // this is called IIFE, Immediattely Invoqued Function Expression