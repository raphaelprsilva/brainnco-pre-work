const form = document.querySelector('[data-js="form"]');
const input = document.querySelector('[data-js="input"]');

// input.style.textTransform = "capitalize";

form.addEventListener('keyup', (event) => {
  const targetValue = event.target.value;
  const splitedString = targetValue.split(' ');

  console.log('splitedString', splitedString);

  const newArray = splitedString.map((word) => {
    if (word === 'da' || word === 'de' || word === 'do' || word === 'dos') {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  console.log('newArray', newArray)

  console.log('newString', newArray.join(' '))
  input.value = newArray.join(' ');
  // console.log(input.value);
})


