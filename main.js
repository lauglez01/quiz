import './style.css'

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const header = document.createElement('h2');
header.textContent = 'Quizz';
container.appendChild(header);

const parrafo = document.createElement('p');
parrafo.textContent = 'What is the capital of France?';
container.appendChild(parrafo);

const lista = document.createElement('ul');
lista.classList.add('container-answers');
container.appendChild(lista);

const respuesta = ['London', 'Berlin', 'Paris', 'Madrid'];
for (let i = 0; i < respuesta.length; i++) {
  const item = document.createElement('li');
  const boton = document.createElement('button');
  boton.classList.add('answer-btn');
  boton.textContent = respuesta[i];
  lista.appendChild(boton);
  lista.appendChild(item);
}

const footer = document.createElement('div');
footer.classList.add('container-footer');
container.appendChild(footer);

const botonPrevious = document.createElement('button');
botonPrevious.textContent = 'Previous';
botonPrevious.classList.add('footer-btn');
footer.appendChild(botonPrevious);

const botonNext = document.createElement('button');
botonNext.textContent = 'Next';
botonNext.classList.add('footer-btn');
footer.appendChild(botonNext);
