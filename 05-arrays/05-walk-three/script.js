// 05-arrays/05-walk-three/script.js - 5.5: walk through the list (3)


(() => {

    let people = [
        {
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
    ];

    console.log(people[0].firstname)
    // your code here

    function logFirstName(object) {
        console.log(object.firstname)
    
    }

    document.getElementById("run").addEventListener("click", () => {
        
        // I defined a function called logFirstName on line 54
        // I then used it inside forEach method
        // That way my code is cleaner than the second option below

        people.forEach(logFirstName)

        // this is another way of using forEach
        // here I am declaring the function inside the forEach method

        people.forEach(function(element) {
            console.log(element.firstname)
        })
    })

})();


