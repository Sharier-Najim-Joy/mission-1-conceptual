{
//

type ArrayType<T>=Array<T>

// const numArray:Array<number>=[1,2,3,4,5]
const numArray:ArrayType<number>=[1,2,3,4,5]
const stringArray:ArrayType<string>=["hridoy","khalid","nahid"]
const booleanArray:ArrayType<boolean>=[true,false,true,false]


// interface with generic

interface IPerson<T,U,P>{ // T=number,U=number,P=boolean
    name:string,
    age:U,   // U=number
    isActive:P,   // P=boolean
    designation:string,
    salary?:number  // nullable(optional)
    id:T   // T=number
}

const person:IPerson<number,number,boolean>={
    name:"John",
    age:30,
    isActive:true,
    designation:"Software Engineer",
    id:233

}

// console.log(person)


// function with generic

const showMessage=<msgType1,msgType2,T>(message1:msgType1,message2:msgType2,personInfo:T)=>{
    return {message1,message2,personInfo}
}

console.log(showMessage<string,boolean,IPerson<number,number,boolean>>("hello",true,{
    name:"John",
    age:30,
    isActive:true,
    designation:"Software Engineer",
    id:233

}
))









//
}