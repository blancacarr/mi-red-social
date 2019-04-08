import { logOut } from './../js/auth.js';



export const templateProfile = () =>{
    const user = firebase.auth().currentUser;
    let name, email, photoUrl, uid, emailVerified;
    console.log(name, email, photoUrl, uid, emailVerified)

    let storageRef = firebase.storage().ref(user.email + '/profilePicture/');


    document.getElementById('root').innerHTML='';
    const containerProfile = document.createElement('div');
    const contentProfile = `
        <div class=''>
        
        <div class='row'>
        <div class='column'>
        <div class='avatar'>
        <img class="avatar" src='${user.photoURL}' alt="avatar" src="assets/Moodboard/fpo_avatar.png">
        <input id='btnimg' type='file' accept='image/*'><br>
        <img id='output' style="height:100px; width:100px;">

        <a href="#/login" onclick='alert(hola)' id="log-out">Cerrar Sesión </a>  
        </div>
        </div>
        
        <div class='column'>
        <div class='user-name'>
        ${user.displayName}
        <i class="fas fa-cog"></i>
        </div>
        <p>Biografía o descripción del perfil del usuario aquí</p>
        </div>
        </div>
        </div>     
        
        <div class=''>
      <div class='row'>
        <div class='column'>
          <div class='grid-one'>
            Some Text in Column One
          </div>
        </div>
        <div class='column'>
          <div class='grid-two'>
            Some Text in Column Two
          </div>
        </div>
      </div>
    </div>
    <div class=''>
      <div class='row'>
        <div class='column'>
          <div class='grid-one'>
            Some Text in Column One
          </div>
        </div>
        <div class='column'>
          <div class='grid-two'>
            Some Text in Column Two
          </div>
        </div>
      </div>
    </div>
    <div class='some-page-wrapper'>
      <div class='row'>
        <div class='column'>
          <div class='grid-one'>
            Some Text in Column One
          </div>
        </div>
        <div class='column'>
          <div class='grid-two'>
            Some Text in Column Two
          </div>
        </div>
      </div>
    </div>
    <footer>
    <a href="#/timeline"><img class="timeline" src='assets/Moodboard/home.png'  alt="timeline"></a>
    <a href="#/likes"><img class="like" src='assets/Moodboard/like.png'  alt="like"></a>
    <a href="#/newrecipe"><img class="newRecipe" src='assets/Moodboard/add.png'  alt="newRecipe"></a>
    <a href="#/profile"><img class="user" src='assets/Moodboard/user.png'  alt="user"></a>
    </footer>           
`;
    containerProfile.innerHTML= contentProfile;
    const btnLogOut = containerProfile.querySelector('#log-out');
    btnLogOut.addEventListener('click', () =>{
        logOut();
        containerProfile.innerHTML ='';
    });

    const  inputFile = containerProfile.querySelector('#btnimg');
    let refDomAvatar = document.getElementById('output');
    inputFile.onchange = (event) => {
        console.log('algo');
        console.log(inputFile.files);
        if (inputFile.files.length) {
            const fileImage = inputFile.files[0];
            var reader = new FileReader();

            reader.onload = (eventRender) => {
                // Create a Storage Ref w/ username

                const storageRef = firebase.storage().ref(user.email + '/profilePicture/' +  user.email);
                // Upload file
                const task = storageRef.put(fileImage);
                task.then((ok) => {
                    console.log('ok');
                    console.log(ok);
                    console.log('subido!');
                    const urlImage = reader.result;
                    refDomAvatar.src = urlImage;
                }).catch( (error) => {
                    console.log('hubo un error al subir');
                    console.log(error);
                });

            };
            reader.readAsDataURL(inputFile.files[0]);
        }

    };

    const refAvatar = firebase.storage().ref(user.email + '/profilePicture/' + user.email);

    refAvatar.getDownloadURL().then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
            const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
        refDomAvatar.src = url;
        // Or inserted into an <img> element:

    }).catch(function(error) {
        // Handle any errors
        console.log('load avatar');
        console.log(refDomAvatar);
        refDomAvatar.src = 'assets/Moodboard/fpo_avatar.png';
        console.log('errors', error);
    });
    return containerProfile;

};