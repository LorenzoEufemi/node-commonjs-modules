

function fullName (firstName, lastName) {
    return {
        first: firstName,
        last: lastName
    };
}

console.log(fullName("lorenzo","eufemi"))

const fullNameFunction = fullName
export default fullNameFunction;