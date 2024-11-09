{
//

// Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.


function logString(input:unknown):void{
    if (typeof input === 'string'){
        console.log(input);
    }else{
        console.error('Error: Input is not a string.');
    }
}

logString("Hello,typescript")
logString(3453)










//
}