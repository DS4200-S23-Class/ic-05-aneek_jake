let counter = 0; 

// button funtion 
function clickCount() {
	console.log("");

	let newText = "Number of times button clicked: "

	let counterDiv = document.getElementById("counter-div");

	counterDiv.innerHTML = newText + counter; 

	counter = counter + 1; 
}