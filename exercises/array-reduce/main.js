const arr = [1,2,3]
const sum = arr.reduce((total,num)=> total + num)
 
 
 console.log(sum)

 function stringConcat(arr) {
        return arr.reduce((total,num) => total.toString() + num.toString())
    }
     
     console.log(stringConcat([1,2,3]))

function totalVotes(person) {
     return person.reduce(function(add,person) {
        let voter =person.voted === true
         return voter.voted === true

     })
    }   
function totalVotes(voters){
    return voters.reduce(function(acc,curr){
            if (curr.voted === true){
                return acc + 1
            } else{
                return acc
            }
    
            },0 )
} 
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
                     