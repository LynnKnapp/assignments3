const readline = require('readline-sync')

let gameOver = false
let item = []

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