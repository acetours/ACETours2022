// Your web app's Firebase configuration

var firebaseConfig = {
	
	apiKey: "AIzaSyAlmv_WWvDJ15QzJg7CQwoY1xiR_pLrtBc",
    authDomain: "ace-tours-a152c.firebaseapp.com",
    databaseURL: "https://ace-tours-a152c-default-rtdb.firebaseio.com",
    projectId: "ace-tours-a152c",
    storageBucket: "ace-tours-a152c.appspot.com",
    messagingSenderId: "863484388507",
    appId: "1:863484388507:web:a6f5110c2dfecdaa16523e"
	
	
 //   apiKey: "AIzaSyCde3xvCAeFN6SHN3iL5IFXdN4lJAN-eLE",
//    authDomain: "ace-tours-e94a8.firebaseapp.com",
   // databaseURL: "https://ace-tours-e94a8-default-rtdb.firebaseio.com",
 //   projectId: "ace-tours-e94a8",
//    storageBucket: "ace-tours-e94a8.appspot.com",
//    messagingSenderId: "506370027189",
//    appId: "1:506370027189:web:b5e4cef1a93eb8ac0e18fc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()

const database = firebase.database()

// Set up our register function
function register () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  full_name = document.getElementById('full_name').value
  nationality = document.getElementById('nationality').value
  been_to_ireland_before = document.getElementById('been_to_ireland_before').value
  mailingList = document.getElementById('mailingList').value

   Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is not correct!!')
    return
    // Don't continue running the code
  }
  if (validate_field(full_name) == false || validate_field(nationality) == false || validate_field(been_to_ireland_before) == false || validate_field(mailingList) == false) {
    alert('One or More Extra Fields are not filled correctly!!')
    return
  }
 
   Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
	  full_name : full_name,
      nationality : nationality,
      been_to_ireland_before : been_to_ireland_before,
	  mailingList : mailingList,
      last_login : Date.now()
	  
	  
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)
	
	

    // DOne
    alert('User Created Successfully!!')
	
	
 // })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

// Set up our login function
function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is not correct!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
    alert('User Logged In Successfully!!')
	
	//document.querySelector(".booking-form").reset();

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
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