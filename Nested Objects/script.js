function extractNameAndStreet(person) {
    const{ name , address: {street}} = person;

    return { name, street};
}

const person = {

    name: "sanjeet kumar",
    age: 30, 
    address: {
        street: "4323 Main",
        city: "Laknow", 
    
    }
};

const result = extractNameAndStreet( person);

console.log("Extracted name and stereet:", result);

