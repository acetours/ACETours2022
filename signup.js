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
 //   projectId: "ace-tours-e94a8",
 //   storageBucket: "ace-tours-e94a8.appspot.com",
 //   messagingSenderId: "506370027189",
 //   appId: "1:506370027189:web:b5e4cef1a93eb8ac0e18fc"


};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// Refernece bookingInfo collections
let signupInfo = firebase.database().ref("signups");

// Listen for a submit
document.querySelector(".signup-form").addEventListener("submit", signupForm);

function signupForm(e) {
  e.preventDefault();

  //   Get input Values
  let full_name = document.querySelector(".full_name").value;
  if (full_name == ""){
	   alert("Please Enter your Full Name!");
	   return false; 
   }
   let email = document.querySelector(".email").value;
   if (email == ""){
	   alert("Please Enter your Email Address!");
	   return false; 
   }
  let nationality = document.querySelector(".nationality").value;
  let been_to_ireland_before = document.querySelector(".irish_ancestory").value;
  let mailingList = document.querySelector(".mailingList").value;
 
/* 
   let tour = document.querySelector(".tour").value;
  let date = document.querySelector(".date").value;
  let noOfPax = document.querySelector(".noOfPax").value;
  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let address = document.querySelector(".address").value;
  let state = document.querySelector(".state").value;
  let zipCode = document.querySelector(".zipCode").value;
  let comments = document.querySelector(".comments").value;
 */
 
  console.log(full_name, email, nationality, irish_ancestory, mailingList);

  saveSignUpInfo(full_name, email, nationality, irish_ancestory, mailingList);

  document.querySelector(".signup-form").reset();
  
  // Done
    alert('Sign Up Successful!')
}

// Save infos to Firebase
function saveSignUpInfo(full_name, email, nationality, irish_ancestory, mailingList) {
  let newSignUpInfo = signupInfo.push();

  newSignUpInfo.set({
	full_name : full_name,
	email: email,
    nationality: nationality,
    irish_ancestory: irish_ancestory,
	mailingList: mailingList,
	
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

/*
//Booking page validation
function validateDate(date)
{
	if (date == "" || date == null){
		alert('Please fill in the date');
		return false;
	}
	var parsedDate = new Date(date);
	var today = new Date();

	if(parsedDate < today) 
	{
		alert('Date must be today onwards');
		return false;
	}

	return true;
}

//Name fields validation
function validateName(firstName, lastName)
{
	if (firstName == "" || firstName == null)
	{
		alert('First name must be filled');
		return false;
	}

	if(lastName == "" || lastName == null)
	{
		alert('Last name cannot be empty');
		return false;
	}

	return true;
}

//Only accept alphabetical for name
function nameIsAlphabetical (firstName, lastName)
{
	var alphabet = /^[a-zA-Z]+$/;
	if (!alphabet.test(firstName))
	{	if (!alphabet.test(lastName))
		{
			alert('Names must be alphabetical only');
			return false;
		}
	}

	return true;
}


//Zipcode validation (USA standard)
function validatePostalCode (zipCode)
{
	var numericExpression = /^[0-9]+$/;
	if (!numericExpression.test(postalCode))
	{
		alert('Postal code uses Numbers only');
		return false;
	}

	return true;
}

//Adress validator for alphaNumeric 
function validateAddress (address)
{
	var alphaNum = /^[a-zA-Z0-9\s,'-]*$/;
	if (!alphaNum.test(address))
	{
		alert('Address not valid');
		return false;
	}

	return true;
}

//Address abd zipcode fields check
function addressNotEmpty(address, zipCode)
{
	if (address == "" || address == null)
	{
		alert('Please fill in the Address');
		return false;
	}

	if(postalCode == "" || postalCode == null)
	{
		alert('Please fill in postal code with numbers only');
		return false;
	}

	return true;
}

//Function to validate that fields must be filled
function validateBookForm (firstName, lastName, date, address, zipCode)
{
	return validateDate(date)
		&& validateName(firstName, lastName)
		&& addressNotEmpty(address, zipCodeCode)
		&& validateAddress(address)
		&& validatePostalCode(zipCode);
}

*/