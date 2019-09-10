const readlineSync = require('readline-sync')
 console.log('Hello')

let gameOver = false
let isAlive = true
let item = []


function Character(name, hp,attack, weapon, tagline){
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.weapon = weapon;
        this.tagline = tagline;
    } 
    
    
    function chooseCharacter(){
    let characters =['elaine', 'jerry','george','kramer']
    let characterChoice =readlineSync.keyInSelect(characters, "Now choose your player")
    if(characterChoice === 0){
        return new Character('Elaine',120, 20, ['the big salad', 'today sponge', 'the "get out!",push'], 'Yada,yada,yada, your through.')
    }else if(characterChoice === 1){
        return new Character('George',150,20,['the big shoe', 'pastrami sandwich', 'glamour magazine'], 'George is getting upset.')
    }else if(characterChoice === 2){
        return new Character('Jerry', 130, 20, ['microphone', 'cereal box', 'the cadilac'], "That's a shame")
    }else{
        return new Character('Kramer', 160, 20, ['the slicer', 'bronzo cleaner', 'Mr Marbles Chucky doll'], "I'm out there and I'm loving every minute of it." )
    }   
 }

function JerkStore(name, hp, attack, weapon, tagline, encounterTagLine){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.weapon = weapon;
    this.tagline = tagline;
    this.encounterTagLine = encounterTagLine;   
}
    
let newman = new JerkStore('Newman', 120, 20, ['mailbag','the dog rope','mail truck'], 'When you control the mail, you control information', 'Hold onto your food, you encountered Newman, hahahahaha.')
let soupNazi = new JerkStore('Soup Nazi', 100, 15, ['crab bisque', 'chef knife', 'his finger'], 'no soup for you, 1 year', "You've encountered the Soup Nazi, don't get in his line.")
let frankCostanza = new JerkStore('Frank Costanza', 110, 10, ["Frank's cooking", 'his obscentities', 'headslap'], 'You saying you want a piece of me, you want a piece of me.  You got it!!', "Oh no it's Frank Costanza.  Prepare for the feats of strength.")
let jerkStores = [newman, soupNazi, frankCostanza]

      
    
let playerChoice = readlineSync.keyInYN('Are you ready to play?')

    if(playerChoice === true){

        let currentPlayer = chooseCharacter()
        console.log(currentPlayer)
    } else {
        console.log("Why are you here then? Go home to mommy.")
        gameOver === true
    } 
    // console.log(selectPlayer[characterChoice])
    // const character = characters[characterChoice]

 
let readyToWalk = readlineSync.keyInYN('Are you ready to start walking?')               
        if (readyToWalk === true){

            while(gameOver === false){
            // console.log('character choice', characterChoice)
             let keepGoing =readlineSync.keyInYN('Do you want to keep walking?')
             if(keepGoing){
                 walk()
             }else{
                 gameOver = true
             }
            }    
            
        }else{
            console.log("You just got ran over by Neuman's mailtruck. You need 2 pints of Kramer or you will die")
            let blood = readlineSync.keyInYN("Are you going to accept Kramer's blood")
                if(blood === 'y'){
                    console.log('You end up living for 2 weeks then die of beefarino blood contamination.')
                }else{
                    console.log('Well you dead then.')
                    gameover = true
                }
        }
function walk(){
    let random = Math.floor(Math.random()*3)
    // Math.floor(Math.random) (50 -25) +25) 
        if(random === 1){
            console.log("George's worlds are colliding, head to the coffee shop before Susan shows up.")
        }else if(random === 2){
            console.log("Newman is eating Kenny Rogers chicken in Jerry's bed, quick head to Jerry's apartment. ")
        }else{
            console.log('On the way to the movies you ran into a Jerkstore')
            jerkStoreAppears()
        }  
}
// console.log(` ${currentJerkStore}`)

function jerkStoreAppears() {
        let randomNum = Math.floor(Math.random() * jerkStores.length)
    let currentJerkStore = jerkStores[randomNum]
    // console.log("rannum",randomNum)
    // console.log(`13 You have encountered ${currentJerkStore.name}`)
    // console.log(`15 ${currentJerkStore.encounterTagLine}`)
    let chooseFight = readlineSync.keyIn("Do you want to fight [f] for fight, [r] to  run?", {  
        limit: 'fr'})
    
    if (chooseFight === "f" && currentJerkStore === newman) {
            console.log("Hold onto your food, you encountered Newman, he'll starve immediately without his chocolate sauce to dip his Kenny Roger's broccoli in.")
                let answer1 = readlineSync.keyIn('Are you going to fight Newman, or walk? [f] for fight or [w] to walk', {limit: 'fr'})
                    if(answer1 === 'f'){
                        attackJerkStore(currentJerkStore)
                        if(character.hp >0){
                               walk()
                        }else{
                            gameOver = true
                            console.log("Game is over")
                        }      
                    }else{
                        walk()
                    } 
        }else if ( chooseFight === 'f' && currentJerkStore === soupNazi){                
            console.log("You've encountered the Soup Nazi, don't get in the line, or he'll incapacitate you for 1 year.")
            let answer2 = readlineSync.keyIn('Are you going to fight Soup Nazi, or walk? [f] for fight or [w] to walk', {limit: 'fr'}) 
                    if(answer2 === 'f'){
                        attackJerkStore(currentJerkStore)
                        if(character.hp >0){
                            walk()
                     }else{
                         gameOver = true
                         console.log("Game is over")
                     }      
                    }else{
                        walk()
                    } 

        }else if (chooseFight === 'f' && currentJerkStore === frankCostanza) {
            console.log("Yell Serenity Now, it'll turn him insane and he won't be able to fight.")
            let answer3 = readlineSync.keyIn('Are you going to fight Frank, or walk? [f] for fight or [w] to walk', {limit: 'fr'})
                    if(answer3 === 'f'){
                        attackJerkStore(currentJerkStore)
                        if(character.hp >0){
                            walk()
                     }else{
                         gameOver = true
                         console.log("Game is over")
                     }      
                    }else{
                        walk()
                    } 
        }               
}
function encounterLoop(currentJerkStore){
    while(currentJerkStore.hp > 0 && currentPerson.hp > 0 ){
        attackJerkStore(currentJerkStore)
    }
}

function attackJerkStore(currentJerkStore) { 
    if (jerkStores.length === 0){
        gameOver = true
    }else {
        // let currentPersonIndex = Math.floor(Math.random() * 3)
        // currentPerson = characters[currentPersonIndex]

        
            // let randomFight = Math.floor((Math.random * 2) + 1)    
            // console.log(randomFight)
            let  randomWeapon = currentPerson.weapon[Math.floor(Math.random() * 3)]
            // let jerkWeapon = currentJerkStore.weapon[Math.floor(Math.random()* jerkStores.length)]
                if (randomWeapon === currentPerson.weapon[0]) {
                    console.log(` You attacked ${currentJerkStore.name} with ${currentPerson.weapon[0]}`)
                    currentJerkStore.hp -= 10
                    console.log(`${currentJerkStore.name} now has ${currentJerkStore.hp} hp points`)
                    // readlineSync.keyInYN("He's beating the shit out of you, do you want to keep going?")
                } else if (randomWeapon === currentPerson.weapon[1]) {
                    console.log(`You attacked ${currentJerkStore.name} with ${currentPerson.weapon[1]}`)
                    currentJerkStore.hp -= 15
                    console.log(`${currentJerkStore.name} now has ${currentJerkStore.hp} hp points`)
                } else if (randomWeapon === currentPerson.weapon[2]) {
                    console.log(`You attacked ${currentJerkStore.name} with ${currentPerson.weapon[2]}`)
                    currentJerkStore.hp -= 25
                    console.log(`${currentJerkStore.name} now has ${currentJerkStore.hp} hp points`)
                }
                
             
                    // if(currentJerkStore.hp <= 0 && character.hp <= 0){
                    //     console.log("Gameover ")
                    // }else{
                    //     console.log("Great fight, let's go again")
                    //     walk()
                    jerkStores.splice(jerkStores.indexOf(currentJerkStore),1)
                    item.push(currentJerkStore.item)
                    // }
                    // if(currentJerkStore.hp <= 0){
                    // }
                    if(jerkStores.length === 0){
                        gameOver = true
                        console.log('Game over.')
                    }
    }
}

// let jerkWeapon = currentJerkStore.weapon[Math.floor(Math.random()* jerkStores.length)]

// function attackCharacter(characterChoice){
//    while(characterChoice.hp > 0 && jerkWeapon.weapon === 0){
//         console.log(`${currentJerkStore.name} attacked you with ${jerkWeapon}`)
//         currentPerson.hp -= 10
//         console.log(`${currentPerson.name} now has ${currentPerson.hp} hit points`)
//         }if(characterChoice.hp > 0 && jerkWeapon.weapon === 1){
//             console.log(`${currentJerkStore.name} attacked you with ${jerkWeapon}`)
//             currentPerson.hp -= 15
//             console.log(`${currentPerson.name} now has ${currentPerson.hp} hit points`)
//         }else{
//             console.log(`${currentJerkStore.name} attacked you with ${jerkWeapon}`)
//             currentPerson.hp -= 20
//             console.log(`${currentPerson.name} now has ${currentPerson.hp} hit points`)  
//         } 
// } 


    
    