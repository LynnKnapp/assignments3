const readlineSync = require('readline-sync')
 console.log('Hello')

 let gameOver = false
let isAlive = true

function Character(name, hp,attack, weapon, tagline){
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.weapon = weapon;
        this.tagline = tagline;
    } 
    
    
 let elaine = new Character('Elaine',120, 20, ['the big salad', 'today sponge', 'the "get out!",push'], 'Yada,yada,yada, your through.')
let george = new Character('George',150,20,['the big shoe', 'pastrami sandwich', 'glamour magazine'], 'George is getting upset.')
let jerry = new Character('Jerry', 130, 20, ['microphone', 'cereal box', 'his cadilac'], "That's a shame")
let kramer = new Character('Kramer', 160, 20, ['the slicer', 'bronzo cleaner', 'Mr Marbles Chucky doll'], "I'm out there and I'm loving every minute of it." )
let characters =[elaine, jerry,george,kramer]
let selectPlayer = characters.map(characters => characters.name)

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
 let characterChoice =readlineSync.keyInSelect(selectPlayer, "Now choose your player")

    if(playerChoice === true){
        console.log(`You selected ${selectPlayer[characterChoice]}`)
    } else {
        console.log(" Why are you here then? Go home to mommy.")
        gameOver === true
    } 
    console.log(selectPlayer[characterChoice])
    const character = characters[characterChoice]

 
let readyToWalk = readlineSync.keyInYN('Are you ready to start walking?')               
        if (readyToWalk === true){
            console.log(characterChoice)
            while(character.hp > 0 && isAlive){
                walk()

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
            console.log("Keep heading to the coffee shop")
        }else if(random === 2){
            console.log("Go back to Jerry's apartment")
        }else{
            console.log('You ran into a jerkstore')
            jerkStoreAppears()
        }  
}
console.log(Jerkstore)
function jerkStoreAppears() {
        
    let currentJerkStore = jerkStores[Math.floor(Math.random() * jerkStores.length)]
    console.log(`you have encountered ${JerkStores[currentJerkStore]}`)
    console.log(`${jerkStore.encounterTagLine}`)
    let chooseFight = readlineSync.keyIn("Do you want to fight [f] for fight, [r] to  run?", {
        limit: 'fr'})
    
    if (chooseFight === "f" && currentJerkStore === newman) {
            console.log("Hold onto your food, you encountered Newman, he'll starve immediately without his chocolate sauce to dip his Kenny Roger's broccoli in.")
                let answer1 = readlineSync.keyInYN('Are you going to fight Newman, or walk? [f] for fight or [w] to walk')
                    if(answer1 === 'f'){
                        attackJerkStore()
                    }else{
                        walk()
                    } 
        }else if ( chooseFight === 'f' && currentJerkStore === soupNazi){                
            console.log("You've encountered the Soup Nazi, don't get in the line.  Then he'll go shoot himself.") 
                    if(answer1 === 'f'){
                        attackJerkStore()
                    }else{
                        walk()
                    } 

        }else if (chooseFight === 'f' && jcurrentJerkStore === frankCostanza) {
            console.log("Yell Serenity Now, it'll turn him insane and he'll shrink.")
                    if(answer1 === 'f'){
                        attackJerkStore()
                    }else{
                        walk()
                    } 
        }               
} 
function attackJerkStore(jerk) {
    console.log("Attack Jerkstore.")
    if (jerkStores.length === 0){
        gameOver = true
    }else {
    let currentPersonIndex = Math.floor(Math.random() * 3)
    let currentPerson = player[currentPersonIndex]
​
    while (jerk.hp > 0) {
       let  randomWeapon = currentPerson.weapon[Math.floor(Math.random() * 3)]
        if (randomWeapon === currentPerson.weapon[0]) {
            console.log(`You attacked ${jerk.name} with ${currentPerson.weapon[0]}`)
            jerk.hp -= 10
            console.log(`${jerk.name} now has ${jerk.hp} hp points`)
        } else if (randomWeapon === currentPerson.weapon[1]) {
            console.log(`${jerk.name} attacked you with ${currentPerson.weapon[1]}`)
            jerk.hp -= 15
            console.log(`${jerk.name} now has ${jerk.hp} hp points`)
        } else if (randomWeapon === currentPerson.weapon[2]) {
            console.log(`${jerk.name} attacked you with ${currentPerson.weapon[2]}`)
            jerk.hp -= 25
            console.log(`${jerk.name} now has ${jerk.hp} hp points`)
        }
    }
    jerkStores.splice(jerkStores.indexOf(jerk),1)
    item.push(jerk.item)
    }
}


    
    