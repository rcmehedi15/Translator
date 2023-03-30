const translateBtn = document.getElementById('translateBtn');
const sourceText = document.getElementById('sourceText');
const targetText = document.getElementById('targetText');
const targetLang = document.getElementById('targetLang');

translateBtn.addEventListener('click', () => {
	// Validate input
	if (sourceText.value === '') {
		alert('Please enter text to translate.');
		return;
	}

	const source = sourceText.value;
	const lang = targetLang.value;
	const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURI(source)}`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const translation = data[0][0][0];
			targetText.value = translation;
		})
		.catch(error => console.error(error));
});
