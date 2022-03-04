// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here

    class Person {

        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return this.firstname + " " + this.lastname 
        }

        set name(fullname) {
            this.firstname = fullname.split(" ")[0];
            this.lastname = fullname.split(" ")[1];
        }
       
    }

document.getElementById("run").addEventListener("click", () => {


    let person1 = new Person("John", "Doe");
   console.log(person1.name);
   

   person1.name = "Jane Dough";
   console.log(person1.name);

})
   



})();
