const form = document.querySelector('[data-js="form"]');


form.addEventListener('keyup', (event) => {
  const targetValue = event.target.value;
  const inputPhrase = targetValue.split(' ');

  const newPhrase = inputPhrase.map((word) => {
    const wordsToExclude = ['de', 'do', 'da', 'das', 'dos'];
    return wordsToExclude.includes(word.toLowerCase())
      ? word.toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');

  event.target.value = newPhrase;
})
