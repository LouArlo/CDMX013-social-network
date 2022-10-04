// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from '../main.js';
import { auth } from '../lib/auth.js';

export const Register = () => {
  const body = document.createElement('body');
  const header = document.createElement('header');
  const section = document.createElement('section');
  const title2 = document.createElement('h2');
  const buttonSend = document.createElement('button');
  const buttonBack = document.createElement('button');
  const emailLabel = document.createElement('p');
  const inputEmail = document.createElement('input');
  const passLabel = document.createElement('p');
  const suguestPass = document.createElement('p');
  const inputPass = document.createElement('input');
  const logo = document.createElement('img');
  const marca = document.createElement('img');
  const legsImg = document.createElement('img');
  const footer = document.createElement('footer');
  const messageError = document.createElement('p');

  header.classList = 'headerRegister';

  logo.src = './images/catDog.png';
  logo.id = 'animals';
  header.appendChild(logo);

  marca.src = './images/mascota.png';
  marca.id = 'marca';
  header.appendChild(marca);

  section.classList = 'sectionRegister';

  title2.textContent = 'Registrate aquí!!';
  section.appendChild(title2);

  emailLabel.textContent = 'Ingresa correo electrónico';
  emailLabel.classList = 'emailLabel';
  section.appendChild(emailLabel);

  inputEmail.classList = 'inputE';
  section.appendChild(inputEmail);

  passLabel.textContent = 'Ingresa contraseña';
  passLabel.classList = 'passLabel';
  section.appendChild(passLabel);

  inputPass.classList = 'inputP';
  inputPass.type = 'password';
  section.appendChild(inputPass);

  suguestPass.textContent = 'Ingresa una contraseña mínimo de 6 caracteres letras y números';
  suguestPass.classList = 'suguestPass';
  section.appendChild(suguestPass);

  buttonSend.textContent = 'Enviar';
  buttonSend.classList = 'buttonS';
  section.appendChild(buttonSend);

  messageError.classList = 'messageErrorRegister';
  section.appendChild(messageError);

  buttonBack.textContent = 'Regresar';
  buttonBack.classList = 'buttonBackRegister';
  section.appendChild(buttonBack);

  footer.classList = 'footerRegister';

  legsImg.src = './images/patitas.png';
  legsImg.id = 'legs';
  footer.appendChild(legsImg);

  messageError.innerHTML = '';

  buttonSend.addEventListener('click', () => {
    //  createUserWithEmailAndPassword();

    createUserWithEmailAndPassword(auth, inputEmail.value, inputPass.value)
    // resgister (inputEmail.value, inputPass.value)

      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log('usuario  ', user);
        messageError.innerHTML = 'Creación de cuenta Exitosa';
      })
      .catch((error) => {
        // console.log(error);
        const errorCode = error.code;

        messageError.innerHTML = errorCode;
        messageError.innerHTML = 'Correo electónico y/o contraseña incorrecto';
        // alert('Correo electrónico o contraseña inválidos');
      });
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  body.append(header, section, footer);
  return body;
};
