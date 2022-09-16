import { onNavigate } from "../main.js";

export const Welcome = () =>{
    const div = document.createElement('main');
    const aside = document.createElement('p');
    const buttonLogin = document.createElement('button');
    const buttonRegister = document.createElement('button');
    const logo = document.createElement('img');
    const footPage = document.createElement('footer');

    buttonLogin.textContent= 'Inicia Sesión';
    buttonLogin.classList ="buttonLogIn";

    buttonRegister.textContent= 'Registrate';
    buttonRegister.classList = "buttonReg";

    logo.src="logo.png";

    footPage.classList= 'footP'

    aside.textContent = "Conecta (a nombre de tu mascota) y comparte cuidados, tips, educación, recreación, alimentación, entrenamiento, videos, fotos y mucho más";
    aside.classList ="slogan";

    footPage.textContent ="Octubre 2022,   github.com/LouArlo";

    buttonLogin.addEventListener('click', () => {
        onNavigate('/Login');
    });
    buttonRegister.addEventListener('click', () => {
        onNavigate('/Register');
    });

   // div.append(title, buttonLogin, buttonRegister);
   div.append(logo, buttonLogin, buttonRegister, aside, footPage);
    return div;
};