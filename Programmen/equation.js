let equationsList = new Array();

function generateEquation() {
  let maxCoefficient = document.getElementById("coefficient").value;
  console.log("maxCoefficient" + maxCoefficient);

  var value = Math.floor(Math.random() * 2);
  value++;
  var a = Math.floor(Math.random() * maxCoefficient);
  a++;
  var b = Math.floor(Math.random() * maxCoefficient);
  b++;
  var c = Math.floor(Math.random() * maxCoefficient);
  c++;

  console.log("value :" + value);
  console.log("a :" + a);
  console.log("b :" + b);
  console.log("c :" + c);

  var equation = new Array();

  equation.push(a);
  equation.push(b);
  equation.push(c);

  listOfEquations(equation);

  var generatedEquation = a + "x^2 + " + b + " x + " + c + " = 0";
  displayEquation(generatedEquation);
  console.log("generatedEquation:" + generatedEquation);
  solveForX(equation);
}

function displayEquation(generatedEquation) {
  // i = nombres des equations a generer

  var orderedList = document.getElementById("orderedList");
  // Create a new <span> element and <li></li> element
  var liElement = document.createElement("li");
  var spanElement = document.createElement("span");
  // Define your LaTeX code
  var latexCode = "\\(" + generatedEquation + "\\)";
  spanElement.innerHTML = latexCode;

  orderedList.appendChild(liElement);
  liElement.appendChild(spanElement);

  renderMathJax(spanElement);
}

function generateListOfEquations() {
  var numberOfEquationsToGenerate = document.getElementById("number").value;
  console.log(numberOfEquationsToGenerate);
  numberOfEquationsToGenerate++;
  console.log(numberOfEquationsToGenerate);
  for (let i = 1; i < numberOfEquationsToGenerate; i++) {
    generateEquation();
  }
}

function listOfEquations(equationToAdd) {
  if (equationsList.length == 0) {
    equationsList.push(equationToAdd);
  } else {
    var a = equationToAdd[0];
    var b = equationToAdd[1];
    var c = equationToAdd[2];
    console.log("equation a = " + a);
    equationsList.push(equationToAdd);
    for (let index = 0; index < equationsList.length; index++) {}
  }
  console.table(equationsList);
}

function calculateDiscriminant(equation) {
  var a = equation[0];
  var b = equation[1];
  var c = equation[2];

  var delta = b * b - 4 * a * c;
  return delta;
}

function isPerfectSquare(number) {
  if (number >= 4) {
    var root = Math.sqrt(number);
    root = Math.floor(root);
    testRoot = root * root;
    return testRoot == number;
  }
}

function simplifySquareNumber(number) {
  var simplifiedSquare = new Array();
  //8 is the smallest possible number that can be simplified
  if (number >= 8 && !isPerfectSquare(number)) {
    //finds divisors
    for (var i = number; i > 0; i--) {
      let testNumber = number % i;
      if (testNumber == 0) {
        var potentialSquare = number / i;
        if (isPerfectSquare(potentialSquare)) {
          simplifiedSquare.push(Math.sqrt(potentialSquare));
          simplifiedSquare.push(i);
        }
      }
    }
  } else if (isPerfectSquare(number)) {
    simplifiedSquare.push(Math.sqrt(number));
    simplifiedSquare.push(0);
  } else {
    simplifiedSquare.push(0);
    simplifiedSquare.push(number);
  }
  return simplifiedSquare;
}

function solveForX(equation) {
  var delta = calculateDiscriminant(equation);
  if (delta > 0) {
    // real solution
    // 0t place equation
    var x1 = (-equation[1] - Math.sqrt(delta)) / (2 * equation[0]);
    var x2 = (-equation[1] + Math.sqrt(delta)) / (2 * equation[0]);
    equation.push(x1);
    equation.push(x2);
    console.log("deux solutions réelles");
  } else if (delta < 0) {
    console.log("complexes");
  } else {
    var x = (-equation[1] / 2) * equation[0];
    equation.push(x);
    console.log("une solution réel double");
  }
  console.log("solutions" + equation);
}

function relativeTo0(number) {
  if (number == 0) {
    return "=0";
  } else if (number > 0) {
    return ">0";
  } else {
    return "<0";
  }
}

function displaySolution() {
  for (let index = 0; index < equationsList.length; index++) {
    var solutionsList = document.getElementById("solutionsList");
    var liElement = document.createElement("li");
    liElement.setAttribute("id", index);

    var equation = equationsList[index];
    console.log("equation debugging" + equation);
    var a = equation[0];
    var b = equation[1];
    var c = equation[2];

    var generatedEquation = a + "x^2 + " + b + " x + " + c + " = 0";
    var discriminant = calculateDiscriminant(equation);
    var compareDelta = relativeTo0(discriminant);
    var sqrtDelta = simplifySquareNumber(discriminant);

    if (sqrtDelta[0] != 0 || sqrtDelta[1] != 0) {
      var solution1 =
        ` <p>
              \\(` +
        generatedEquation +
        `\\) <br />
              Calculons le discriminant \\( \\Delta \\): <br />
            </p>
            $$ \\Delta = b^2-4ac $$ 
            $$ =` +
        b +
        `^2 - 4 ` +
        ` \\cdot ` +
        a +
        ` \\cdot ` +
        c +
        `$$ 
            $$ = ` +
        discriminant +
        ` (` +
        compareDelta +
        `) $$
            <p>Comme \( \\Delta \) = (` +
        sqrtDelta[0] +
        `\\( \\sqrt{` +
        sqrtDelta[1] +
        `})^2 \\) , on a deux solutions reelles.</p>
            $$x_1 = \\frac{-b-\\sqrt{\\Delta}}{2 \\cdot a} $$
            $$x_2 = \\frac{-b+\\sqrt{\\Delta}}{2 \\cdot a} $$ 
            $$ \\mathbb{S} =  \\{ solution1 ; solution2  \\} $$
          `;

      var listItem = document.createElement("li");
      listItem.innerHTML = solution1;
      document.getElementById("solutionsList").appendChild(listItem);
      renderMathJax(listItem);
    }

    // var paragraph2 = document.createElement("p");
    // paragraph1.innerHTML = "\\( \\Delta \\):";
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
}

///displayEquation();
