// Select the div
let myDiv = document.querySelector('#myDiv');

// Create a new <span> element
let newElement = document.createElement('span');
newElement.textContent = "Mukul Kumar";

// Insert it before the selected div
myDiv.insertAdjacentElement('afterbegin', newElement);
