
function myHobbies(hobbyOne, hobbyTwo, hobbyThree){
    return {
        hobbies : [hobbyOne, hobbyTwo, hobbyThree]
    };
};

console.log(myHobbies("calcio","tennis","playstation"));

const myHobbiesFunction = myHobbies;
export default myHobbiesFunction;