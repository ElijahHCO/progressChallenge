// 1. a. Basic Array methods
// Declare a variable called flavors and set it equal to an array
let flavors = [];
// Use the .push method to add "strawberry", "vanilla", and "chocolate" to the array
flavors.push("strawberry")
flavors.push("vanilla")
flavors.push("chocolate")
// Use index syntax to change "strawberry" to "impossible berry"
flavors[0] = "impossible berry"
// Declare a variable called lastFlavor and set it equal to the result of using the array's .pop method
let lastFlavor = flavors.pop()
//  Looping over an array
const colors = ["red", "green", "blue"];
const colorsUppercased = colors.map(color => color.toUpperCase());
console.log(colors)
// Use a for loop to change each value in the list to an uppercase version of itself
// Hint: there is a method you can google for how to change a string to an uppercase string


module.exports = {
    flavors,
    lastFlavor,
    colors,
}