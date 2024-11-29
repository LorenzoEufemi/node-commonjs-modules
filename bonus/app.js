import fullNameFunction from "./names/names.js";
import myHobbiesFunction from "./hobbies/hobbies.js";

function result (){
    // const fullName = fullNameFunction("Lorenzo","Eufemi")
    // const hobbies = myHobbiesFunction("calcio","tennis","playstation").hobbies

    return {
        fullName : fullNameFunction("Lorenzo","Eufemi"),
        hobbies : myHobbiesFunction("calcio","tennis","playstation").hobbies
    }
}


import chalk from "chalk";

console.log(result());

console.log(chalk.red("ciao"));

