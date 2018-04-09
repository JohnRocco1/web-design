var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// Add new item to list
// button.addEventListener("click", function() {  // Listen for mouse click
// 		if (input.value.length > 0) { //  Do nothing if "input items" is empty
// 			var li = document.createElement("li");
// 			li.appendChild(document.createTextNode(input.value)); //Read text in box
// 			ul.appendChild(li); //Add to list
// 			input.value = ""; // Clears text box after enter	
// 	}
// })	
// 	input.addEventListener("keypress", function(event) {  // Listen for "enter/return key"
// 		if (input.value.length > 0 && event.which === 13) { //  Do nothing if "input items" is empty
// 			var li = document.createElement("li");
// 			li.appendChild(document.createTextNode(input.value)); //Read text in box
// 			ul.appendChild(li); //Add to list
// 			input.value = ""; // Clears text box after enter	
// 	}
// }) // Add new item to list ENDING



// SAME AS ABOVE--- SHORTENED USING FUNCTIONS---- Don't Repeat Yourself DRY
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");// create HTML element "li"
	li.appendChild(document.createTextNode(input.value));//Read text in box
	ul.appendChild(li);//Add to list (created element "li")
	input.value = "";// Clears text box after enter
}

function addListAfterClick() {// Listen for mouse click
	if (inputLength() > 0) {//  Do nothing if "input items" is empty
		createListElement();// If input is > 0 do this function
	}
}

function addListAfterKeypress(event) {// Listen for "enter/return key"
	if (inputLength() > 0 && event.keyCode === 13) {//  Do nothing if "input items" is empty
		createListElement();// If input is > 0 do this function	
	}
	}


button.addEventListener("click", addListAfterClick);// Listen for mouse click

input.addEventListener("keypress", addListAfterKeypress);// Listen for enter/return key