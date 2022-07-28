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
let bookingInfo = firebase.database().ref("bookings");

// Listen for a submit
document.querySelector(".booking-form").addEventListener("submit", bookForm);

function bookForm(e) {
  e.preventDefault();

  //   Get input Values
   let tour = document.querySelector(".tour").value;
   if (tour == ""){
	   alert('Please Select a Tour!');
   }
  let date = document.querySelector(".date").value;
  if (date == "" || date == null){
		alert('Please Fill in the Date!');
		return false;
	}
	var parsedDate = new Date(date);
	var today = new Date();

	if(parsedDate < today){ 
		alert('The Booking Date is before Todays Date. Please Select a Valid Booking Date');
		return false;
	}
	//return true;
	
  let noOfPax = document.querySelector(".noOfPax").value;
  let firstName = document.querySelector(".firstName").value;
   if (firstName == ""){
	   alert("First Name Must be Filled Out!");
	   return false; 
   }
  let lastName = document.querySelector(".lastName").value;
   if (lastName == ""){
	   alert("Last Name Must be Filled Out!");
	   return false; 
   }
   let email = document.querySelector(".email").value;
   if (email == ""){
	   alert("Email Must be Filled Out!");
	   return false; 
   }
  let address = document.querySelector(".address").value;
    if (address == ""){
	   alert("Address Must be Filled Out!");
	   return false; 
   }
  let countryCode = document.querySelector(".countryCode").value;
  let phoneNo = document.querySelector(".phoneNo").value;
   if (phoneNo == ""){
	   alert("Contact Number Must be Filled Out!");
	   return false; 
   }
  let comments = document.querySelector(".comments").value;
  if (comments == ""){
	   alert("Please Enter 'none' if no Special Requests!");
	   return false; 
   }
  
  console.log(tour, date, noOfPax, firstName, lastName, email, address, countryCode, phoneNo, comments);

  saveBookingInfo(tour, date, noOfPax, firstName, lastName, email, address, countryCode, phoneNo, comments);

  document.querySelector(".booking-form").reset();
  
  
  
  // Done
    alert('Booking Successful!...Please Continue to Payment Page!')
	
	window.location='payment.html';
}

// Save infos to Firebase
function saveBookingInfo(tour, date, noOfPax, firstName, lastName, email, address, countryCode, phoneNo, comments) {
  let newBookingInfo = bookingInfo.push();

  newBookingInfo.set({
	tour: tour,
    date: date,
	noOfPax : noOfPax,
    firstName: firstName,
    lastName: lastName,
	email: email,
	address: address,
	countryCode:countryCode,
	phoneNo: phoneNo,
	comments: comments,
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

