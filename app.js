const fullNameFunction = require("./names/names.js");
const myHobbiesFunction = require("./hobbies/hobbies.js");

function result (){
    // const fullName = fullNameFunction("Lorenzo","Eufemi")
    // const hobbies = myHobbiesFunction("calcio","tennis","playstation").hobbies

    return {
        fullName : fullNameFunction("Lorenzo","Eufemi"),
        hobbies : myHobbiesFunction("calcio","tennis","playstation").hobbies
    }
}
console.log(result())

