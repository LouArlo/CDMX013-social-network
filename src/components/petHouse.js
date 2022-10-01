import { auth } from '../lib/auth.js';
import { createPost, onGetPost } from '../lib/firestore.js';

export const Pethouse = () => {
  const body = document.createElement('body');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const profile = document.createElement('img');
  const buttonLogout = document.createElement('button');
  const section = document.createElement('section');
  const postform = document.createElement('form');
  const inputPost = document.createElement('textarea');
  const buttonSubmitPost = document.createElement('button');
  const line = document.createElement('div');
  const main = document.createElement('main');
  const edition = document.createElement('figure');
  const post = document.createElement('div');
  const postProfile = document.createElement('div');
  const profilePost = document.createElement('img');
  const postText = document.createElement('div');
  const postControls = document.createElement('div');
  const buttonEdition = document.createElement('button');
  const buttonDelete = document.createElement('button');
  const buttonLike = document.createElement('button');
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
  header.appendChild(nav);

  profile.src = './images/profile.png';
  profile.id = 'profile';
  nav.appendChild(profile);

  buttonLogout.classList = 'buttonLogout';
  nav.appendChild(buttonLogout);

  section.classList = 'sectionPetHouse';

  postform.id = 'post-form';
  section.appendChild(postform);

  postform.appendChild(nav);

  inputPost.classList = 'inputPostMessage';
  inputPost.rows = 3;
  inputPost.placeholder = 'Qué me cuentas?....';
  postform.appendChild(inputPost);

  buttonSubmitPost.id = 'btn-save-post';
  buttonSubmitPost.textContent = 'enviar';
  postform.appendChild(buttonSubmitPost);

  line.classList = 'line';
  postform.appendChild(line);

  main.classList = 'mainPetHouse';
  section.appendChild(main);

  edition.classList = 'scroll';
  main.appendChild(edition);

  post.id = 'post';
  edition.appendChild(post);

  postProfile.classList = 'profileContent';
  post.appendChild(postProfile);

  profilePost.src = './images/profile.png';
  profilePost.id = 'profilePost';
  postProfile.appendChild(profilePost);

  
  postText.classList = 'textPost';
  post.appendChild(postText);

  postControls.classList = 'postControls';
  post.appendChild(postControls);

  buttonDelete.classList = 'buttonDelete';
  postControls.appendChild(buttonDelete);

  buttonEdition.classList = 'buttonEdition';
  postControls.appendChild(buttonEdition);

  buttonLike.classList = 'buttonLike';
  postControls.appendChild(buttonLike);

  footer.classList = 'footerRegister';

  legsImg.src = './images/patitas.png';
  legsImg.id = 'legs';
  footer.appendChild(legsImg);

  onGetPost((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const getMessage = doc.data(); /// doc.id para editar
      console.log(getMessage);
      postText.textContent= getMessage.message;
      
    });
  });

  buttonLogout.addEventListener('click', () => {
    auth.signOut()
      .then(() => {
        // console.log('saliste de sesión');
      })
      .catch(() => {

      });
  });

  buttonSubmitPost.addEventListener('click', (e) => {
    e.preventDefault();
    const message = inputPost.value;
    const currentUser = auth.currentUser;
    const emailUser = currentUser.email;
    console.log(message, emailUser);
    createPost(message, emailUser);
  });

  body.append(header, nav, section, footer);

  return body;
};
