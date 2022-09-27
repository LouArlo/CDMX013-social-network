// eslint-disable-next-line import/no-unresolved
import { signInWithPopup, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from '../main.js';
import { auth, authGoogle } from '../lib/auth.js';

export const Login = () => {
  const body = document.createElement('body');
  const header = document.createElement('header');
  const section = document.createElement('section');
  const title2 = document.createElement('h2');
  const buttonLogIn = document.createElement('button');
  const buttonLogInGoogle = document.createElement('button');
  const buttonBack = document.createElement('button');
  const emailLabel = document.createElement('p');
  const inputEmail = document.createElement('input');
  const passLabel = document.createElement('p');
  const inputPass = document.createElement('input');
  const loginLabel = document.createElement('p');
  const logo = document.createElement('img');
  const marca = document.createElement('img');
  const legsImg = document.createElement('img');
  const footer = document.createElement('footer');
  const messageError = document.createElement('p');

  header.classList = 'headerLogin';

  logo.src = './images/catDog.png';
  logo.id = 'animals';
  header.appendChild(logo);

  marca.src = './images/mascota.png';
  marca.id = 'marca';
  header.appendChild(marca);

  section.classList = 'sectionLogin';

  title2.textContent = 'Inicia Sesión';
  title2.classList = 'h2Login';
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

  buttonLogIn.textContent = 'Entrar';
  buttonLogIn.classList = 'buttonE';
  section.appendChild(buttonLogIn);

  loginLabel.textContent = 'o Ingresa con.....';
  loginLabel.classList = 'loginLabel';
  section.appendChild(loginLabel);

  buttonLogInGoogle.classList = 'buttonGoogle';
  section.appendChild(buttonLogInGoogle);

  buttonBack.textContent = 'Regresar';
  buttonBack.classList = 'buttonB';
  section.appendChild(buttonBack);

  messageError.classList = 'messageE';
  section.appendChild(messageError);

  footer.classList = 'footerLogin';

  legsImg.src = './images/patitas.png';
  legsImg.id = 'legs';
  footer.appendChild(legsImg);

  buttonLogIn.addEventListener('click', () => {
    // Log In with Email and Password
    signInWithEmailAndPassword(auth, inputEmail.value, inputPass.value)
      .then(() => {
        // console.log('entro');
        // This gives you a Google Access Token. You can use it to access the Google API.
      //  const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
        // The signed-in user info.
      //  const user = result.user;
        // ...
      }).catch(() => {
        // console.error(err.message);
        // Handle Errors here.
        // const errorCode = error.code;
        //    const errorMessage = error.message;
        // The email of the user's account used.
        //   const email = error.customData.email;
        // The AuthCredential type that was used.
        //  const credential = GoogleAuthProvider.credentialFromError(error);

        messageError.innerHTML = 'Verificar correo o contraseña';
        // ...
        //     });
      });
  });
  buttonLogInGoogle.addEventListener('click', () => {
    // Log In with google
    signInWithPopup(auth, authGoogle)
      .then(() => {
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

  body.append(header, section, footer);

  return body;
};
