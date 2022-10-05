import { auth } from '../lib/auth.js';
import {
  createPost, onGetPost, deletePost, onGetOnePost, updatePost,
} from '../lib/firestore.js';

export const Pethouse = () => {
  const body = document.createElement('body');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const profile = document.createElement('img');
  const profileEmailSingin = document.createElement('p');
  const buttonLogout = document.createElement('button');
  const section = document.createElement('section');
  const postform = document.createElement('form');
  const inputPost = document.createElement('textarea');
  const buttonSubmitPost = document.createElement('img');
  const line = document.createElement('div');
  const main = document.createElement('main');
  const edition = document.createElement('figure');
  const post = document.createElement('div');
  const postProfile = document.createElement('div');
  const profilePost = document.createElement('img');
  const profileEmailPost = document.createElement('h3');
  const postText = document.createElement('div');
  const postControls = document.createElement('div');
  const buttonEdition = document.createElement('img');
  const buttonDelete = document.createElement('img');
  const buttonLike = document.createElement('img');
  const logo = document.createElement('img');
  const marca = document.createElement('img');
  const legsImg = document.createElement('img');
  const footer = document.createElement('footer');

  let editStatus = false;
  let id = '';

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

  profileEmailSingin.id = 'emailUser';
  nav.appendChild(profileEmailSingin);
  // profileEmailSingin.textContent = emailUser;

  buttonLogout.classList = 'buttonLogout';
  nav.appendChild(buttonLogout);

  section.classList = 'sectionPetHouse';

  postform.id = 'post-form';
  section.appendChild(postform);

  postform.appendChild(nav);

  inputPost.classList = 'inputPostMessage';
  inputPost.rows = 4;
  inputPost.id = 'inputText';
  inputPost.placeholder = 'Qué me cuentas?....';
  postform.appendChild(inputPost);

  buttonSubmitPost.id = 'btn-save-post';
  buttonSubmitPost.type = 'button';
  postform.appendChild(buttonSubmitPost);

  line.classList = 'line';
  section.appendChild(line);

  main.classList = 'mainPetHouse';
  section.appendChild(main);

  edition.classList = 'scroll';
  main.appendChild(edition);

  post.id = 'post';
  edition.appendChild(post);

  /* postProfile.classList = 'profileContent'; ............
  post.appendChild(postProfile);

  profilePost.src = './images/profile.png';
  profilePost.id = 'profilePost';
  postProfile.appendChild(profilePost);

  profileEmailPost.id = 'emailPost';
  postProfile.appendChild(profileEmailPost);

  postText.classList = 'textPost';
  post.appendChild(postText);

  postControls.classList = 'postControls';
  post.appendChild(postControls);

  buttonDelete.classList = 'buttonDelete';
  postControls.appendChild(buttonDelete);

  buttonEdition.classList = 'buttonEdition';
  postControls.appendChild(buttonEdition);

  buttonLike.classList = 'buttonLike';
  postControls.appendChild(buttonLike); */

  footer.classList = 'footerRegister';

  legsImg.src = './images/patitas.png';
  legsImg.id = 'legs';
  footer.appendChild(legsImg);

  onGetPost((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const getMessage = doc.data(); /// doc.id para editar
      html += `
        <div class='profileContent'>
          <div  id = 'profilePost'>
            <img src ='./images/profile.png' id = 'profilePost'> </img>
            <p id = 'emailPost'>${getMessage.email}</p>
          </div> 
          <div class='textPost'>
            <h3> ${getMessage.message}</h3>
          </div>
          <div class='postControls'>       
            <button class='btn-delete' data-id="${doc.id}"></button>
            <button class='btn-edit' data-id="${doc.id}"></button>
          </div>  
        </div>
      `;
      postText.textContent = getMessage.message;
      profileEmailPost.textContent = getMessage.email;
    });
    post.innerHTML = html;
    const btnsDelete = post.querySelectorAll('.btn-delete');
    // console.log(btnsDelete);
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        // { target: { dataset } }
        // console.log('borrando', dataset.id);
        //if (getMessage.email === auth.currentUser.email) {
          deletePost(dataset.id);
        //}
      });
    });

    const btnsEdit = post.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await onGetOnePost(e.target.dataset.id);
        const postEdit = doc.data();
        postform.inputText.value = postEdit.message;

        editStatus = true;
        id = doc.id;

        // postform['btn-save-post'].innerText = 'update';
      });
    });
  });

  buttonLogout.addEventListener('click', () => {
    auth.signOut()
      .then(() => {
      })
      .catch(() => {

      });
  });

  buttonSubmitPost.addEventListener('click', async (e) => {
    e.preventDefault();
    const message = inputPost.value;
    const currentUser = auth.currentUser;
    const emailUser = currentUser.email;

    if (!editStatus) {
      createPost(message, emailUser);
    } else {
      await updatePost(id, { message, emailUser });
      editStatus = false;
    }

    postform.reset();
  });

  body.append(header, nav, section, footer);

  return body;
};
