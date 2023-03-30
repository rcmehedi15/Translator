const translateBtn = document.getElementById('translateBtn'); // Get the translate button element
const sourceText = document.getElementById('sourceText'); // Get the source text input element
const targetText = document.getElementById('targetText'); // Get the target text input element
const targetLang = document.getElementById('targetLang'); // Get the target language select element

translateBtn.addEventListener('click', () => { // Add a click event listener to the translate button
	// Validate input
	if (sourceText.value === '') { // Check if the source text input is empty
		alert('Please enter text to translate.'); // If empty, display an alert message
		return; // Stop execution of the function
	}

	const source = sourceText.value; // Get the value of the source text input
	const lang = targetLang.value; // Get the value of the selected target language
	const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURI(source)}`; // Construct the translation API URL with the source text, target language, and API parameters
	fetch(url) // Make a request to the translation API
		.then(response => response.json()) // Parse the response as JSON
		.then(data => {
			const translation = data[0][0][0]; // Get the translated text from the API response
			targetText.value = translation; // Set the value of the target text input to the translated text
		})
		.catch(error => console.error(error)); // Log any errors to the console
});
