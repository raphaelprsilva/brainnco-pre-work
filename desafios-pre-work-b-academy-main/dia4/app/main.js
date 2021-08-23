import './style.css';

const form = document.querySelector('[data-js="cars-registration"]');
const table = document.querySelector('[data-js="table"]');
const url = 'http://localhost:3333/cars';

const request = (url, options) =>
  fetch(url, options)
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message }))

const createRequest = (method) => (url, data) => request(url, {
  method,
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
})

const post = createRequest('POST');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const image = event.target.elements['image'].value;
  const year = event.target.elements['year'].value;
  const model = event.target.elements['model'].value;
  const plate = event.target.elements['plate'].value;
  const color = event.target.elements['color'].value;
  const items = [image, year, model, plate, color];
  const object = { image, model, year, plate, color };
  console.log(object)

  const response = await post(url, object)
  console.log(response)

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

const getCars = async () => {
  const response = await fetch(url);
  const cars = await response.json();

  if(cars.length === 0) {
    const td = document.createElement('td');
    const tr = document.createElement('tr');
    td.colSpan = 5;
    td.textContent = 'Nenhum carro encontrado';
    tr.appendChild(td);
    table.appendChild(tr);
    return;
  } else {
    cars.forEach((car, index) => {
    if(index === 0) {
      const td = document.createElement('td');
      const img = document.createElement('img');
      img.src = car;
      img.width = 100;
      img.height = 100;
      td.appendChild(img);
      tr.appendChild(td);
    } else {
      const td = document.createElement('td');
      td.textContent = car;
      tr.appendChild(td);
    }
  })
  }
};

getCars();
