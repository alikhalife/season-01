// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        constructor (name){
            this.name = name;
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Dog extends Animal {

        static greeting = "Woof!"

        constructor (name) {
            super(name);

        }

    }

    class Cat extends Animal {

        static greeting = "Mewwww !"

        constructor (name) {
            super (name);
        }
    }

    // your code here
  

    document.getElementById("run").addEventListener("click", () => {
       
        let dog1 = new Dog ("Canine")
        let cat1 = new Cat ("Bisseh")
        console.log(dog1.sayHello());
        console.log(cat1.sayHello());

    })
})();
