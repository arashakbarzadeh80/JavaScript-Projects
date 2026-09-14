// Define the dictionary
let Dictionary = {
    firstName: "Arash",
    lastName: "Akbarzadeh",
    occupation: "Biologist",
    occupation: "Programmer", //key-value pair into an HTML element
    Country: "Canada",
};
//JavaScipt function
function myDictionary() {
    delete Dictionary.Country; //statement deletes the key-value pair from the dictionary
    document.getElementById("Dictionary").innerHTML = Dictionary.Country;
}