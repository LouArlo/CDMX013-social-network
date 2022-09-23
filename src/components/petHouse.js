import { onNavigate } from '../main.js';
// import { auth, authGoogle } from '../lib/auth.js';

export const Pethouse = () => {
  const main = document.createElement('main');
  const header = document.createElement('header');
  const article = document.createElement('article');
  const title2 = document.createElement('h2');
  const buttonBack = document.createElement('button');
  const postFirst = document.createElement('img');
  const logo = document.createElement('img');
  const marca = document.createElement('img');
  const legsImg = document.createElement('img');
  const footer = document.createElement('footer');
  // const footPage = document.createElement('p');
  logo.src = './catDog.png';
  logo.id = 'animals';
  header.appendChild(logo);

  marca.src = './mascota.png';
  marca.id = 'marca';
  header.appendChild(marca);

  title2.textContent = 'Página en construcción';
  title2.id = 'temporal';
  article.appendChild(title2);

  postFirst.src = './post-inicial.png';
  article.appendChild(postFirst);

  buttonBack.textContent = 'Regresar';
  buttonBack.classList = 'buttonB';
  article.appendChild(buttonBack);

  legsImg.src = './patitas.png';
  legsImg.id = 'legs';
  footer.appendChild(legsImg);

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  main.append(header, article, footer);

  return main;
};
