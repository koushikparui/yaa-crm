// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDAqAubdilgRwKjM5uAQ3SErIkki1sN9j0",
    authDomain: "yaa-crm.firebaseapp.com",
    databaseURL: "https://yaa-crm.firebaseio.com",
    projectId: "yaa-crm",
    storageBucket: "yaa-crm.appspot.com",
    messagingSenderId: "257463195769",
    appId: "1:257463195769:web:c3c9b2407d90322ba65ca8",
    measurementId: "G-PMJFM5ZSM4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function login(e) {
	e.preventDefault();

	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const alertbox = document.getElementById("alertbox");

	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			alertbox.classList.add("alert-success");
			alertbox.innerHTML = "Login successful..";
			alertbox.style.display = "block";
			window.location.href = "/index.html";
			setTimeout(() => {
				alertbox.classList.remove("alert-success");
				alertbox.innerHTML = "";
				alertbox.style.display = "none";
			}, 2000);
		})
		.catch((err) => {
			alertbox.classList.add("alert-danger");
			alertbox.innerHTML = err.message;
			alertbox.style.display = "block";
			setTimeout(() => {
				alertbox.classList.remove("alert-danger");
				alertbox.innerHTML = "";
				alertbox.style.display = "none";
			}, 2000);
		});
}

document.getElementById("loginform").addEventListener("submit", login);
