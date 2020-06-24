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



function submit(e) {
	    e.preventDefault();
	    const name = document.getElementById("name").value;
	    const phone = document.getElementById("phone").value;
	    const email = document.getElementById("email").value;
	const purchase = document.getElementById("purchase").value;
	const total = document.getElementById("total").value;
	

	const alertbox = document.getElementById("alertbox");

	firebase
		.database()
		.ref("/list/")
		.push({
			name,
			phone,
			email,
			purchase,
			total,
		})
		.then(() => {
			alertbox.classList.add("alert-success");
			alertbox.innerHTML = "Record added successfully...";
			alertbox.style.display = "block";
			setTimeout(() => {
				alertbox.classList.remove("alert-success");
				alertbox.innerHTML = "";
				alertbox.style.display = "none";
			}, 2000);
			document.forms["dataentryform"].reset();
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

document.getElementById("dataentryform").addEventListener("submit", submit);
document
	.getElementById("cancelbtn")
	.addEventListener("click", () => document.forms["dataentryform"].reset());
