let readlineSync = require("readline-sync");
​
console.log("Hello, welcome.")
​
let gameOver = false
let isAlive = true
let item = []
​
const george = {
    name: "George",
    hp: 150,
    attack: 20,
    weapon: ["the big shoe", "pastrami sandwich", "glamour magazine"],
    item: [],
    tagLine: "George is getting upset"
}
​
const elaine = {
    name: "Elaine",
    hp: 150,
    attack: 20,
    weapon: ["the big salad", "today sponge", "the 'get out 'push"],
    item: [],
    tagLine: "Yada Yada Yada, your through"
}
​
const jerry = {
    name: "Jerry",
    hp: 150,
    attack: 20,
    weapon: ["microphone", "cereal box", "his cadillac"],
    item: [],
    tagLine: "Serenity now, insanity later."
}
const kramer = {
    name: "Kramer",
    hp: 150,
    attack: 20,
    weapon: ["the slicer", "the bronzo cleaner", "Mr Marbles Chucky doll"],
    item: [],
    tagLine: "I'm out there and I'm lovin every minute of it"
}
let player = [george, elaine, jerry, kramer]
​
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
const randomJerkStores = [newman, soupNazi, frankCostanza]
​
let playerNames = player.map(player => player.name)

let options = readlineSync.keyInSelect(playerNames, "Which player do you choose?")
if (options === 0) {
    console.log("You've selected George")
} else if (options === 1) {
    console.log("You selected Elaine")
} else if (options === 2) {
    console.log("You've selected Jerry")
} else {
    console.log("You've selected Kramer")
}
​
while (isAlive && !gameOver) {
    let question = readlineSync.keyIn("Would you like to walk? [y] to walk, [n] to end game. ", {
        limit: 'yn'
    })
        if (question === "n") {
            isAlive = false
            console.log("You just fell into the pool and the pool guy never came to save you.  Your dead.")
            
        }else if (question === "y") {
            walk()
            
        }     
}    
​
    
​
​
​
function walk() {
    let random = Math.floor(Math.random() * 3)
    if (random > 0) {
        console.log("You are walking now.")
    } else {
        if(jerkStores.length === 0){
            gameOver = true
            console.log('you won the game')
        }else {
            jerkStoreAppears()
            console.log('hit')
        }
    }
}
​
function jerkStoreAppears() {
    let jerkStore = jerkStores[Math.floor(Math.random()* jerkStores.length)]
    
    console.log(`you have encountered ${jerkStore.name}`)
    console.log(`${jerkStore.encounterTagLine}`)
    let chooseFight = readlineSync.keyIn("Do you want to fight [f] for fight, [r] to  run?", {
        limit: 'fr'})
    
    if (chooseFight === "f" && jerkstore === newman) {
            console.log("Hold onto your food, you encountered Newman, he'll starve immediately without his chocolate sauce to dip his Kenny Roger's broccoli in.")
            } else if ( chooseFight === 'f' && jerkStore === soupNazi) {
            console.log("You've encountered the Soup Nazi, don't get in the line.  Then he'll go shoot himself.")
            }else if (chooseFight === 'f' && jerkStore === frankCostanza) {
            console.log("Yell Serenity Now, it'll turn him insane and he'll shrink.")
            }
            attackJerkStore(jerkStore)
                
                
                
        } 
​

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
​
function attackPerson(player) {
    let currentJerkIndex= Math.floor(Math.random() * 3)
    let currentJerk = person[currentJerkIndex]
    let currentPersonIndex = player[Math.floor(Math.random() * 3)]
    let currentPerson = player[currentPersonIndex]
    console.log("Your being attacked.")
    while (currentPerson.hp > 0) {
        let jerkWeapon = Math.floor(Math.random() * 3)
        if (jerkWeapon === weapon[0]) {
            console.log(`${currentPerson.name} attacked you with ${jerkStores.weapon[0]}`)
            player.hp -= 10
            console.log(`${currentPerson.name} now has ${currentPerson.hp} hp points`)
            } else if (jerkWeapon === weapon[1]) {
                console.log(`${jerkStores.name} attacked you with ${jerkStores.weapon[1]}`)
                jerkStore.hp -= 15
                console.log(`${currentPerson.name} now has ${currentPerson.hp} hp points`)
​
            } else if (jerkWeapon === [2]) {
                console.log(`${jerkStores.name} attacked you with ${jerkStores.weapon[2]}`)
                jerkStore.hp -= 25
                console.log(`${player.name} now has ${currentPerson.hp} hp points`)
            } else {
                console.log('hello')
            }
    }
}