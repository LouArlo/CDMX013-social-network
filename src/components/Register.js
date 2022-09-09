import { onNavigate } from "../main.js";

export const Register = () =>{
    const div = document.createElement('div');
    const title = document.createElement('h2');
    const button = document.createElement('button');
    const buttonback = document.createElement('button');
    const InputEmail = document.createElement('input');
    const inputPass = document.createElement('input');

    button.textContent= 'Registrate';
    buttonback.textContent= 'Regresa';
    title.textContent = "Haz aquí tu registro!"

    button.addEventListener('click', () => {
        onNavigate('/');
    });
    buttonback.addEventListener('click', () => {
        onNavigate('/');
    });
    div.append(title, InputEmail, inputPass, button, buttonback);

    return div;
};