const readlineSync = require('readline-sync')

const player = readlineSync.question('Enter your name ')
console.log('Hello ' + player )

let gameover = false
let options =["put hand in the hole", "find the key", "open the door"]
let foundkey = false

while(!gameover){
    let choice = readlineSync.keyInSelect(options, 'What are you going to do?')
    if(choice === 0) {
        console.log('No you dweeb, you should have gotten the key first.  You just bit the dust')
        gameover = true
    }else if (choice === 1){
        console.log('Great you found the key, now go open the door')
        foundkey = true
    }else if (choice === 2){
        console.log ('You can"t open the door without the key, go find the key first.')

    }
}
