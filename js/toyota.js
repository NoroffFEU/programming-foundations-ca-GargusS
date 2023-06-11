let toyotaPrius2021 = {
  make: "Toyota",
  model: "Prius Hybrid Executive",
  year: 2021,
  bodyType: "Hatchback",
  fuelType: [
    { type: "Hybrid", sound: "sound/ufo_floating-86547.mp3" },
    { type: "Electric", sound: "sound/electric-sparks-6130.mp3" },
    { type: "Gasoline", sound: "sound/carengine-5998.mp3" },
  ],
  engineSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  },
  engine: "1.8L 4-cylinder VVT (gas/electric hybrid)",
  transmission: "Continuously Variable Transmission (CVT)",
  driveType: "AWD-i",
  horsepower: 122,
  torque: "142 Nm",
  fuelEfficiencyCity: "4.36 L/100km",
  fuelEfficiencyHighway: "3.7 L/100km",
  seatingCapacity: 5,
  cargoSpace: "774 liters",
  touchscreenDisplay: true,
  infotainmentSystem: "Toyota Entune",
  safetyFeatures: [
    "Pre-Collision System",
    "Lane Departure Alert",
    "Dynamic Radar Cruise Control",
    "Automatic High Beams",
  ],
  exteriorColor: "Blonde Brown",
  interiorColor: "Moonstone/Black",
};

// Logging specific properties to the console
console.log(toyotaPrius2021.make);
console.log(toyotaPrius2021.year);
console.log(toyotaPrius2021.touchscreenDisplay);
console.log(toyotaPrius2021.safetyFeatures);
console.log(toyotaPrius2021.engineSound);

// Accessing the object container in the HTML document
const objectContainer = document.getElementById("object-container");

// Looping through each property of the car object
for (const property in toyotaPrius2021) {
  // Creating a row for each property
  const propertyRow = document.createElement("div");
  propertyRow.className = "property-row";

  // Creating a span element for the property name
  const propertyName = document.createElement("span");
  propertyName.className = "property-name";
  propertyName.textContent = property;

  // Creating a span element for the property value
  const propertyValue = document.createElement("span");
  propertyValue.className = "property-value";

  // Checking if the property is an array
  if (Array.isArray(toyotaPrius2021[property])) {
    // Handling the fuelType and safetyFeatures properties
    if (property === "safetyFeatures") {
      // Creating an unordered list for safety features
      const safetyFeaturesList = document.createElement("ul");
      safetyFeaturesList.className = "safety-features-list";

      // Looping through each feature and creating a list item for it
      for (const feature of toyotaPrius2021[property]) {
        const featureItem = document.createElement("li");
        featureItem.textContent = feature;
        safetyFeaturesList.appendChild(featureItem);
      }

      // Appending the safety features list to the property value element
      propertyValue.appendChild(safetyFeaturesList);
    } else {
      // Creating a dropdown select element for fuel types
      const dropdown = document.createElement("select");
      dropdown.className = "dropdown";

      // Adding an event listener for the dropdown change event
      dropdown.addEventListener("change", function () {
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        const soundFile = selectedOption.dataset.sound;
        toyotaPrius2021.engineSound(soundFile);
      });

      // Looping through each fuel type and creating an option for it
      for (const item of toyotaPrius2021[property]) {
        const option = document.createElement("option");
        option.value = item.type;
        option.textContent = item.type;
        option.dataset.sound = item.sound;
        dropdown.appendChild(option);
      }

      // Appending the dropdown to the property value element
      propertyValue.appendChild(dropdown);
    }
  }
  // Checking if the property is a function
  else if (typeof toyotaPrius2021[property] === "function") {
    // Creating a span element for method value
    const methodValue = document.createElement("span");
    methodValue.className = "method-value";
    methodValue.textContent = "Choose engine type above to play sound";

    // Appending the method value to the property value element
    propertyValue.appendChild(methodValue);
  }
  // For other properties, simply displaying their values as text
  else {
    propertyValue.textContent = toyotaPrius2021[property];
  }

  // Appending the property name and value elements to the property row
  propertyRow.appendChild(propertyName);
  propertyRow.appendChild(propertyValue);

  // Appending the property row to the object container
  objectContainer.appendChild(propertyRow);
}
