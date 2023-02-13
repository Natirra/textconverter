let inputField = document.getElementById("input-field");
let submitButton = document.getElementById("submit-button");
let outputField = document.getElementById("output-field");
let inputForExcludeField = document.getElementById("input-for-exclude-field");
let excludeField = document.getElementById("exclude-field");
let excludeButton = document.getElementById("exclude-button");
let excludeOutputField = document.getElementById("exclude-output-field");


submitButton.addEventListener("click", function () {
	console.log('click')
	let input = inputField.value;
	let output = input.replace(/\d+\./g, ', ');

	inputForExcludeField.textContent = output;
});

excludeButton.addEventListener("click", function () {
	let input = inputForExcludeField.value.split(", ");
	let exclude = excludeField.value.split(", ");
	let output = input.filter(function (word) {
		return !exclude.includes(word);
	}).join(", ");

	excludeOutputField.textContent = output;
});