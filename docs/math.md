# Math.js Documentation

**MathLib-JS — Mathematical functions**

---

## `PI`

Returns the value of π used by MathLib-JS.

```js
Mathlib.PI
```

---

## `add(...numbers)`

Adds multiple numbers together.

```js
Mathlib.add(5, 5, 10);
// 20
```

---

## `sub(...numbers)`

Subtracts the following numbers from the first number.

```js
Mathlib.sub(100, 20, 10);
// 70
```

---

## `mul(...numbers)`

Multiplies multiple numbers.

```js
Mathlib.mul(5, 4, 2);
// 40
```

---

## `div(...numbers)`

Divides the numbers sequentially.

```js
Mathlib.div(100, 5, 2);
// 10
```

---

## `square(a)`

Returns the square of a number.

```js
Mathlib.square(5);
// 25
```

---

## `squareRoot(a)`

Returns the square root of a number.

```js
Mathlib.squareRoot(25);
// 5
```

---

## `power(a, p)`

Raises `a` to the power of `p`.

```js
Mathlib.power(2, 8);
// 256
```

---

## `distance(x1, y1, x2, y2)`

Calculates the distance between two points.

```js
Mathlib.distance(0, 0, 3, 4);
// 5
```

---

## `hypot(x, y)`

Calculates the hypotenuse.

```js
Mathlib.hypot(3, 4);
// 5
```

---

## `sinus(a)`

Calculates the sine of an angle in radians.

```js
Mathlib.sinus(Mathlib.degreesToRadians(90));
// 1
```

---

## `cosinus(a)`

Calculates the cosine of an angle in radians.

```js
Mathlib.cosinus(Mathlib.degreesToRadians(180));
// -1
```

---

## `tan(a)`

Calculates the tangent of an angle in radians.

```js
Mathlib.tan(Mathlib.degreesToRadians(45));
// 1
```

---

## `degreesToRadians(d)`

Converts degrees to radians.

```js
Mathlib.degreesToRadians(180);
// 3.14159265359
```

---

## `radiansToDegrees(r)`

Converts radians to degrees.

```js
Mathlib.radiansToDegrees(Mathlib.PI);
// 180
```

---

## `factorial(r)`

Calculates the factorial of a number.

```js
Mathlib.factorial(5);
// 120
```

---

## Import

```js
import * as Mathlib from "../MathLib/Math.js";
```
