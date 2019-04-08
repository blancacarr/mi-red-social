export const loginGoogle = () => {
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function (result) {
		// This gives you a Google Access Token. You can use it to access the Google API.
		const token = result.credential.accessToken;
		// The signed-in user info.
		const user = result.user;
		// ...
	}).catch(function (error) {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		const credential = error.credential;
		console.log(errorCode,errorMessage, email,credential)
		// ...
	});
	return 'login con Google OK';
}

export const createAccount = (email, password) => {
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode)
		alert(errorMessage);
		// ...
	});
	return 'cuenta creada OK';
}

export const signIn = (email,password) => {
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  const errorCode = error.code;
	const errorMessage = error.message;
	console.log(errorCode,errorMessage)
  // ...
});
}

export const logOut = () => {
	firebase.auth().signOut();
}

export const verifyPass = (pass, passRepeat) => {
  if (pass === passRepeat) {
		return true;
	}
	else {
		return false;
	}
} 
	
 export const verifyUser = (firebaseUser) => {
	if (firebaseUser) {
		console.log('muestra timeline')
		return true;
	}
	else{
		console.log("Debes registrarte para poder ingresar");
		return false;
	}
} 