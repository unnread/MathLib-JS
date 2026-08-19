import * as Mathlib from "../Mathlib/Math.js";
import * as Conversion from "../MathLib/conversion.js";

// Math operations

console.log("=== Math Operations ===");

console.log(Mathlib.add(5, 5, 5, 5));
// 20

console.log(Mathlib.sub(150, 40, 10));
// 100

console.log(Mathlib.mul(5, 5, 4));
// 100

console.log(Mathlib.div(25, 5));
// 5

console.log(Mathlib.square(5));
// 25

console.log(Mathlib.squareRoot(25));
// 5

console.log(Mathlib.power(5, 3));
// 125

console.log(Mathlib.distance(0, 0, 3, 4));
// 5

console.log(Mathlib.hypot(3, 4));
// 5

console.log(Mathlib.cosinus(Mathlib.degreesToRadians(180)));
// -1

console.log(Mathlib.sinus(Mathlib.degreesToRadians(0)));
// 0

console.log(Mathlib.tan(Mathlib.degreesToRadians(45)));
// 1

console.log(Mathlib.degreesToRadians(180));
// 3.14159265359

console.log(Mathlib.radiansToDegrees(Mathlib.PI));
// 180

console.log(Mathlib.factorial(5));
// 120


// Unit conversions

console.log("=== Unit Conversions ===");

// Kilometer

console.log(Conversion.KilometerToHectometer(1));
// 10

console.log(Conversion.KilometerToDecameter(1));
// 100

console.log(Conversion.KilometerToMeter(1));
// 1000

console.log(Conversion.KilometerToDecimeter(1));
// 10000

console.log(Conversion.KilometerToCentimeter(1));
// 100000

console.log(Conversion.KilometerToMillimeter(1));
// 1000000


// Hectometer

console.log(Conversion.HectometerToKilometer(10));
// 1

console.log(Conversion.HectometerToDecameter(1));
// 10

console.log(Conversion.HectometerToMeter(1));
// 100

console.log(Conversion.HectometerToDecimeter(1));
// 1000

console.log(Conversion.HectometerToCentimeter(1));
// 10000

console.log(Conversion.HectometerToMillimeter(1));
// 100000


// Decameter

console.log(Conversion.DecameterToKilometer(100));
// 1

console.log(Conversion.DecameterToHectometer(10));
// 1

console.log(Conversion.DecameterToMeter(1));
// 10

console.log(Conversion.DecameterToDecimeter(1));
// 100

console.log(Conversion.DecameterToCentimeter(1));
// 1000

console.log(Conversion.DecameterToMillimeter(1));
// 10000


// Meter

console.log(Conversion.MeterToKilometer(1000));
// 1

console.log(Conversion.MeterToHectometer(100));
// 1

console.log(Conversion.MeterToDecameter(10));
// 1

console.log(Conversion.MeterToDecimeter(1));
// 10

console.log(Conversion.MeterToCentimeter(1));
// 100

console.log(Conversion.MeterToMillimeter(1));
// 1000


// Decimeter

console.log(Conversion.DecimeterToKilometer(10000));
// 1

console.log(Conversion.DecimeterToHectometer(1000));
// 1

console.log(Conversion.DecimeterToDecameter(100));
// 1

console.log(Conversion.DecimeterToMeter(10));
// 1

console.log(Conversion.DecimeterToCentimeter(1));
// 10

console.log(Conversion.DecimeterToMillimeter(1));
// 100


// Centimeter

console.log(Conversion.CentimeterToKilometer(100000));
// 1

console.log(Conversion.CentimeterToHectometer(10000));
// 1

console.log(Conversion.CentimeterToDecameter(1000));
// 1

console.log(Conversion.CentimeterToMeter(100));
// 1

console.log(Conversion.CentimeterToDecimeter(10));
// 1

console.log(Conversion.CentimeterToMillimeter(1));
// 10


// Millimeter

console.log(Conversion.MillimeterToKilometer(1000000));
// 1

console.log(Conversion.MillimeterToHectometer(100000));
// 1

console.log(Conversion.MillimeterToDecameter(10000));
// 1

console.log(Conversion.MillimeterToMeter(1000));
// 1

console.log(Conversion.MillimeterToDecimeter(100));
// 1

console.log(Conversion.MillimeterToCentimeter(10));
// 1