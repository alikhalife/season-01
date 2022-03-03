// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    let object = document.getElementById("object")

    document.getElementById("run").addEventListener("click", () => {

        let obj = {
            firstname: "Ali",
            lastname: "Khalife",
            age: "29",
            city: "Brussels",
            country: "Lebanon",

        }

        object.innerHTML = obj;

        console.log(obj)
    })

    let obj1 = {};

    obj1.firstname = "Ali";

    console.log(obj1)
})();


