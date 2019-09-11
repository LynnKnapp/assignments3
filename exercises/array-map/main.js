// let numArr=[2,5,100]
// let doubleNumbers = numArr.map(function(num){
//     return num * 2
// })

  
//   console.log(doubleNumbers)

//   let strArr =[2,5,100]

//   const stringItUp = strArr.map(function(num){
//     return  num.toString()
     
// })
// console.log(stringItUp)
// let array = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// const capitalizeNames =
//     array.map(function(str){
        
//     return  str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
//     })
  
  
//   console.log(capitalizeNames)

  
//   let namesArr =[
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]

// const namesOnly = namesArr.map(function(name){
//     return name.name
// })
// console.log(namesOnly)

let objArr =[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const matrix = objArr.map(function(person){
    if(person.age >= 18){
        console.log(`${person.name} can go to the Matrix`)
    }else{
        console.log(`${person.name} can't go, don't let him in.`)
    }
})

 