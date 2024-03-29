let equationsList = new Array();

function generateQuestions() {
  var numberOfEquationsToGenerate = document.getElementById("number").value;
  for (let index = 0; index < numberOfEquationsToGenerate; index++) {
    generateEquation();
  }
}

function generateEquation() {
  // constants
  let a, b, c, d, e, f;
  let isANeg, isBNeg, isCNeg;

  /*
   * Generates all the coefficients needed
   */

  let maxCoefficient = document.getElementById("coefficient").value;

  // nombres entier relatives non nul
  a = Math.floor(Math.random() * maxCoefficient) + 1;
  b = Math.floor(Math.random() * maxCoefficient) + 1;
  d = Math.floor(Math.random() * maxCoefficient) + 1;
  f = Math.floor(Math.random() * maxCoefficient) + 1;

  maxCoefficient++;

  // nombres entier relatives
  c = Math.floor(Math.random() * maxCoefficient);
  e = Math.floor(Math.random() * maxCoefficient);
  // console.log(
  //   "a: " + a + " b: " + b + " c: " + c + " d: " + d + " e: " + e + " f: " + f
  // );

  /*
   * Generates all the signes needed
   */
  isANeg = Math.random() >= 0.5;
  isBNeg = Math.random() >= 0.5;
  isCNeg = Math.random() >= 0.5;
  // console.log("Random boolean : " + random_boolean);

  var equation = [a, b, c, d, e, f, isANeg, isBNeg, isCNeg];
  var number = determineTypeOfEquation(equation);
  equation.push(number);

  // only add equations that don't exist yet
  if (!doesContainDuplicates(equation)) {
    displayEquation(equation);
    equationsList.push(equation);
  }
}
function determineTypeOfEquation(equation) {
  var A = equation[0];
  var B = equation[1];
  var C = equation[2];
  var D = equation[3];
  var E = equation[4];
  var F = equation[5];

  // for ax^2 + c = 0, type 2
  if (B == 0 && Math.random() >= 0.5) {
    return 2;
  }

  // for (ax + b)^2 = 0, type 4
  else if (
    isPerfectSquare(A) &&
    isPerfectSquare(B) &&
    isPerfectSquare(C) &&
    isPerfectSquare(D) &&
    C * A == C &&
    B * D == D
  ) {
    return 4;
  } else if (C == 0 && Math.random() >= 0.5) {
    return 3;
  }
  return 1;
}

function isPerfectSquare(number) {
  if (number >= 4) {
    var root = Math.sqrt(number);
    root = Math.floor(root);
    testRoot = root * root;
    return testRoot == number;
  }
}

function doesContainDuplicates(equation) {
  if (equationsList.length > 1) {
    for (let row of equationsList) {
      // does not fully work because i shortened the equations so much
      if (JSON.stringify(row) === JSON.stringify(equation)) {
        return true;
      }
    }
    return false;
  }
  return false;
}

function displayEquation(generatedEquation) {
  // i = nombres des equations a generer

  var orderedList = document.getElementById("orderedList");
  // Create a new <span> element and <li></li> element
  var liElement = document.createElement("li");
  var spanElement = document.createElement("span");

  // set generated equation to variables

  var a = generatedEquation[0];
  var b = generatedEquation[1];
  var c = generatedEquation[2];
  var d = generatedEquation[3];
  var e = generatedEquation[4];
  var f = generatedEquation[5];

  var isANeg = generatedEquation[6];
  var isBNeg = generatedEquation[7];
  var isCNeg = generatedEquation[8];

  var type = generatedEquation[9];

  // generate the latex of the equation

  spanElement.innerHTML = generateLatexCode(
    a,
    b,
    c,
    d,
    e,
    f,
    isANeg,
    isBNeg,
    isCNeg
  );

  orderedList.appendChild(liElement);
  liElement.appendChild(spanElement);

  renderMathJax(spanElement);
}

function generateLatexCode(
  a,
  b,
  c,
  d,
  e,
  f,
  statement1,
  statement2,
  statement3
) {
  let signA = statement1 ? "-" : "";
  let signB = c !== 0 ? (statement2 ? "-" : "+") : "";
  let signC = f !== 0 ? (statement3 ? "-" : "+") : "";

  let termA = "";
  let termB = "";
  let termC = "";

  if (a !== 0) {
    if (Math.abs(a) !== Math.abs(b)) {
      termA =
        b !== 0
          ? b === 1
            ? `${signA}` + Math.abs(a) + "x^2"
            : `${signA}\\frac{${Math.abs(a)}}{${Math.abs(b)}}` + "x^2"
          : Math.abs(a);
    } else {
      termA =
        Math.abs(a) === Math.abs(b)
          ? `${signA}` + "x^2"
          : `${signA}\\frac{${Math.abs(a)}}{${Math.abs(b)}}` + "x^2";
    }
  }

  if (c !== 0) {
    if (Math.abs(c) !== Math.abs(d)) {
      termB =
        d !== 0
          ? d === 1
            ? `${signB}` + Math.abs(c) + "x"
            : `${signB}\\frac{${Math.abs(c)}}{${Math.abs(d)}}` + "x"
          : `${signB}` + Math.abs(c) + "x";
    } else {
      termB =
        Math.abs(c) === Math.abs(d)
          ? `${signB}` + "x"
          : `${signB}\\frac{${Math.abs(c)}}{${Math.abs(d)}}` + "x";
    }
  }

  if (e !== 0) {
    if (Math.abs(e) !== Math.abs(f)) {
      termC =
        f !== 0
          ? f === 1
            ? `${signC}` + Math.abs(e)
            : `${signC}\\frac{${Math.abs(e)}}{${Math.abs(f)}}`
          : `${signC}` + Math.abs(e);
    } else {
      termC =
        Math.abs(e) === Math.abs(f)
          ? `${signC}` + "1"
          : `${signC}\\frac{${Math.abs(e)}}{${Math.abs(f)}}`;
    }
  }

  let latexFunction = `$  ${termA}  ${termB}  ${termC} = 0 $`;

  var equation2 = [a, b, c, d, e, f, statement1, statement2, statement3];

  var equation = solveQuadratic(equation2);

  return latexFunction + "<br>" + equation;
}

// var equation = [a, b, c, d, e, f, statement1, statement2, statement3];

// return latexFunction + "<br>" + equation;

function simplifyFraction(numerator, denominator) {
  // Find the greatest common divisor (GCD) using Euclid's algorithm
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  const divisor = gcd(numerator, denominator);
  const simplifiedNumerator = numerator / divisor;
  const simplifiedDenominator = denominator / divisor;

  return [simplifiedNumerator, simplifiedDenominator];
}

function calculateDiscriminant(generatedEquation) {
  var a = generatedEquation[0];
  var b = generatedEquation[1];
  var c = generatedEquation[2];
  var d = generatedEquation[3];
  var e = generatedEquation[4];
  var f = generatedEquation[5];

  var isANeg = generatedEquation[6];
  var isBNeg = generatedEquation[7];
  var isCNeg = generatedEquation[8];

  var B = isBNeg ? -(c ^ 2) / (d ^ 2) : (c ^ 2) / (d ^ 2);
  var AB = !isANeg && !isCNeg ? (4 * a * e) / (b * f) : -(4 * a * e) / (b * f);

  return (delta = B - AB);
}

function solveQuadratic(a, b, c, d, e, f, a_positive, b_positive, c_positive) {
  // Compute actual coefficients
  let a = a_positive ? a / b : -a / b;
  let b = b_positive ? c / d : -c / d;
  let c = c_positive ? e / f : -e / f;

  // Compute discriminant
  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    // Two real and distinct roots
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  } else if (discriminant === 0) {
    // Two real and equal roots
    let root = -b / (2 * a);
    return [root, root];
  } else {
    // Complex roots
    let realPart = -b / (2 * a);
    let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    let root1 = realPart.toFixed(2) + " + " + imaginaryPart.toFixed(2) + "i";
    let root2 = realPart.toFixed(2) + " - " + imaginaryPart.toFixed(2) + "i";
    return [root1, root2];
  }
}

function renderMathJax(element) {
  // Render the LaTeX expression using MathJax
  MathJax.typesetPromise([element]).catch(function (err) {
    console.log("MathJax error:", err);
  });
}

function reloadWindow() {
  window.location.reload();
  document.getElementById("generateButton").disabled = false;
  document.getElementById("solutionsButton").disabled = true;
}
