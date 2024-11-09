{
//

// movie name
const movieName = "The Shawshank Redemption";

// use typeof
type movieType = typeof movieName

const movie={
    tittle:"DeadPool",
    director:"xyz"
}

type movieDetails= typeof movie

const newMovie : movieDetails = {
    tittle:"0988",
    director:"xyz2"
}

type DetailedLog={
    message:string,
    level:"info"|"warn"|"error"
}

function logMessage(input: string | number | DetailedLog) {
    if (typeof input === "string") {
      console.log("Simple log message:", input);
    } else if (typeof input === "number") {
      console.log("Error code:", input);
    } else if ("message" in input && "level" in input) {
      console.log(`danger level ${input.level} instructions for next level dev ${input.message}`)
    }
  }

const test = logMessage({message:"vai",level:"error"})
console.log(test)








//
}