const translateBtn = document.getElementById('translateBtn');
const sourceText = document.getElementById('sourceText');
const targetText = document.getElementById('targetText');
const targetLang = document.getElementById('targetLang');

translateBtn.addEventListener('click', () => {
  const source = sourceText.value.trim();
  const lang = targetLang.value;

  if (!source) {
    alert('Please enter a source text.');
    return;
  }

  if (lang === 'auto') {
    alert('Please select a target language.');
    return;
  }

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${encodeURI(source)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const translation = data[0][0][0];
      targetText.value = translation;
    })
    .catch(error => console.error(error));
});
