//while loop
function Call_Loop() {

    let Digit = "";
    let X = 1;

    while (X <= 10) { 
        Digit += "The number is " + X + "<br>";
        X++;
    }

    document.getElementById("Loop").innerHTML = Digit;
}
//for loop
function for_Loop() {

    let Instruments = ["Piano", "Guitar", "Violin", "Drums", "Flute"];

    let Content = "";

    for (let i = 0; i < Instruments.length; i++) {

        Content += Instruments[i] + "<br>";

    }

    document.getElementById("List_of_instruments").innerHTML = Content;
}

//Array
function displayArray() {
    var instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute"];

    document.getElementById("Array").innerHTML = instruments;
}

//Constant
function constant_function(){
    const Laptop = {Brand:"HP", Size:"15 inches", color:"silver"};
    Laptop_hard = "500 GB";
    Laptop_price = "$800";
    Laptop_color = "black"; //Changed a property value
    Laptop_Ram = "64 GB"; //Added a new property value
    document.getElementById("Constant").innerHTML = " The cost of the " + Laptop.color + " " + Laptop.Brand + " " + Laptop.Size + " with " + Laptop_Ram + " of RAM  is " + Laptop_price;
}

//Let keyword
function let_function() {

    var X = 80;

    let output = X;

    {
        let X = 20;
        output += "<br>" + X;
    }

    output += "<br>" + X;

    document.getElementById("Let").innerHTML = output;
}

// Let Object

function let_object() {

    let Laptop = {
        Brand: "HP",
        Size: "15 inches",
        Color: "Silver",

        // Method
        description: function() {
            return "This is an " + this.Brand + " laptop with a " +
                   this.Size + " screen and " + this.Color + " color.";
        }
    };

    document.getElementById("Let_object").innerHTML = Laptop.description();
}