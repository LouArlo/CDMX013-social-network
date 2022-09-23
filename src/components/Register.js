// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from '../main.js';
import { auth } from '../lib/auth.js';
// import { resgister } from "../lib/auth.js";

export const Register = () => {
  const main = document.createElement('main');
  const header = document.createElement('header');
  const article = document.createElement('article');
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
  // const footPage = document.createElement('p');
  const messageError = document.createElement('p');

  logo.src = './catDog.png';
  logo.id = 'animals';
  header.appendChild(logo);

  marca.src = './mascota.png';
  marca.id = 'marca';
  header.appendChild(marca);

  title2.textContent = 'Registrate aquí!!';
  article.appendChild(title2);

  emailLabel.textContent = 'Ingresa correo electrónico';
  emailLabel.classList = 'emailLabel';
  article.appendChild(emailLabel);

  inputEmail.classList = 'inputE';
  article.appendChild(inputEmail);

  passLabel.textContent = 'Ingresa contraseña';
  passLabel.classList = 'passLabel';
  article.appendChild(passLabel);

  inputPass.classList = 'inputP';
  inputPass.type = 'password';
  article.appendChild(inputPass);

  suguestPass.textContent = 'Ingresa una contraseña mínimo de 6 caracteres letras y números';
  suguestPass.classList = 'suguestPass';
  article.appendChild(suguestPass);

  buttonSend.textContent = 'Enviar';
  buttonSend.classList = 'buttonS';
  article.appendChild(buttonSend);

  messageError.classList = 'messageE';
  article.appendChild(messageError);

  buttonBack.textContent = 'Regresar';
  buttonBack.classList = 'buttonB';
  article.appendChild(buttonBack);

  legsImg.src = './patitas.png';
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
        console.log(user);
        messageError.innerHTML = 'Creación de cuenta Exitosa';
        // ...
        onNavigate('/');
      })
      .catch((error) => {
        // console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        messageError.innerHTML = 'Correo electónico y/o contraseña incorrecto';
        // alert("Correo electrónico o contraseña inválidos");
      });
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  main.append(header, article, footer);

  return main;
};

/* import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); */
