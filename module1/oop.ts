{
//
// INHERITANCE
class MusicalInstrument{
    name:string
    constructor(name:string){
        this.name=name
    }
    play(){
        console.log(`${this.name} is playing music`)
    }
}

class Guitar extends MusicalInstrument{
    constructor(){
        super("guitar")
    }
    tune(){
        console.log(`Tuning kortechi...${this.name}`)
        return "Music paly"
    }
}

class Piano extends MusicalInstrument{
    constructor(){
        super("piano")
    }
    openLid(){
        console.log(`Opening lid...${this.name}`)
    }
}


const guitarist = new Guitar()
console.log(guitarist.name,guitarist.tune())


















//
}