{
//

type Book={
    title: string;
    author: string;
    yearPublished:number;
}

// use "keyof" to get keys of the book type
type BookKeys = keyof Book;


function getBookProperty<T,K extends keyof T >(book:T,key:K):T[K]{
    return book[key]
}

const myBook:Book={
    title: "Harry Potter",
    author: "J.K. Rowling",
    yearPublished: 1997
}

const author =(getBookProperty(myBook,"author"))
console.log(author)






//
}