{
//
// operator & destructuring
// spread operator
const role:number[]=[1,2,3,4,5,6,7,8,9,10]
const newRole:number[]=[...role,11,12,13]

// console.log(newRole)

type PersonType={
    name:string,
    age:number|string,
    isActive:boolean,
    designation:string,
    company:string,
    salary?:number  // nullable(optional)
}

const person:PersonType={
    name:"John",
    age:30,
    isActive:true,
    designation:"Software Engineer",
    company:"ABC Corporation",
}

const newPerson:PersonType={
   ...person,
    salary:124213532
}

// console.log(newPerson)

// Rest operator

const [first,...bakiElement]=[1,2,3,4,5,6,7,8,9,10]
console.log("first-->",first)
console.log("bakiElement-->",bakiElement)





//
}