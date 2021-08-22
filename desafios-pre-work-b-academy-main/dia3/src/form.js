const form = document.querySelector('[data-js="form"]');
const input = document.querySelector('[data-js="input"]');

input.addEventListener('keyup', (event) => {
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

const select = document.createElement('select');
select.setAttribute('multiple', '');

const colors = ['red', 'green', 'blue', 'black', 'yellow'];

let text = '';
const colorOptions = (color) => {
  text += `<option value=${color}>${color}</option>`;
}

colors.forEach(colorOptions);

select.innerHTML = text;

form.appendChild(select);

const colorsContainer = document.createElement('div');
const myColors = document.querySelector('[data-js="colors"]');

select.addEventListener('change', (event) => {
  colorsContainer.innerHTML = '';
  console.log('event.target.selectedOptions', [...event.target.selectedOptions].map(element => element.value));
  const array = [...event.target.selectedOptions].map(element => element.value);
  array.forEach(color => {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = color;
    colorsContainer.appendChild(div);
  })
})

myColors.appendChild(colorsContainer);
