
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    let answer = document.getElementById("result");

    function square (n) {
        return parseInt(n) * parseInt(n) 
    }
    

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        // answer.innerHTML = 'hello'
        
        let a = "";

        for(let i = 1; i < 21; i++) {
            console.log(square(i)); // will print on console
         a = a + "<br>" + square(i); //this is called concatenation - string manipulation

        }
       answer.innerHTML = a; // print on browser
        

    });

})();

