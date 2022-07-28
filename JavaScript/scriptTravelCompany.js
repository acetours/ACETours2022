//Validate email address on contact page
function validateEmail(email)
{	
	if (email == ""){
		return;
	}
	//Email format validation
	var emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!emailPattern.test(email))  
	{  
		alert('Invalid email format. Please enter valid email');  
		return false;
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
function validatePostalCode (postalCode)
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
function addressNotEmpty(address, postalCode)
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
function validateBookForm (firstName, lastName, date, address, postalCode)
{
	return validateDate(date)
		&& validateName(firstName, lastName)
		&& addressNotEmpty(address, postalCode)
		&& validateAddress(address)
		&& validatePostalCode(postalCode);
}