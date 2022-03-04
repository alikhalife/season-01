//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    
    document.getElementById("run").addEventListener("click", () => {
        
        class person {
            constructor (firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
            sayHello() {
                console.log("Hello", this.firstname, this.lastname)
            }
        }

        let person1 = new person ("Fantastik","Bombastik")
        let person2 = new person ("Bombastiss", "Fantastiss")

        person1.sayHello();
        person2.sayHello();

        
    })
})();
