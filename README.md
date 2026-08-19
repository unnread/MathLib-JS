# MathLib-JS

**🇫🇷 Français | 🇬🇧 English**

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

---

## 🇫🇷 Français

**MathLib-JS** est une bibliothèque mathématique légère pour JavaScript.

Elle fournit des fonctions mathématiques courantes ainsi qu'un système de conversion d'unités de longueur.

Le projet a été créé par **Unnread** dans le but de reproduire une bibliothèque mathématique simple et facilement utilisable dans différents projets.

### ✨ Fonctionnalités

* ➕ Addition
* ➖ Soustraction
* ✖️ Multiplication
* ➗ Division
* ² Carré
* √ Racine carrée
* 🔢 Puissances
* 📐 Trigonométrie
* 📏 Distance et hypoténuse
* 🔄 Conversion degrés ↔ radians
* ! Factorielle
* 📏 Conversion d'unités de longueur
* 📦 Modules JavaScript ES6

---

## 📦 Installation

MathLib-JS n'utilise actuellement pas de package manager.

Clonez simplement le projet :

```bash
git clone https://github.com/unnread/MathLib-JS.git
```

Puis importez les modules dont vous avez besoin.

```js
import * as Mathlib from "../MathLib/Math.js";
import * as Conversion from "../MathLib/conversion.js";
```

> Adaptez le chemin d'importation à la structure de votre projet.

---

## 🧮 MathLib

Le module `Math.js` contient les principales fonctions mathématiques.

### Opérations

| Fonction | Description                  |
| -------- | ---------------------------- |
| `add()`  | Additionne plusieurs nombres |
| `sub()`  | Soustrait plusieurs nombres  |
| `mul()`  | Multiplie plusieurs nombres  |
| `div()`  | Divise plusieurs nombres     |

### Fonctions

| Fonction             | Description                           |
| -------------------- | ------------------------------------- |
| `square()`           | Calcule le carré d'un nombre          |
| `squareRoot()`       | Calcule la racine carrée              |
| `power()`            | Calcule une puissance                 |
| `distance()`         | Calcule la distance entre deux points |
| `hypot()`            | Calcule l'hypoténuse                  |
| `sinus()`            | Calcule le sinus                      |
| `cosinus()`          | Calcule le cosinus                    |
| `tan()`              | Calcule la tangente                   |
| `degreesToRadians()` | Convertit les degrés en radians       |
| `radiansToDegrees()` | Convertit les radians en degrés       |
| `factorial()`        | Calcule une factorielle               |
| `PI`                 | Constante π                           |

---

## 📏 Conversion

Le module `conversion.js` permet de convertir les unités de longueur suivantes :

**Kilometer**

→ Hectometer
→ Decameter
→ Meter
→ Decimeter
→ Centimeter
→ Millimeter

Les autres unités peuvent également être converties entre elles.

Exemple :

```js
console.log(Conversion.KilometerToMeter(5));
// 5000
```

---

## 💡 Exemple complet

```js
import * as Mathlib from "../MathLib/Math.js";
import * as Conversion from "../MathLib/conversion.js";

console.log(Mathlib.add(5, 5, 5));
// 15

console.log(Mathlib.square(5));
// 25

console.log(Mathlib.squareRoot(25));
// 5

console.log(Mathlib.power(2, 8));
// 256

console.log(Mathlib.distance(0, 0, 3, 4));
// 5

console.log(Mathlib.factorial(5));
// 120

console.log(Conversion.KilometerToMeter(2));
// 2000
```

---

## 📚 Documentation

La documentation complète est disponible dans le dossier [`docs`](docs/).

* [`Math.js`](docs/Math.md) — Fonctions mathématiques
* [`conversion.js`](docs/Conversion.md) — Conversions d'unités

Des exemples sont également disponibles dans :

`examples/index.js`

---

## 🛠️ Compatibilité

MathLib-JS utilise les **modules ES6**.

Votre environnement JavaScript doit donc supporter la syntaxe :

```js
import ...
export ...
```

---

## 🤝 Contribution

Les contributions sont les bienvenues.

Vous pouvez :

1. Fork le projet.
2. Créer une branche.
3. Ajouter votre fonctionnalité ou correction.
4. Tester vos modifications.
5. Créer une Pull Request.

---

## 📜 Licence

Ce projet est distribué sous licence **MIT**.

Voir le fichier [`LICENSE`](LICENSE).

---

# 🇬🇧 English

**MathLib-JS** is a lightweight mathematical library for JavaScript.

It provides common mathematical functions as well as a length-unit conversion system.

The project was created by **Unnread** with the goal of creating a simple mathematical library that can easily be used in different projects.

### ✨ Features

* ➕ Addition
* ➖ Subtraction
* ✖️ Multiplication
* ➗ Division
* ² Square
* √ Square root
* 🔢 Powers
* 📐 Trigonometry
* 📏 Distance and hypotenuse
* 🔄 Degrees ↔ radians conversion
* ! Factorial
* 📏 Length unit conversions
* 📦 ES6 JavaScript modules

---

## 📦 Installation

MathLib-JS currently does not use a package manager.

Clone the project:

```bash
git clone https://github.com/Unnread/MathLib-JS.git
```

Then import the modules you need:

```js
import * as Mathlib from "../MathLib/Math.js";
import * as Conversion from "../MathLib/conversion.js";
```

> Adjust the import path according to your project structure.

---

## 🧮 MathLib

The `Math.js` module contains the main mathematical functions.

### Operations

| Function | Description                 |
| -------- | --------------------------- |
| `add()`  | Adds multiple numbers       |
| `sub()`  | Subtracts multiple numbers  |
| `mul()`  | Multiplies multiple numbers |
| `div()`  | Divides multiple numbers    |

### Functions

| Function             | Description                                |
| -------------------- | ------------------------------------------ |
| `square()`           | Calculates the square of a number          |
| `squareRoot()`       | Calculates the square root                 |
| `power()`            | Calculates a power                         |
| `distance()`         | Calculates the distance between two points |
| `hypot()`            | Calculates the hypotenuse                  |
| `sinus()`            | Calculates the sine                        |
| `cosinus()`          | Calculates the cosine                      |
| `tan()`              | Calculates the tangent                     |
| `degreesToRadians()` | Converts degrees to radians                |
| `radiansToDegrees()` | Converts radians to degrees                |
| `factorial()`        | Calculates a factorial                     |
| `PI`                 | Pi constant                                |

---

## 📏 Conversion

The `conversion.js` module provides length-unit conversions.

Supported units:

* Kilometer
* Hectometer
* Decameter
* Meter
* Decimeter
* Centimeter
* Millimeter

Example:

```js
console.log(Conversion.KilometerToMeter(5));
// 5000
```

---

## 💡 Complete example

```js
import * as Mathlib from "../MathLib/Math.js";
import * as Conversion from "../MathLib/conversion.js";

console.log(Mathlib.add(5, 5, 5));
// 15

console.log(Mathlib.square(5));
// 25

console.log(Mathlib.squareRoot(25));
// 5

console.log(Mathlib.power(2, 8));
// 256

console.log(Mathlib.distance(0, 0, 3, 4));
// 5

console.log(Mathlib.factorial(5));
// 120

console.log(Conversion.KilometerToMeter(2));
// 2000
```

---

## 📚 Documentation

Full documentation is available in the [`docs`](docs/) directory.

* [`Math.js`](docs/Math.md) — Mathematical functions
* [`conversion.js`](docs/Conversion.md) — Unit conversions

Examples are also available in:

`examples/index.js`

---

## 🛠️ Compatibility

MathLib-JS uses **ES6 modules**.

Your JavaScript environment must support:

```js
import ...
export ...
```

---

## 🤝 Contributing

Contributions are welcome.

You can:

1. Fork the project.
2. Create a branch.
3. Add your feature or fix.
4. Test your changes.
5. Open a Pull Request.

---

## 📜 License

This project is distributed under the **MIT License**.

See the [`LICENSE`](LICENSE) file.
