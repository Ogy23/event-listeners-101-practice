// Something that's important to be aware of is that you can set multiple event listeners on the same element. We'll practice that in this exercise.

// First, we have the #cell-one element. We will give two event listeners to this element:
//     1) An event listener that, when the element is clicked, will turn the background color to green.

//     2) An event listener that, when the element is double-clicked, will turn the background color to blue. 

// Get a reference to the #cell-one element
const cellOne = document.getElementById("cell-one");

// Add a click event listener to the #cell-one element
cellOne.addEventListener("click", function() {
  // Change the background color to green
  cellOne.style.backgroundColor = "green";
});

// Add a double-click event listener to the #cell-one element
cellOne.addEventListener("doubleClick", function() {
  // Change the background color to blue
  cellOne.style.backgroundColor = "blue";
});


// Next, we'll target the #cell-two element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is hovered over, will turn the border into a green, 2px width, and solidly-lined border. 
    // 2) An event listener that, when the user removes their mouse from over the element, will turn the border back into a black, 2 px width, and solidly-lined border.  

// Get a reference to the #cell-two element
const cellTwo = document.getElementById("cell-two");

// Add a mouseover event listener to the #cell-two element
cellTwo.addEventListener("mouseover", function() {
  // Change the border to a green, 2px solid border
  cellTwo.style.border = "2px solid green";
});

// Add a mouseout event listener to the #cell-two element
cellTwo.addEventListener("mouseout", function() {
  // Change the border back to a black, 2px solid border
  cellTwo.style.border = "2px solid black";
});


// Lastly, we'll target the #cell-three element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is clicked, will fill the element with a text of "Stop clicking me!"
    // 2) An event listener that, when the element is right-clicked, will fill the element with a text of "No right clicking either!!"

// exercise3.js

// Get a reference to the #cell-three element
const cellThree = document.getElementById("cell-three");

// Add a click event listener to the #cell-three element
cellThree.addEventListener("click", function() {
  // Fill the element with the text "Stop clicking me!"
  cellThree.textContent = "Stop clicking me!";
});

// Add a contextmenu event listener to the #cell-three element
cellThree.addEventListener("contextmenu", function(event) {
  // Prevent the default right-click context menu
  event.preventDefault();
  
  // Fill the element with the text "No right clicking either!!"
  cellThree.textContent = "No right clicking either!!";
});
