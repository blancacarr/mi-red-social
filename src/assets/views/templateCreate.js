import { createAccount, verifyPass } from './../js/auth.js';

export const templateCreate = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `
      
          <div class='' id="green-columns">
            <div id="logo-welcome" >
                
            </div>
            <div class="cfield">
                <i class="fas fa-user-alt"></i>
                <input type="text"  placeholder="Nombre y apellido" name="">
            </div>
            
            <div class="cfield">
                <i class="fas fa-user-alt"></i>
                <input id="mail" type="email"  placeholder="Correo" name="">
            </div>
            <div class="cfield">
                <i class="fas fa-key"></i>
               <input type="password" id="pass" placeholder="Contraseña" name="">
            </div>
            <div class="cfield">
                <i class="fas fa-key"></i>
               <input type="password" id="pass-repeat" placeholder="Repetir Contraseña" name="">
            </div>
            <div >
                <button id="create" class="sign-in-style">Crear cuenta</button>
            </div>
          
    
   `;

    //pasar cel contenido al div
    containerCreate.innerHTML = contentCreate;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerCreate.querySelector('#create');

    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {

        let pass = containerCreate.querySelector('#pass').value;
        let mail = containerCreate.querySelector('#mail').value;
        let passRepeat = containerCreate.querySelector('#pass-repeat').value;
        let result = verifyPass(pass, passRepeat)

        if (result === true) {
            createAccount(mail, pass);
        } else {
            alert("Las contraseñas no coinciden")
        }

    })
    return containerCreate;
}