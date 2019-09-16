class Player{
    constructor(){  
    this.totalCoins = 0
    this.status = 'big'
    this.hasStar = false
    this.gameActive = true
    }

    setName(name){
        this.name = name
    }
    gotHit(){
        if(this.hasStar){
         this.hasStar = false 
         console.log("Your star has protected you.")  
        }else{
            if(this.status === 'small'){
                this.gameActive = false 
                stop()   
        }else if(this.status === 'big'){
                 this.status = 'small'  
        }else if(this.status === 'powered up'){
                 this.status = 'big'
        }   

        }
    }
    gotPoweredUp(){
        if(this.status === 'small'){
            this.status = 'big'
        }else if(this.status === 'big'){
            this.status = 'powered up'
        }else if(this.status === 'powered up'){
           this.hasStar = true
           console.log('Your special, you recieved a star.') 
        }
    }
     addCoin(){
        this.totalCoins += 1
    }
    print(){
        console.log(`
        name: ${this.name}
        totalCoins: ${this.totalCoins}
        status: ${this.status}
        hasStar: ${this.hasStar}
        `)
        return ''
    }

}
const randomMath =(min, max) => {
    return Math.floor(Math.random() * (max - min) + min)    
}
const events =() =>{
    console.log('events')
    let result = randomMath(0, 3)
    console.log(result)
    if(result === 0){
        player.gotHit()
        player.print()
    }else if(result === 1){
        player.gotPoweredUp()
        player.print()
    }else{
        player.addCoin()
        player.print()
    }
}



// instantiate new player
let player = new Player()
let math = randomMath(0 , 2)
if (math === 0){
    player.setName("mario")
}else{
    player.setName('luigi')
}

console.log(player.print())

let interval = setInterval(events, 500)
let stop = () => {
    clearInterval(interval)
}

