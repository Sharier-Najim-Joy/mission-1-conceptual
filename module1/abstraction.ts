{
//
class CoffeeMachine{
   private isPowerOn:boolean=false

   powerOn(){
    this.isPowerOn=true;
    console.log("Coffee maker is on");
   }

   makeCoffee(){
    if(this.isPowerOn){
        console.log("Coffee is being made");
    }
    else{
        console.log("Coffee maker is not on");
    }
   }

   powerOff(){
    this.isPowerOn=false;
    console.log("Coffee maker is off");
   }

}

const myCoffeeMachine = new CoffeeMachine();
myCoffeeMachine.powerOn();























//
}