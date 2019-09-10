// let array = [3, 6, 8, 2]

// const result = array.filter(function(num) {
//         if(num > 5){
//             return num
//         }
//     })
//   console.log(result)
// let array = [3,6,8,5,2]
// const evensOnly = array.filter(function(num){
//     if(num % 2 === 0){
//         return num
//     }
// } )
    
//   console.log(evensOnly)
//  let array =["dog", "wolf", "by", "family", "eaten", "camping"] 
// const fiveCharactersOrFewerOnly = array.filter(function(item){
//     if(item.length > 5 )
//     return item
// }) 
    
  
  
//   console.log(fiveCharactersOrFewerOnly)

// let peopleArr =[
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]
// const peopleWhoBelongToTheIlluminati = peopleArr.filter(function(person){
//     if(person.member === true){
//         return person
//     }
// })
    
  
  
//   console.log(peopleWhoBelongToTheIlluminati)
  
  
  let peopleArr =[
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ] 

  const ofAge = peopleArr.filter(function(person){
      if(person.age >= 18){
          return person
      }
  })
  console.log(ofAge)