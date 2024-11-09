{
//

// type-assertion.ts

const message : unknown="hello khalid"
const messageLength=(message as string).length

console.log(messageLength)

const message1 : unknown=123
const messageLength1=(message1 as number).toString()

console.log(messageLength1)




//
}