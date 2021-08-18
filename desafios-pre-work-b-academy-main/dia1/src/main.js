import './style.css'

document.querySelector('.app').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

const link = document.querySelector('[data-js="change-visibility"]');
const div = document.querySelector('[data-js="app"]');

link.addEventListener("click", (event) => {
  event.preventDefault();
  div.style.display === "none"
    ? (div.style.display = "block")
    : (div.style.display = "none");
}, false);