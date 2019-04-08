import { templateLogin } from './assets/views/templateLogin.js'
import { templateCreate } from './assets/views/templateCreate.js'
import { templateTimeLine } from './assets/views/templateTimeLine.js'
import { templateProfile } from './assets/views/templateProfile.js'
import { templateNewRecipe } from './assets/views/templateNewRecipe.js'

/*  crear una función que reciba el hash # y según la coincidencia retorne otra función que va 
    a imprimir el template en nuestro HTML 
*/
const changeRouter = (hash) => {
    if (hash === '#/login') {
        return showTemplate(hash);
    }
    if (hash === '#/create'){
        return showTemplate(hash);
    }
    if (hash === '#/timeline') {
        return showTemplate(hash);
    }
    if (hash === '#/profile'){
        return showTemplate(hash);
    }
    if(hash === '' ){
        return showTemplate(hash);
    }
    if (hash === '#/newrecipe') {
        return showTemplate(hash);
    }
};

// imprimirá el template en el HTML
const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';
    
    const deletingRecipe = (route) => {
        const deleteRecipe = firebase.database().ref('recipe/').child('recipe').user.uid;
        let mensaje = confirm ("desea eliminar este mensaje");
        if (mensaje === true){
          firebase.database().ref("recipe/"+user.uid).remove();
          location.reload();
        }else{
          return null;
        }
     }
    //hacemos el match del hash utilizado y el template que quiero msotrar

    switch (router) {
        case 'login': 
            firebase.auth().onAuthStateChanged(firebaseUser => {
                if (firebaseUser) {
                    console.log(firebaseUser);
                    console.log("estoy en el metodo login");
                    return containerRoot.appendChild(templateTimeLine());
                }
                else{
                    console.log("Debes registrarte para poder ingresar");
                   return containerRoot.appendChild(templateLogin()); 
                }
                });
        
        break;
        case 'create':
            firebase.auth().onAuthStateChanged(firebaseUser => {
                if (firebaseUser) {
                    console.log(firebaseUser);
                    return containerRoot.appendChild(templateTimeLine());
                }
                else{
                    console.log("Debes registrarte para poder ingresar");
                    /*containerRoot.innerHTML= templateCreate();*/
                     return containerRoot.appendChild(templateCreate());
                }
        });
        break;
        case 'timeline':
            firebase.auth().onAuthStateChanged(firebaseUser => {
                if (firebaseUser) {
                    console.log(firebaseUser);
                    return containerRoot.appendChild(templateTimeLine());
                }
                else{
                    alert("Debes registrarte para poder ingresar");
                    return containerRoot.appendChild(templateLogin());

                }
        });
        break;
        case 'profile':
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                return containerRoot.appendChild(templateProfile());
            }
            else{
                alert("Debes registrarte para poder ver tu perfil");
                return containerRoot.appendChild(templateLogin());

            }
        });
        break;
        case 'newrecipe':
            firebase.auth().onAuthStateChanged(firebaseUser => {
                if (firebaseUser) {
                    console.log(firebaseUser);
                    return containerRoot.appendChild(templateNewRecipe());
                }
                else{
                    console.log("Debes registrarte para poder ingresar");
                    return containerRoot.appendChild(templateLogin());

                }
        });
        break;
        case '' :
            console.log("salí");
            containerRoot.appendChild(templateLogin());
        break;
        default: 
        containerRoot.innerHTML = '<p>Error 404</p>'
    }
}

/*  inicializamos el tema de las rutas para que se ejecute nuestra función changeRouter()
    y en su defecto showTemplate() 
 */

 export const initRouter = () => {
     window.addEventListener('load', changeRouter(window.location.hash));
     firebase.auth().onAuthStateChanged(firebaseUser => {
        const containerRoot = document.getElementById('root');
                if (firebaseUser) {
                    console.log(firebaseUser);
                    return containerRoot.appendChild(templateTimeLine());
                }
                else{
                    console.log("Debes registrarte para poder ingresar");
                    containerRoot.appendChild(templateLogin());
                }
     })
     
     
     //reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter

     if ('onhashchange' in window){
         window.onhashchange = () => {
             changeRouter(window.location.hash)
         }
     }
}