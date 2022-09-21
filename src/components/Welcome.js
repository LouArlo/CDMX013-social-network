import { onNavigate } from '../main.js';

export const Welcome = () => {
  const main = document.createElement('main');
  const header = document.createElement('header');
  const article = document.createElement('article');
  // const nav = document.createElement('nav');
  const aside = document.createElement('aside');
  const slogan = document.createElement('p');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const logo = document.createElement('img');
  const footer = document.createElement('footer');
  const footPage = document.createElement('p');

  logo.src = './logo.png';
  header.appendChild(logo);

  buttonLogin.textContent = 'Inicia Sesión';
  buttonLogin.classList = 'buttonLogIn';
  article.appendChild(buttonLogin);

  buttonRegister.textContent = 'Registrate';
  buttonRegister.classList = 'buttonReg';
  article.appendChild(buttonRegister);

  slogan.textContent = 'Conecta (a nombre de tu mascota) y comparte cuidados, tips, educación, recreación, alimentación, entrenamiento, videos, fotos y mucho más';
  slogan.classList = 'slogan';
  aside.appendChild(slogan);

  footPage.classList = 'footP';
  footPage.textContent = 'Octubre 2022,   github.com/LouArlo';
  footer.appendChild(footPage);

  buttonLogin.addEventListener('click', () => {
    onNavigate('/Login');
  });
  buttonRegister.addEventListener('click', () => {
    onNavigate('/Register');
  });

  // div.append(title, buttonLogin, buttonRegister);
  main.append(header, article, aside, footer);
  return main;
};
