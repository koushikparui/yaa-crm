// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyDAqAubdilgRwKjM5uAQ3SErIkki1sN9j0",
  authDomain: "yaa-crm.firebaseapp.com",
  databaseURL: "https://yaa-crm.firebaseio.com",
  projectId: "yaa-crm",
  storageBucket: "yaa-crm.appspot.com",
  messagingSenderId: "257463195769",
  appId: "1:257463195769:web:c3c9b2407d90322ba65ca8",
  measurementId: "G-PMJFM5ZSM4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const mainData = [];
function checkLoggedIn() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
    } else {
      window.location.href = "/login.html";
    }
  });
}

function deleteData(id) {
  firebase
    .database()
    .ref("/list/" + id)
    .remove()
    .then((res) => alert("Data removed"))
    .catch((err) => {});
}

function displayData(dataObj) {
  checkLoggedIn();

  const tableBody = document.querySelector("#tablebody");
  var newData = "";
  for (const entries in dataObj) {
    if (dataObj.hasOwnProperty(entries)) {
      const data = dataObj[entries];
      mainData.push({ id: entries, data });

      newData += `<tr>
            <td >${data.name}</td>
            <td><a href="tel:${data.phone}">${data.phone}</a></td>
            <td><a href="mailto:${data.email}">${data.email}</a></td>
            <td>${data.purchase}</td>
            <td>${data.total}</td>
            <td> <button type="button" onclick="deleteData('${entries}')" class="btn btn-danger">x</td>
            

						</tr>`;
    }
  }
  tableBody.innerHTML = newData;
}

function getData() {
  firebase
    .database()
    .ref("/list/")
    .on("value", (snapshot) => {
      displayData(snapshot.val());
    });
}

window.addEventListener("load", getData);
