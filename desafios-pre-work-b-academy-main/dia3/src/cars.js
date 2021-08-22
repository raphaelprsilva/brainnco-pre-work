const form = document.querySelector('[data-js="cars-registration"]');
const table = document.querySelector('[data-js="table"]');

console.log(form.image)
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const image = event.target.elements['image'].value;
  const year = event.target.elements['year'].value;
  const model = event.target.elements['model'].value;
  const plate = event.target.elements['plate'].value;
  const color = event.target.elements['color'].value;
  const items = [image, year, model, plate, color];

  const tr = document.createElement('tr');
  items.forEach((item, index) => {
    if(index === 0) {
      const td = document.createElement('td');
      const img = document.createElement('img');
      img.src = item;
      img.width = 100;
      img.height = 100;
      td.appendChild(img);
      tr.appendChild(td);
    } else {
      const td = document.createElement('td');
      td.textContent = item;
      tr.appendChild(td);
    }
  });

  table.appendChild(tr);
  form.reset();
  form.image.focus();
})
