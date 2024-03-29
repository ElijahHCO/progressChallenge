function sweaterWeather(temperature){
       // Use the temperature input to create a conditional that returns the following values:
    // Less than 32: return "heavy coat"
    // Greater than or equal to 32 and less than 50: return "sweater"
    // Greater than or equal to 50 and less than 70: return "brisk jacket"
    // Greater than or equal to 70: return "tank top"
    if (temperature < 32){
        return "heavy coat"
    } else if (temperature >= 32 && temperature < 50){
        return "sweater"
    } else if (temperature >= 50 && temperature < 70){
        return "brisk jacket"
    } else if (temperature >= 70){
        return "tank top"
    }
}

function shoppingForCars(color, price){
    // Now we have two parameters to test
    // You can use either logic operators, like && and ||, or conditionals inside conditionals
    // Return true if the following combinations are met:
    // color is "red" and price is less than 5000
    // color is "orange" and price is greater than 1000
    // color is either "blue" or "purple" and price is equal to 0
    // Otherwise, return false
    if (color === "red" && price < 5000){
        return true
    } else if (color === "orange" && price > 1000){
        return true
    } else if (color === "blue" || "purple" && price === 0){
        return true
    } 
    return false
}
module.exports = {
    sweaterWeather,
    shoppingForCars
}
