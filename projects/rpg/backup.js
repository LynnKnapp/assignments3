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
    if(playerChoice === true){
        let characterChoice =readlineSync.keyInSelect(selectPlayer, "now choose your player")
            if(characterChoice === 0){
                console.log('Elaine')
            }else if(characterChoice === 1){

                console.log('George')
            }else if(characterChoice === 2){
                console.log('Jerry')
            }else{
                console.log('Kramer')
            }
    }else{
        console.log(" why the hell are you here then, loser go home.")
      return  gameOver === true
    } 
    
let readyToWalk = readlineSync.keyInYN('Are you ready to start walking?')
    if (readyToWalk === true){
        walk()
    }else{
        console.log('You better get moving or a jerkstore will appear.')
    }
    function jerkStore(name, hp, attack, weapon, tagLine, encounterTagLine) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.weapon = weapon;
        this.tagLine = tagLine;
        this.encounterTagLine = encounterTagLine;
    }
    ​
    let newman = new jerkStore("Newman", 120, 20, ["mailbag", "the rope", "mail truck"], "When you control the mail, you control information", "Hold onto your food, you encountered Newman, Hahahaha")
    let soupNazi = new jerkStore("Soup Nazi", 100, 15, ["crab bisque", "chef knife", "his finger"], "no soup for you, 1 year", "You've encountered the Soup Nazi, don't get in the line.")
    let frankCostanza = new jerkStore("Frank Costanza", 110, 10, ["frank's cooking", "his obscenities", "headslap"], "You want a piece of me, you want a piece of me.  You got it!!", "Oh no it's Frank Costanza.  Prepare for the feats of strength.")
    ​
    let enemyJerkStores = [newman, soupNazi, frankCostanza]
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
    function jerkStoreAppears() {
        let jerkStore = enemyerkStores[Math.floor(Math.random()* jerkStores.length)]
        
        console.log(`you have encountered ${jerkStore.name}`)
        console.log(`${jerkStore.encounterTagLine}`)
        let chooseFight = readlineSync.keyIn("Do you want to fight [f] for fight, [r] to  run?", {
            limit: 'fr'})
        
        if (chooseFight === "f") {
            // if(player.hp >0){
            //         attackPerson()yy
            // }else if (jerkStores.hp > 0){
                if (jerkStore === newman) {
                console.log("Hold onto your food, you encountered Newman, he'll starve immediately without his chocolate sauce to dip his Kenny Roger's broccoli in.")
                } else if (jerkStore === soupNazi) {
                console.log("You've encountered the Soup Nazi, don't get in the line.  Then he'll go shoot himself.")
                }else if (jerkStore === frankCostanza) {
                console.log("Yell Serenity Now, it'll turn him insane and he'll shrink.")
                }
                attackJerkStore(jerkStore)
                    // if (jerkStores.hp > 0) {
                    //     attackPerson()
                    // } else if (player.hp > 0 && jerkStores.hp <= 0) {
                        
                    // }
                    
                    
            } 
    ​
    }
    ​
    function attackJerkStore(jerk) {
        console.log("Attack Jerkstore.")
        if (jerkStores.length === 0){
            gameOver = true
        }else {
            // let currentJerk = jerkStores[Math.floor(Math.random() *jerkStores.length)]
        // console.log(currentJerk)
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
    