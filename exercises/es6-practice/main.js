// let name = "John"
// let age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables (arr) {
//      arr.map(carrot => {
//         return { type: "carrot", name: carrot }
//     })
// }

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => {
//         return person.friendly
//     })
// }

// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = (a, b) =>{ return a,b}

let person ={
    firstName: 'Jane',
    lastName: 'Doe',
    age: 39
}
     
const printString = (firstName, lastName, age) =>{
    console.log(`${firstName} ${lastName}${age}`)
    return firstName + lastName + age
}

