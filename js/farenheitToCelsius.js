// Function declaration to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Example usage:
const tempF = 98.6;
const tempC = convertFahrenheitToCelsius(tempF);
console.log(`${tempF}°F is ${tempC.toFixed(2)}°C`);

// If using modules (optional):
// export { convertFahrenheitToCelsius };