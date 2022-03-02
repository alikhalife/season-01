
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    let opOneElement = document.getElementById("op-one");
    let opTwoElement = document.getElementById("op-two");
    let answer = document.getElementById("result");

    function addition(a, b) {
        return a + b;
    }

    function substraction(a, b) {
        return a - b;
    }

    function division(a, b) {
        return a / b;
    }

    function multiplication(a, b) {
        return a * b;
    }
    
    console.log(answer)

    const performOperation = operation => {
        // perform the operation


        if (operation == "addition") {
            console.log("bis")
            let value = addition(parseInt(opOneElement.value), parseInt(opTwoElement.value));
            answer.innerHTML= "The result is " + value;
        }
        else if (operation == "division") {
            let value = division(opOneElement.value, opTwoElement.value);
            answer.innerHTML = "The result is " + value;
        }
        else if (operation == "substraction") {
            console.log("for")
            let value = substraction(opOneElement.value, opTwoElement.value);
            answer.innerHTML = "The result is " + value;
        }
        else {
           let value = multiplication(opOneElement.value, opTwoElement.value);
            answer.innerHTML = "The result is " + value;
        }


    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();

const doSomething = something => {
    console.log(something)
}

doSomething("this thing")