let equationsList = new Array();

//sets the selectors and shows what is visible to the user for printing
let toggleVisibility = document.getElementById("selecta");

toggleVisibility.addEventListener("change", function () {
  //console.log("you changed something in da selecta!");
  var selectedValue = document.getElementById("selecta").value;

  if (selectedValue == "enonce") {
    document.getElementById("foo").classList.remove("inVisible");
    document.getElementById("bar").classList.add("inVisible");
  } else if (selectedValue == "solutions") {
    document.getElementById("foo").classList.add("inVisible");
    document.getElementById("bar").classList.remove("inVisible");
  } else {
    document.getElementById("foo").classList.remove("inVisible");
    document.getElementById("bar").classList.remove("inVisible");
  }
});

function generateEquation() {
  let maxCoefficient = document.getElementById("coefficient").value;

  var value = Math.floor(Math.random() * 2);
  value++;
  var a = Math.floor(Math.random() * maxCoefficient);
  a++;
  var b = Math.floor(Math.random() * maxCoefficient);
  b++;
  var c = Math.floor(Math.random() * maxCoefficient);
  c++;

  var equation = new Array();

  equation.push(a);
  equation.push(b);
  equation.push(c);

  listOfEquations(equation);

  var generatedEquation = a + "x^2 + " + b + " x + " + c + " = 0";
  displayEquation(generatedEquation);

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
  document.getElementById("generateButton").disabled = true;
  document.getElementById("progress-label").classList.remove("inVisible");

  var numberOfEquationsToGenerate = document.getElementById("number").value;

  numberOfEquationsToGenerate++;
  let i = 1;
  for (i = 1; i < numberOfEquationsToGenerate; i++) {
    generateEquation();
  }

  // progress label
  document.getElementById("progress-label").classList.add("inVisible");
}

function listOfEquations(equationToAdd) {
  if (equationsList.length == 0) {
    equationsList.push(equationToAdd);
  } else {
    var a = equationToAdd[0];
    var b = equationToAdd[1];
    var c = equationToAdd[2];
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

  var divisorsAbs = getDivisors(Math.abs(number));
  var currentHighestSquare = 1;

  for (let index = 0; index < divisorsAbs.length; index++) {
    if (
      isPerfectSquare(divisorsAbs[index]) &&
      divisorsAbs[index] > currentHighestSquare
    ) {
      currentHighestSquare = divisorsAbs[index];
    }
  }
  if (currentHighestSquare / number == 1) {
    simplifiedSquare.push(Math.sqrt(number));
    simplifiedSquare.push(1);
  } else if (currentHighestSquare / number == -1) {
    simplifiedSquare.push(Math.sqrt(Math.abs(number)));
    simplifiedSquare.push(1);
  } else if (currentHighestSquare == 1 && number < 0) {
    simplifiedSquare.push(1);
    simplifiedSquare.push(Math.abs(number));
  } else if (currentHighestSquare == 1 && number > 0) {
    simplifiedSquare.push(1);
    simplifiedSquare.push(number);
  } else if (currentHighestSquare / number > 0) {
    simplifiedSquare.push(Math.sqrt(currentHighestSquare));
    simplifiedSquare.push(number / currentHighestSquare);
  } else {
    simplifiedSquare.push(Math.abs(Math.sqrt(currentHighestSquare)));
    simplifiedSquare.push(Math.abs(number / currentHighestSquare));
  }

  return simplifiedSquare;
}

function getDivisors(number) {
  var resultList = new Array();
  for (var i = 1; i <= number; i++) {
    let testNumber = number % i;
    if (testNumber == 0) {
      var temp = number / i;
      resultList.push(temp);
    }
  }
  return resultList;
}

function simplify3Numbers(equation) {
  var a = equation[0];
  var b = equation[1];
  var c = equation[2];

  var resultListA = getDivisors(a);
  var resultListB = getDivisors(b);
  var resultListC = getDivisors(c);

  var maxCommonValue = 1;

  let commonElements = new Set(resultListA);

  // Iterate through the remaining arrays and update the Set
  [resultListB, resultListC].forEach((arr) => {
    commonElements = new Set(
      arr.filter((element) => commonElements.has(element))
    );
  });

  // Find the maximum value from the common elements
  maxCommonValue = Math.max(...commonElements);

  equation[0] = a / maxCommonValue;
  equation[1] = b / maxCommonValue;
  equation[2] = c / maxCommonValue;

  return equation;
}

// might be a good idea to give approximate solutions
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
  } else if (delta == 0) {
    var x = (-1 * equation[1]) / (2 * equation[0]);
    equation.push(x);
    console.log("une solution réel double");
  }

  console.log("solutions" + equation);
}

function relativeTo0(number) {
  if (number < 0) {
    return "<0";
  } else if (number > 0) {
    return ">0";
  } else {
    return "=0";
  }
}

function displaySolution() {
  document.getElementById("solutionButton").disabled = true;

  //progress label
  document.getElementById("progress-label").classList.remove("inVisible");

  if (equationsList === undefined || equationsList.length == 0) {
    alert("Veuillez générer des équations");
    document.getElementById("solutionButton").disabled = false;
  }
  for (let index = 0; index < equationsList.length; index++) {
    var liElement = document.createElement("li");
    liElement.setAttribute("id", index);

    var equation = equationsList[index];
    console.log("equation debugging" + equation);

    var simplifiedEquation = simplify3Numbers(equation);

    console.log("This is the simplified equation2" + simplifiedEquation);
    var a = equation[0];
    var b = equation[1];
    var c = equation[2];

    var generatedEquation = a + "x^2 + " + b + " x + " + c + " = 0";
    var discriminant = calculateDiscriminant(equation);
    var compareDelta = relativeTo0(discriminant);
    var sqrtDelta = simplifySquareNumber(discriminant);

    //simplify a fraction
    var fractionArr = new Array();
    fractionArr[0] = b;
    fractionArr[1] = sqrtDelta[0];
    fractionArr[2] = 2 * a;

    var simplifiedFraction = simplify3Numbers(fractionArr);

    var solution1;

    // discriminant < 0
    if (discriminant > 0) {
      if (sqrtDelta[0] == 1 && sqrtDelta[1] != 1) {
        solution1 =
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
            <p>Comme \\( \\Delta \\) = (\\( \\sqrt{` +
          sqrtDelta[1] +
          `})^2 \\) , on a deux solutions reelles.</p>
            $$x_1 = \\frac{-b-\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `- \\sqrt{` +
          sqrtDelta[1] +
          `}}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `- \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$x_2 = \\frac{-b+\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `+ \\sqrt{` +
          sqrtDelta[1] +
          `}}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `- \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$ \\mathbb{S} = \\left \\{ \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        } ; \\frac{-` +
          simplifiedFraction[0] +
          `- \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        } \\right \\} $$
          `;
      } else if (sqrtDelta[0] != 1 && sqrtDelta[1] == 1) {
        solution1 =
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
            <p>Comme \\( \\Delta \\) = \\(` +
          sqrtDelta[0] +
          `^2 \\) , on a deux solutions reelles.</p>
            $$x_1 = \\frac{-b-\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `-` +
          sqrtDelta[0] +
          ` }{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` }{` +
          simplifiedFraction[2] +
          `
        } = ` +
          equation[3] +
          `$$
            $$x_2 = \\frac{-b+\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `+` +
          sqrtDelta[0] +
          ` }{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `+` +
          simplifiedFraction[1] +
          ` }{` +
          simplifiedFraction[2] +
          `
        }  = ` +
          equation[4] +
          `$$
            $$ \\mathbb{S} = \\left \\{ ` +
          equation[3] +
          ` ; ` +
          equation[4] +
          `  \\right \\} $$
          `;
      } else if (sqrtDelta[0] != 1 && sqrtDelta[1] != 1) {
        solution1 =
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
            <p>Comme \\( \\Delta \\) = (` +
          sqrtDelta[0] +
          `\\( \\sqrt{` +
          sqrtDelta[1] +
          `})^2 \\) , on a deux solutions reelles.</p>
            $$x_1 = \\frac{-b-\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `-` +
          sqrtDelta[0] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$x_2 = \\frac{-b+\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `+` +
          sqrtDelta[0] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$ \\mathbb{S} = \\left \\{ \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        } ; \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        } \\right \\} $$
          `;
      }
    } else if (discriminant < 0) {
      if (sqrtDelta[0] == 1 && sqrtDelta[1] != 1) {
        solution1 =
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
            <p>Comme \\( \\Delta \\) = (\\( \\sqrt{` +
          sqrtDelta[1] +
          `}i)^2 \\) , on a deux solutions complexes.</p>
            $$x_1 = \\frac{-b-\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `+ \\sqrt{` +
          sqrtDelta[1] +
          `}i}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `+ \\sqrt{` +
          sqrtDelta[1] +
          `}i}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$x_2 = \\frac{-b+\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `+ \\sqrt{` +
          sqrtDelta[1] +
          `}i}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `+ \\sqrt{` +
          sqrtDelta[1] +
          `}i}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$ \\mathbb{S} = \\left \\{ \\frac{-` +
          simplifiedFraction[0] +
          `+ \\sqrt{` +
          sqrtDelta[1] +
          `}i}{` +
          simplifiedFraction[2] +
          `
        } ; \\frac{-` +
          simplifiedFraction[0] +
          `+ \\sqrt{` +
          sqrtDelta[1] +
          `}i}{` +
          simplifiedFraction[2] +
          `
        } \\right \\} $$
          `;
      } else if (sqrtDelta[0] != 1 && sqrtDelta[1] == 1) {
        solution1 =
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
            <p>Comme \\( \\Delta \\) = \\( (` +
          sqrtDelta[0] +
          `i)^2 \\) , on a deux solutions complexes.</p>
            $$x_1 = \\frac{-b-\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `-` +
          sqrtDelta[0] +
          ` i}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          `i}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$x_2 = \\frac{-b+\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `+` +
          sqrtDelta[0] +
          ` i}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `+` +
          simplifiedFraction[1] +
          ` i}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$ \\mathbb{S} = \\left \\{ \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` i}{` +
          simplifiedFraction[2] +
          `
        } ; \\frac{-` +
          simplifiedFraction[0] +
          `+` +
          simplifiedFraction[1] +
          ` i}{` +
          simplifiedFraction[2] +
          `
        } \\right \\} $$
          `;

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
            <p>Comme \\( \\Delta \\) = (` +
          sqrtDelta[0] +
          `\\( \\sqrt{` +
          sqrtDelta[1] +
          `})^2 \\) , on a deux solutions reelles.</p>
            $$x_1 = \\frac{-b-\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `-` +
          sqrtDelta[0] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$x_2 = \\frac{-b+\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `+` +
          sqrtDelta[0] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$ \\mathbb{S} = \\left \\{ \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        } ; \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}}{` +
          simplifiedFraction[2] +
          `
        } \\right \\} $$
          `;

        var listItem = document.createElement("li");
        listItem.innerHTML = solution1;
        document.getElementById("solutionsList").appendChild(listItem);
        renderMathJax(listItem);
      } else if (sqrtDelta[0] != 1 && sqrtDelta[1] != 1) {
        solution1 =
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
            <p>Comme \\( \\Delta \\) = (` +
          sqrtDelta[0] +
          `\\( \\sqrt{` +
          sqrtDelta[1] +
          `}i)^2 \\) , on a deux solutions complexes.</p>
            $$x_1 = \\frac{-b-\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `-` +
          sqrtDelta[0] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}i}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}i}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$x_2 = \\frac{-b+\\sqrt{\\Delta}}{2 \\cdot a} = \\frac{-` +
          b +
          `+` +
          sqrtDelta[0] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}i}{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}i}{` +
          simplifiedFraction[2] +
          `
        }$$
            $$ \\mathbb{S} = \\left \\{ \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}i}{` +
          simplifiedFraction[2] +
          `
        } ; \\frac{-` +
          simplifiedFraction[0] +
          `-` +
          simplifiedFraction[1] +
          ` \\sqrt{` +
          sqrtDelta[1] +
          `}i}{` +
          simplifiedFraction[2] +
          `
        } \\right \\} $$
          `;
      }
    } else if (discriminant == 0) {
      if (true) {
        solution1 =
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
            <p>Comme \\( \\Delta \\) = 0  , on a une solution réel double.</p>
            $$x = \\frac{-b}{2 \\cdot a} = \\frac{-` +
          b +
          ` }{2 \\cdot ` +
          a +
          `} = \\frac{-` +
          simplifiedFraction[0] +
          `}{` +
          simplifiedFraction[2] +
          `
        } = ` +
          equation[3] +
          `$$
           
            $$ \\mathbb{S} = \\left \\{  ` +
          equation[3] +
          `
          \\right \\} $$
          `;
      }
    }

    var listItem = document.createElement("li");
    listItem.innerHTML = solution1;
    document.getElementById("solutionsList").appendChild(listItem);
    renderMathJax(listItem);
  }
  document.getElementById("progress-label").classList.add("inVisible");
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
