
 // Celsius to fahrenheit
// function CelsiusToFahrenheit(celsius){

//     let fahrenheit =  (celsius * 9/5) +32;
//     return fahrenheit; 

// }

// const fahrenheit = CelsiusToFahrenheit(1)
// console.log(fahrenheit);


// Fahrenheit to selcious 
function FahrenheitToCelsius(F){
    let Celsius = 5/9 * (F - 32)
    return Celsius ;
}

const fahrenheit = FahrenheitToCelsius(60)
console.log(fahrenheit.toFixed(2));