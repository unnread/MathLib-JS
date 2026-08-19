export const PI = 3.14159265359;

export function add(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

export function sub(...numbers) {
    return numbers.reduce((a, b) => a - b);
}

export function mul(...numbers) {
    return numbers.reduce((a, b) => a * b);
}

export function div(...numbers) {
    return numbers.reduce((a, b) => a / b);
}

export function square(a) {
    return a * a;
}

export function squareRoot(a) {
    return Math.sqrt(a);
}

export function power(a, p) {
    return Math.pow(a, p);
}

export function distance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

export function hypot(x, y) {
    return Math.hypot(x, y);
}

export function sinus(a) {
    return Math.sin(a);
}

export function cosinus(a) {
    return Math.cos(a);
}

export function tan(a) {
    return Math.tan(a);
}

export function degreesToRadians(d) {
    return d * PI / 180;
}

export function radiansToDegrees(r) {
    return r * 180 / PI;
}

export function factorial(r) {
    let result = 1;

    for (let i = 1; i <= r; i++) {
        result *= i;
    }

    return result;
}