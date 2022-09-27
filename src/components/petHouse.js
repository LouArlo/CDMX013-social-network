// import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { auth } from '../lib/auth.js';
// import { logout } from '../lib/auth.js';

export const Pethouse = () => {
  const body = document.createElement('body');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const profile = document.createElement('img');
  const buttonLogout = document.createElement('button');
  const section = document.createElement('section');
  const title2 = document.createElement('h2');
  const postFirst = document.createElement('img');
  const logo = document.createElement('img');
  const marca = document.createElement('img');
  const legsImg = document.createElement('img');
  const footer = document.createElement('footer');

  header.classList = 'headerPetHouse';

  logo.src = './images/catDog.png';
  logo.id = 'animals';
  header.appendChild(logo);

  marca.src = './images/mascota.png';
  marca.id = 'marca';
  header.appendChild(marca);

  nav.classList = 'navPetHouse';

  profile.src = './images/profile.png';
  profile.id = 'profile';
  nav.appendChild(profile);

  buttonLogout.classList = 'buttonLogout';
  nav.appendChild(buttonLogout);

  section.classList = 'sectionPetHouse';

  title2.textContent = 'Página en construcción';
  title2.id = 'temporal';
  section.appendChild(title2);

  postFirst.src = './images/post-inicial.png';
  section.appendChild(postFirst);

  footer.classList = 'footerRegister';

  legsImg.src = './images/patitas.png';
  legsImg.id = 'legs';
  footer.appendChild(legsImg);

  buttonLogout.addEventListener('click', () => {
    auth.signOut()
      .then(() => {
        console.log('saliste de sesión');
      })
      .catch(() => {

      });
  });

  body.append(header, nav, section, footer);

  return body;
};
