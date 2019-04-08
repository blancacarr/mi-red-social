
import { postRecipe } from './../js/posts.js';

import { showRecipeTimeLine } from './../js/posts.js';

export  const templateNewRecipe = () =>{

  document.getElementById('root').innerHTML='';
   const containerNewRecipe = document.createElement('div');
   const contentNewRecipe = `    <div class=''>
                      <div class='row '>
                        <div class='column'>
                         <div class='grid-title'>
                            Nueva Receta
                          </div>
                        </div>
                        <div class='column'>
                          <div class="more-info">
                           
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                 <div class="create-recipe">
                  <div class="cfield">
                     
                  <div class='row'>
                      <div class='column'>
                      <div class='imgRecipe'>
                      <img class="imgRecipe" src='${img.recipe}'alt="imagen" 
                      <input id='btnimg' type='file' accept='image/*'>
                      <img id='output' style="height:100px; width:100px;"><br><br>
                      <input type="text" id="titleRecipe" placeholder="Titulo de tu receta">
                  </div>
                  <div class="">
                     
                     <textarea class="notes" cols="35" rows="6" placeholder="ingresa tu receta" id="description"></textarea>
                  </div>
        
                    
                    
                    <select id="tipe-recipe">
                        
                        <option value="celiaco">Celíaco</option>
                        <option value="Diabetico">Diabéticos</option>
                        <option value="Intolerante a la lactosa">Intolerante a la lactosa</option>
                        <option value="Vegano">Vegano</option>
                    </select>
                    <button id="postBtn">Publicar</button>
                </div>
                    <footer><a href="#/timeline"><img class="home" src='assets/Moodboard/home.png'  alt="home"></a>
                    <a href="#/likes"><img class="like" src='assets/Moodboard/like.png'  alt="like"></a>
                    <a href="#/newrecipe"><img class="newRecipe" src='assets/Moodboard/add.png'  alt="newRecipe"></a>
                    <a href="#/profile"><img class="user" src='assets/Moodboard/user.png'  alt="user"></a>
                    </footer>
    `;

    containerNewRecipe.innerHTML= contentNewRecipe;
    const btnPostNewRecipe = containerNewRecipe.querySelector('#postBtn');


    btnPostNewRecipe.addEventListener('click', () =>{
      const imgRecipe=containerNewRecipe.querySelector('#imgRecipe').value;
      const title = containerNewRecipe.querySelector('#titleRecipe').value;
      const description = containerNewRecipe.querySelector('#description').value;
      const tipeRecipe = containerNewRecipe.querySelector('#tipe-recipe').value;

      postRecipe(title,description,tipeRecipe);
      

    })  


    return containerNewRecipe;
}