const readlineSync = require('readline-sync')
console.log('Hello')

let gameOver = false
let isAlive = true
// let item = []

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
    
let playerChoice = readlineSync.keyInYN('Are you ready to play?')
let characterChoice =readlineSync.keyInSelect(selectPlayer, "Now choose your player")

    if(playerChoice === true && characterChoice === 0){
        console.log(`You selected Elaine`)
        }else if(playerChoice === true && characterChoice === 1){
            console.log(`You selected Jerry`)
        }else if(characterChoice === 2){
            console.log('You selected George')
        }else if(characterChoice === 3) {
            console.log('You selected Kramer')
        }else{
        console.log(" why the hell are you here then, loser go home.")
          gameOver === true
        } 
        console.log(selectPlayer[characterChoice])
       
let readyToWalk = readlineSync.keyInYN('Are you ready to start walking?')
    if (readyToWalk === true){
        walk()
    }else{
        console.log('You better get moving or a jerkstore will appear.')
    }

    function jerkStore(name, hp, attack, weapon, tagline, encounterTagLine){
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.weapon = weapon;
            this.tagline = tagline;
            this.encounterTagLine = encounterTagLine;
            
    }
    console.log(jerkStore)
    
    let ​newman = new jerkStore('Newman', 120, 20, ['mailbag','the dog rope','mail truck'], 'When you control the mail, you control information', 'Hold onto your food, you encountered Newman, hahahahaha.')
    // let soupNazi = new jerkStore('Soup Nazi', 100, 15, ['crab bisque', 'chef knife', 'his finger'], 'no soup for you, 1 year', "You've encountered the Soup Nazi, don't get in his line.")
    // let frankCostanza = new jerkStore('Frank Costanza', 110, 10, ["Frank's cooking", 'his obscentities', 'headslap'], 'You saying you want a piece of me, you want a piece of me.  You got it!!', "Oh no it's Frank Costanza.  Prepare for the feats of strength.")
    // let randomJerkStores = [newman, soupNazi, frankCostanza]
    // ​
    console.log(newman)
    function walk(){
        let random = Math.floor(Math.random()*3)
            if(random === 1){
                console.log("Keep heading to the coffee shop")
                walk()
            }else if(random === 2){
                console.log("Go back to Jerry's apartment")
                walk()
            }else{
                console.log('You ran into a jerkstore')
                // jerkStoreAppears()
            }  
    }
    
    