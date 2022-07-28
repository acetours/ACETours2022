// Your web app's Firebase configuration
var firebaseConfig = {
	
	apiKey: "AIzaSyAlmv_WWvDJ15QzJg7CQwoY1xiR_pLrtBc",
    authDomain: "ace-tours-a152c.firebaseapp.com",
    databaseURL: "https://ace-tours-a152c-default-rtdb.firebaseio.com",
    projectId: "ace-tours-a152c",
    storageBucket: "ace-tours-a152c.appspot.com",
    messagingSenderId: "863484388507",
    appId: "1:863484388507:web:a6f5110c2dfecdaa16523e"
	
	
//	apiKey: "AIzaSyCde3xvCAeFN6SHN3iL5IFXdN4lJAN-eLE",
//    authDomain: "ace-tours-e94a8.firebaseapp.com",
   // databaseURL: "https://ace-tours-e94a8-default-rtdb.firebaseio.com",
//    projectId: "ace-tours-e94a8",
 //   storageBucket: "ace-tours-e94a8.appspot.com",
 //   messagingSenderId: "506370027189",
 //   appId: "1:506370027189:web:b5e4cef1a93eb8ac0e18fc"


};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// Refernece contactInfo collections
let contactInfo = firebase.database().ref("queries");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  if (name == ""){
	   alert("Please Enter your Full Name!");
	   return false; 
   }
  let email = document.querySelector(".email").value;
   if (email == ""){
	   alert("Please Enter your Email Address!");
	   return false; 
   }
  let message = document.querySelector(".message").value;
   if (message == ""){
	   alert("Please Enter your Message!");
	   return false; 
   }
  
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
  
  // Done
    alert('Message Sent Successfully!!')
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}