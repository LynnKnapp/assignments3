const readlineSync = require('readline-sync');


const num1 = Number(readlineSync.question("Hello, please enter your first number."))
const num2 =Number(readlineSync.question("Now enter your second number."))

const operation = [ "addition", "multiplication", "subtraction", "division"] 
const choice = readlineSync.keyInSelect(operation, 'Which operation do you want to use?');
console.log(num1 + num2 + choice)

const math= function method(num1, num2){

    if (operation === 0){
        return addition
    } else if (operation=== 1){
    return multiplication
    }else if (operation === 2){
    return subtraction
    }else if(operation === 3){
    return division
    }
    return math()
}

const addition =(num1,num2) =>{
   return num1 + num2
}
// console.log(addition(num1,num2))


const multiplication =(num1,num2) =>{
   return  num1 * num2
}
//  console.log(multiplication(num1,num2))


const subtraction =(num1,num2) =>{
    return num1 - num2
}
// console.log(subtraction(num1,num2))


const division =(num1,num2) =>{
    return num1 /num2

}
// console.log(division(num1,num2))

