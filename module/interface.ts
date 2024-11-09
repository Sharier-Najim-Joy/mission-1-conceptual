{
//

type PersonType={
    name:string,
    age:number|string,
    isActive:boolean,
    designation:string,
    company:string,
    salary?:number  // nullable(optional)
}


// interface

interface IPerson{
    name:string,
    age:number|string,
    isActive:boolean,
    designation:string,
    salary?:number  // nullable(optional)
}
interface IPerson{
    company:string,
}

const person:IPerson={
    name:"John",
    age:30,
    isActive:true,
    designation:"Software Engineer",
    company:"ABC Corporation",
}

console.log(person)


//
}