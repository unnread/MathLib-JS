# conversion.js Documentation

**MathLib-JS — Length conversions**

---

## Supported units

MathLib-JS supports the following length units:

| Unit       | Symbol |
| ---------- | ------ |
| Kilometer  | km     |
| Hectometer | hm     |
| Decameter  | dam    |
| Meter      | m      |
| Decimeter  | dm     |
| Centimeter | cm     |
| Millimeter | mm     |

---

## Kilometer

```js
Conversion.KilometerToHectometer(1); // 10
Conversion.KilometerToDecameter(1);  // 100
Conversion.KilometerToMeter(1);      // 1000
Conversion.KilometerToDecimeter(1);  // 10000
Conversion.KilometerToCentimeter(1); // 100000
Conversion.KilometerToMillimeter(1); // 1000000
```

---

## Hectometer

```js
Conversion.HectometerToKilometer(10); // 1
Conversion.HectometerToDecameter(1);  // 10
Conversion.HectometerToMeter(1);      // 100
Conversion.HectometerToDecimeter(1);  // 1000
Conversion.HectometerToCentimeter(1); // 10000
Conversion.HectometerToMillimeter(1); // 100000
```

---

## Decameter

```js
Conversion.DecameterToKilometer(100); // 1
Conversion.DecameterToHectometer(10); // 1
Conversion.DecameterToMeter(1);       // 10
Conversion.DecameterToDecimeter(1);   // 100
Conversion.DecameterToCentimeter(1);  // 1000
Conversion.DecameterToMillimeter(1);  // 10000
```

---

## Meter

```js
Conversion.MeterToKilometer(1000); // 1
Conversion.MeterToHectometer(100); // 1
Conversion.MeterToDecameter(10);   // 1
Conversion.MeterToDecimeter(1);    // 10
Conversion.MeterToCentimeter(1);   // 100
Conversion.MeterToMillimeter(1);   // 1000
```

---

## Decimeter

```js
Conversion.DecimeterToKilometer(10000); // 1
Conversion.DecimeterToHectometer(1000); // 1
Conversion.DecimeterToDecameter(100);   // 1
Conversion.DecimeterToMeter(10);        // 1
Conversion.DecimeterToCentimeter(1);    // 10
Conversion.DecimeterToMillimeter(1);    // 100
```

---

## Centimeter

```js
Conversion.CentimeterToKilometer(100000); // 1
Conversion.CentimeterToHectometer(10000); // 1
Conversion.CentimeterToDecameter(1000);   // 1
Conversion.CentimeterToMeter(100);        // 1
Conversion.CentimeterToDecimeter(10);     // 1
Conversion.CentimeterToMillimeter(1);     // 10
```

---

## Millimeter

```js
Conversion.MillimeterToKilometer(1000000); // 1
Conversion.MillimeterToHectometer(100000); // 1
Conversion.MillimeterToDecameter(10000);   // 1
Conversion.MillimeterToMeter(1000);        // 1
Conversion.MillimeterToDecimeter(100);     // 1
Conversion.MillimeterToCentimeter(10);     // 1
```

---

## Import

```js
import * as Conversion from "../MathLib/conversion.js";
```

> Change the import path according to your project structure.
