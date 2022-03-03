// 06-objects/03-keys-values/script.js - 6.3: keys & values


(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here

    

    document.getElementById("run").addEventListener("click", () => {

       console.log(Object.keys(person)) 

       let arr = [];

       Object.keys(person).forEach(function(property) {
           console.log(person[property])


           arr.push(person[property])
       })

       console.log(arr)
    })
})();

["a", "b", "c", "d"].forEach(function(value){
    console.log(value)
})
