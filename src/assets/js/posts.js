
export const postRecipe = (title,description,type) =>{
  var user = firebase.auth().currentUser;
  console.log(user.uid);

    firebase.database().ref('recipe/').push({
    user: user.uid, 
    username: name,
    titleRecipe : title,
    recipe : description,
    tipe: type,
});
};

export const showRecipeTimeLine = () =>{
let post = []; 
   firebase.database().ref('recipe/').on('value', (snapshot) =>{
  snapshot.forEach(function (childsnapshot){
  let childData = childsnapshot.val();
   post.push(childData);
  })
})
return post;
};

export const showRecipeProfile = () => {
const user = firebase.auth().currentUser;
firebase.database().ref('recipe/').orderByChild('user').equalTo(user.uid);
};
//   firebase.database().ref('recipe/' + user.uid).set({
//   	user: user.uid, 
//     username: name,
//     titleRecipe : title,
//     recipe : description,
//     tipe: type,
// });
let deleteRecipe = document.getElementsByClassName("recipeDelete");
    for (let i = 0; i< deleteRecipe.length; i++){
      deleteRecipe[i].addEventListener("click", deletingRecipe);
    }
    const deletingRecipe = (recipe) =>{

      let confirmation = confirm("¿Desea eliminar esta publicación?");
      if (confirmation){
        const keyRecipe = recipe.currentTarget.getAttribute("id").slice(16);
        console.log(keyRecipe);
        firebase.database().ref('recipe/'+user.uid).remove();
        readRecipeFromDatabase();
        }else{
          readRecipeFromDatabase();
        }
      }