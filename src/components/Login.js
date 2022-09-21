// eslint-disable-next-line import/no-unresolved
import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
// import { registerGoogle } from "../lib/auth.js";
import { onNavigate } from '../main.js';
import { auth, authGoogle } from '../lib/auth.js';

export const Login = () => {
  const main = document.createElement('main');
  const header = document.createElement('header');
  const article = document.createElement('article');
  const title2 = document.createElement('h2');
  const buttonLogIn = document.createElement('button');
  const buttonLogInGoogle = document.createElement('button');
  const buttonBack = document.createElement('button');
  const emailLabel = document.createElement('p');
  const inputEmail = document.createElement('input');
  const passLabel = document.createElement('p');
  const inputPass = document.createElement('input');
  const logo = document.createElement('img');
  const footer = document.createElement('footer');
  const footPage = document.createElement('p');
  const messageError = document.createElement('p');

  logo.src = './logo.png';
  header.appendChild(logo);

  title2.textContent = 'Inicia Sesión';
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

  buttonLogIn.textContent = 'Entrar';
  buttonLogIn.classList = 'buttonE';
  article.appendChild(buttonLogIn);

  buttonLogInGoogle.src = './btn_google.png';
  buttonLogInGoogle.classList = 'buttonGoogle';
  article.appendChild(buttonLogInGoogle);

  buttonBack.textContent = 'Regresar';
  buttonBack.classList = 'buttonB';
  article.appendChild(buttonBack);

  messageError.classList = 'messageE';
  article.appendChild(messageError);

  footPage.textContent = 'Octubre 2022,   github.com/LouArlo';
  footPage.classList = 'footP';
  footer.appendChild(footPage);

  buttonLogIn.addEventListener('click', () => {
    // Log In with google
    signInWithPopup(auth, inputEmail.value, inputPass.value)
      .then(() => {
        onNavigate('/petHouse');
        // This gives you a Google Access Token. You can use it to access the Google API.
      //  const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
        // The signed-in user info.
      //  const user = result.user;
        // ...
      }).catch(() => {
        // Handle Errors here.
      //  const errorCode = error.code;
        //    const errorMessage = error.message;
        // The email of the user's account used.
        //   const email = error.customData.email;
        // The AuthCredential type that was used.
      //  const credential = GoogleAuthProvider.credentialFromError(error);
      //  messageError.innerHTML = "errorMessage";
        // ...
      });
  });

  buttonLogInGoogle.addEventListener('click', () => {
    // Log In with google
    signInWithPopup(auth, authGoogle)
      .then(() => {
        onNavigate('/petHouse');
        // This gives you a Google Access Token. You can use it to access the Google API.
      //  const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
        // The signed-in user info.
      //  const user = result.user;
        // ...
      }).catch(() => {
        // Handle Errors here.
      //  const errorCode = error.code;
        //    const errorMessage = error.message;
        // The email of the user's account used.
        //   const email = error.customData.email;
        // The AuthCredential type that was used.
      //  const credential = GoogleAuthProvider.credentialFromError(error);
      //  messageError.innerHTML = "errorMessage";
        // ...
      });
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  main.append(header, article, footer);

  return main;
};
