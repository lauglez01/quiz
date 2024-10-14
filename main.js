import './style.css';

let preguntaActual = 0; 
const preguntas = [
  "What is the capital of France?",
  "What is the longest river in the world?",
  "Who wrote Romeo and Juliet?",
  "How many planets are there in our solar system?"
];
const respuestas = [
  ['London', 'Berlin', 'Paris', 'Madrid'],
  ['Nilo', 'Amazonas', 'Ebro', 'Thymes'],
  ['Becquer', 'Neruda', 'Jane Austen', 'Shakespeare'],
  ['9', '8', '10', '7' ]];
const totalPreguntas = preguntas.length; 

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const header = document.createElement('h2');
header.textContent = 'Quizz';
container.appendChild(header);


const parrafo = document.createElement('p');
parrafo.textContent = preguntas[preguntaActual]; 
container.appendChild(parrafo);

const lista = document.createElement('ul');
lista.classList.add('container-answers');
container.appendChild(lista);

/*se limpian las respuestas anteriores, y ahora para la pregunta actual
se cargan sus respectivas respuestas con sus botones */
function crearBotonRespuesta() {
  lista.innerHTML = '';
  respuestas[preguntaActual].forEach((respuesta) => {
    const item = document.createElement('li');
    const boton = document.createElement('button');
    boton.classList.add('answer-btn');
    boton.textContent = respuesta;
    item.appendChild(boton);
    lista.appendChild(item);
  });
}

const footer = document.createElement('div');
footer.classList.add('container-footer');
container.appendChild(footer);

const botonPrevious = document.createElement('button');
botonPrevious.textContent = 'Previous';
botonPrevious.classList.add('footer-btn');
botonPrevious.disabled = true; 
footer.appendChild(botonPrevious);


const botonNext = document.createElement('button');
botonNext.textContent = 'Next';
botonNext.classList.add('footer-btn');
footer.appendChild(botonNext);

/*si la pregunta actual es la 0, se deshabilita el previous,
y si es la ultima, se deshabilita el next*/
function actualizarBoton() {
  botonPrevious.disabled = preguntaActual == 0;
  botonNext.disabled = preguntaActual == totalPreguntas - 1;
}

//se muestra la pregunta actual y se comprueba si hay que deshabilitar o no algún botton
function actualizarPregunta() {
  parrafo.textContent = preguntas[preguntaActual];
  crearBotonRespuesta();
  actualizarBoton();
}


/*hasta que llega a la última pregunta, se va actualizando el contador
y va actualizando la pregunta cada vez que hagamos click en next*/
botonNext.addEventListener('click', () => {
  if (preguntaActual < totalPreguntas - 1) {
    preguntaActual++;  
    actualizarPregunta();
  }
});

/*mientras no estemos en la primera pregunta, cada vez que hagamos click en previous
se actualiza la pregunta y el contador va restando */
botonPrevious.addEventListener('click', () => {
  if (preguntaActual > 0) {
    preguntaActual--;  
    actualizarPregunta();
  }
});

crearBotonRespuesta();
