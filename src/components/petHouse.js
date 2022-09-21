import { onNavigate } from '../main.js';

export const Login = () => {
  const main = document.createElement('main');
  const header = document.createElement('header');
  const article = document.createElement('article');
  const title2 = document.createElement('h2');

  const buttonBack = document.createElement('button');

  const logo = document.createElement('img');
  const footer = document.createElement('footer');
  const footPage = document.createElement('p');

  logo.src = './logo.png';
  header.appendChild(logo);

  title2.textContent = 'Página en construcción';
  article.appendChild(title2);

  buttonBack.textContent = 'Regresar';
  buttonBack.classList = 'buttonB';
  article.appendChild(buttonBack);

  footPage.textContent = 'Octubre 2022,   github.com/LouArlo';
  footPage.classList = 'footP';
  footer.appendChild(footPage);

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  main.append(header, article, footer);

  return main;
};
