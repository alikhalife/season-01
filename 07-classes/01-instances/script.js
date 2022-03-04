// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        let myCat1 = new Cat ("Skitty", "9 years")
        let myCat2 = new Cat ("Pixel", "6 years")

        console.log(myCat1, myCat2)

    })


})();
