{
//
// basic data type
const age :number =28
const yourName:string="joy"
const isActive:boolean=true

// array

const number:number[]=[1,2,3,4,5,6,7]

const info :[string,string,number,number,null]=["sharier","joy",34,123,null] // tuple

// object

const person :{name:string,age:number|string}={name:"joy",age:28}

type PersonType = {
    name:string,
    age:number|string
}

const person2 :PersonType={name:"joy",age:"28"} 



//
}