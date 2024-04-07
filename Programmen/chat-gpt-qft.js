// Importing fraction.js library
import Fraction from "./equation-assets/fraction.js";

// Function to tokenize the input equation
function tokenize(input) {
  // Split by spaces or the '+' and '-' signs that are followed by a space
  return input.split(/\s+|(?=[+-]\s)/);
}

// Function to parse coefficients from tokenized input
function parseCoefficients(tokens) {
  const parseFraction = (fraction) => {
    const [numerator, denominator] = fraction.split("/");
    return new Fraction(parseInt(numerator), parseInt(denominator));
  };

  let a = parseFraction(tokens[0]);
  let b = parseFraction(tokens[2]);
  let c = parseFraction(tokens[4]);

  return [a, b, c];
}

// Function to compute the value of the quadratic equation at a given point
function evaluateQuadratic(coefficients, x) {
  let [a, b, c] = coefficients;
  return a.mul(x).mul(x).add(b.mul(x)).add(c);
}

// Function to compute the derivative of the quadratic equation at a given point
function evaluateQuadraticDerivative(coefficients, x) {
  let [a, b] = coefficients;
  return a.mul(2).mul(x).add(b);
}

// Function to apply Newton's method to find the root of a function
function newtonMethod(coefficients, initialGuess, tolerance, maxIterations) {
  let x = initialGuess;
  let iterations = 0;
  while (
    Math.abs(evaluateQuadratic(coefficients, x)) > tolerance &&
    iterations < maxIterations
  ) {
    x =
      x -
      evaluateQuadratic(coefficients, x).div(
        evaluateQuadraticDerivative(coefficients, x)
      );
    iterations++;
  }
  if (iterations === maxIterations) {
    console.log("Newton's method failed to converge");
    return null;
  }
  return x;
}

// Main function to solve quadratic equation using tokenization and Newton's method
function solveQuadratic(input) {
  let tokens = tokenize(input);
  let coefficients = parseCoefficients(tokens);
  let root1 = newtonMethod(coefficients, 0, 0.0001, 1000);
  let root2 = newtonMethod(coefficients, 1, 0.0001, 1000);
  if (root1 !== null && root2 !== null) {
    console.log(
      "Roots are: " + root1.toFraction(true) + " and " + root2.toFraction(true)
    );
  }
}

// Example usage
let equation = "1/2x^2 + 5/3x - 1/4";
solveQuadratic(equation);
