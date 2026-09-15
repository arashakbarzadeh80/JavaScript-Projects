var myName = "Arash";
document.write("The data type of myName is: " + typeof myName + "<br>");
// 1. Display NaN 
var result = 10 / "Hello"; 
document.write("Result: " + result + "<br>"); 
// 2. Use isNaN() to display true 
document.write("Is 'Hello' NaN? " + isNaN("Hello") + "<br>"); 
// 3. Use isNaN() to display false 
document.write("Is 10 NaN? " + isNaN(10) + "<br>");
// Display Infinity 
document.write( (3E380) + "<br>");
// Display -Infinity 
document.write( (-3E320) + "<br>");
// Display Boolean value of true
document.write( (10 > 6) + "<br>");
// Display Boolean value of false
document.write( (10 < 2) + "<br>");
//console.log math operation
console.log(6+6);
//console.log Boolean value of false
console.log(10<2)
// Display double equal comparison of true
document.write((10 ==10) + "<br>");
// Display double equal comparison of false
document.write((10 == "12") + "<br>");
// Same data type and same value = true
document.write((10 ===10) + "<br>");
// Different data type and different value = false
document.write((10 === "Hello") + "<br>");
//Different data type but same value = false
document.write((10 ==="10") + "<br>");
//Same data type but different value = false
document.write((10 === 20) + "<br>");
//AND operator True
document.write((10 > 5 && 10 < 15) + "<br>");
//AND operator false
document.write((10 > 5 && 6 > 8) + "<br>");
//OR operator True
document.write((10 > 5 || 6 > 8) + "<br>");
//OR operator false
document.write((10 < 5 || 6 > 8) + "<br>");
