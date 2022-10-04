import { onNavigate } from '../main.js';
import { Register } from './Register.js';

export const Welcome = () => {
  const body = document.createElement('body');
  const header = document.createElement('header');
  const section = document.createElement('section');
  const slogan = document.createElement('p');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const logo = document.createElement('img');
  const marca = document.createElement('img');
  const legsImg = document.createElement('img');
  const footer = document.createElement('footer');
  const footPage = document.createElement('p');

  header.classList = 'headerWelcome';

  logo.src = './images/catDog.png';
  logo.id = 'animals';
  header.appendChild(logo);

  marca.src = './images/mascota.png';
  marca.id = 'marca';
  header.appendChild(marca);

  section.classList = 'sectionWelcome';

  slogan.textContent = 'Conecta (a nombre de tu mascota) y comparte cuidados, tips, educación, recreación, alimentación, entrenamiento, videos, fotos y mucho más';
  slogan.classList = 'slogan';
  section.appendChild(slogan);

  buttonLogin.textContent = 'Inicia Sesión';
  buttonLogin.classList = 'buttonLogIn';
  section.appendChild(buttonLogin);

  buttonRegister.textContent = 'Registrate';
  buttonRegister.classList = 'buttonReg';
  section.appendChild(buttonRegister);

  footer.classList = 'footerWelcome';

  legsImg.src = './images/patitas.png';
  legsImg.id = 'legs';
  footer.appendChild(legsImg);

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
  body.append(header, section, footer);
  return body;
};
