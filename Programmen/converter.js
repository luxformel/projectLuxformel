var property = new Array();
var unit = new Array();
var factor = new Array();

property[0] = "Beschleunigung";
unit[0] = new Array("m/s^2", "cm/s^1", "Gal", "g");
factor[0] = new Array(1, 0.01, 0.01, 9.80665);

property[1] = "Distanz";
unit[1] = new Array("m", "km", "Å", "lj", "sm", "ft", "in", "yd", "mi");
factor[1] = new Array(
  1,
  1e3,
  10e-5,
  9_460_730_472_580_800,
  1852,
  0.3048,
  0.0254,
  0.9144,
  1609.344
);

property[2] = "Druck";
unit[2] = new Array("Pa", "bar", "atm");
factor[2] = new Array(1, 1e5, 101_325);

property[3] = "Energie";
unit[3] = new Array("J", "cal", "kcal", "eV");
factor[3] = new Array(1, 4.184, 4_184, 1.602_176_634e-19);

property[4] = "Fläche";
unit[4] = new Array("m2", "ha");
factor[4] = new Array(1, 1e-4);

property[5] = "Frequenz";
unit[5] = new Array("Hz", "MHz", "GHz", "THz", "1/min");
factor[5] = new Array(1, 1000000, 1000000000, 1000000000000, 60e-1);

property[6] = "Geschwindigkeit";
unit[6] = new Array("m/s", "km/h", "kn", "mi/h");
factor[6] = new Array(1, 1 / 3.6, 0.514444444444444444e-1, 0.447_04);

property[7] = "Masse";
unit[7] = new Array("kg", "g", "u", "t", "lb");
factor[7] = new Array(1, 1000, 1.660_539_066_605e-27, 1000, 0.4535922922);

property[8] = "Winkel";
unit[8] = new Array("RAD", "DEG", "min", "s");
factor[8] = new Array(
  1,
  0.017_453_292_519_943_295,
  0.000_290_888_208_665_721_6,
  4.848_136_811_095_36e-6
);

property[9] = "Volumen";
unit[9] = new Array("m3", "dm3", "cm3", "L", "dL", "cL", "mL");
factor[9] = new Array(1, 0.1e-2, 1e-6, 0.1e-2, 1e-4, 1e-5, 1e-6);

property[10] = "Zeit";
unit[10] = new Array("s", "ms", "min", "h");
factor[10] = new Array(1, 0.001, 60, 3_600);

// ===========
//  Functions
// ===========

function UpdateUnitMenu(propMenu, unitMenu) {
  // Updates the units displayed in the unitMenu according to the selection of property in the propMenu.
  var i;
  i = propMenu.selectedIndex;
  FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
  // Fills the options of myMenu with the elements of myArray.
  // !CAUTION!: It replaces the elements, so old ones will be deleted.
  var i;
  myMenu.length = myArray.length;
  for (i = 0; i < myArray.length; i++) {
    myMenu.options[i].text = myArray[i];
  }
}

function CalculateUnit(sourceForm, targetForm) {
  // A simple wrapper function to validate input before making the conversion
  var sourceValue = sourceForm.unit_input.value;

  // First check if the user has given numbers or anything that can be made to one...
  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    // If we can make a valid floating-point number, put it in the text box and convert!
    sourceForm.unit_input.value = sourceValue;
    ConvertFromTo(sourceForm, targetForm);
  }
}

function ConvertFromTo(sourceForm, targetForm) {
  // Converts the contents of the sourceForm input box to the units specified in the targetForm unit menu and puts the result in the targetForm input box.In other words, this is the heart of the whole script...
  var propIndex;
  var sourceIndex;
  var sourceFactor;
  var targetIndex;
  var targetFactor;
  var result;

  // Start by checking which property we are working in...
  propIndex = document.property_form.the_menu.selectedIndex;

  // Let's determine what unit are we converting FROM (i.e. source) and the factor needed to convert that unit to the base unit.
  sourceIndex = sourceForm.unit_menu.selectedIndex;
  sourceFactor = factor[propIndex][sourceIndex];

  // Cool! Let's do the same thing for the target unit - the units we are converting TO:
  targetIndex = targetForm.unit_menu.selectedIndex;
  targetFactor = factor[propIndex][targetIndex];

  // Simple, huh? let's do the math: a) convert the source TO the base unit: (The input has been checked by the CalculateUnit function).

  result = sourceForm.unit_input.value;
  // Handle Temperature increments!
  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) + tempIncrement[sourceIndex];
  }
  result = result * sourceFactor;

  // not done yet... now, b) use the targetFactor to convert FROM the base unit
  // to the target unit...
  result = result / targetFactor;
  // Again, handle Temperature increments!
  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) - tempIncrement[targetIndex];
  }

  // Ta-da! All that's left is to update the target input box:
  targetForm.unit_input.value = result;
}

// This fragment initializes the property dropdown menu using the data defined above in the 'Data Definitions' section
window.onload = function (e) {
  FillMenuWithArray(document.property_form.the_menu, property);
  UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);
  UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu);
};

// Restricting textboxes to accept numbers + navigational keys only
document
  .getElementByClass("numbersonly")
  .addEventListener("keydown", function (e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (
      !(
        (
          [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
          (key == 65 && (e.ctrlKey || e.metaKey)) || // Select All
          (key == 67 && (e.ctrlKey || e.metaKey)) || // Copy
          (key == 86 && (e.ctrlKey || e.metaKey)) || // Paste
          (key >= 35 && key <= 40) || // End, Home, Arrows
          (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) || // Numeric Keys
          (key >= 96 && key <= 105)(
            // Numpad
            key == 190
          )
        ) // Numpad
      )
    )
      e.preventDefault();
  });
