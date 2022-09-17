import { onNavigate } from "../main.js";
import {auth} from '../lib/auth.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

export const Register = () => {
    const div = document.createElement('main');
    const title = document.createElement('h2');
    const buttonSend = document.createElement('button');
    const buttonBack = document.createElement('button');
    const emailLabel = document.createElement('p');
    const inputEmail = document.createElement('input');
    const passLabel = document.createElement('p');
    const suguestPass= document.createElement('p');
    const inputPass = document.createElement('input');
    const logo = document.createElement('img');
    const footPage = document.createElement('foother');
    const messageError=document.createElement('p');
     
    messageError.classList="messageE";

    inputEmail.classList = "inputE";
    emailLabel.textContent = "Ingresa correo electrónico";
    emailLabel.classList ="emailLabel";

    inputPass.classList = "inputP";
    inputPass.type= "password";
    passLabel.textContent = "Ingresa contraseña";
    passLabel.classList= "passLabel";
    suguestPass.textContent="Ingresa una contraseña mínimo de 8 caracteres letras y números";
    suguestPass.classList='suguestPass';

    buttonSend.textContent = 'Enviar';
    buttonSend.classList = "buttonS";

    buttonBack.textContent = 'Regresar';
    buttonBack.classList = "buttonB";

    title.textContent = "Registrate aquí!!"
    footPage.textContent = "Octubre 2022,   github.com/LouArlo";

    logo.src = "logo.png";
    /*img.classList="logoEnd";*/

    footPage.classList = 'footP'

        
    buttonSend.addEventListener('click', () => {
      //  createUserWithEmailAndPassword();
      createUserWithEmailAndPassword(auth, inputEmail.value, inputPass.value)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                onNavigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                alert("Correo electrónico o contraseña inválidos");
            });
          
            
    });        

   
    buttonBack.addEventListener('click', () => {
        onNavigate('/');
    });

    div.append(logo, title, inputEmail, emailLabel, inputPass, passLabel, suguestPass, buttonSend, buttonBack, footPage, messageError);

    return div;
};

/*import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

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
  });*/