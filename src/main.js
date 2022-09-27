import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Pethouse } from './components/Pethouse.js';

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/Login': Login,
  '/Register': Register,
  '/Pethouse': Pethouse,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);

  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);

  root.append(component());
};

root.appendChild(component());

// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
