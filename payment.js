// Listen for a submit
document.querySelector(".payment-form").addEventListener("submit", payForm);

function payForm(e) {
  e.preventDefault();
  
   var date = new Date ();
	var month = date.getMonth();
	var year = date.getFullYear();
	

  //   Get input Values
   let fullName = document.querySelector(".fullName").value;
 
  let email = document.querySelector(".email").value;
 
	//return true;
	
  let address = document.querySelector(".address").value;
  
  let cardtype = document.querySelector(".cardtype").value;
	
  let cardname = document.querySelector(".cardname").value;
  
  let cardnumber = document.querySelector(".cardnumber").value;
  
  let expmonth = document.querySelector(".expmonth");
 
  let expyear = document.querySelector(".expyear");
  
  let cvv = document.querySelector(".cvv").value;
  if (address.selectedIndex === 0){
		alert("Please Select the Country you are Paying from");
		return false;
	}
   if (cardtype.selectedIndex === 0){
		alert("Please Select Card Type");
		return false;
	}
    if (expmonth.selectedIndex === 0){
		alert("Please select the month");
		return false;
	}
	if (expyear.selectedIndex === 0){
		alert("Please select the year");
		return false;
	}
	if (expmonth.selectedIndex < month && expyear.selectedIndex <=year){
		alert("The Expiry Date is before Today's Date. Please Select a Valid Expiry Date");
		return false;
	}
	

 // year > expyear || (year === expyear && month >= expmonth
//  let expmonth = document.querySelector(".expmonth").value;
 
//  let expyear = document.querySelector(".expyear").value;
  
 // let sameadr = document.querySelector(".sameadr").value;

  
  //console.log(tour, date, noOfPax, firstName, lastName, email, address, phoneNo, comments);

  //saveBookingInfo(tour, date, noOfPax, firstName, lastName, email, address, phoneNo, comments);

  document.querySelector(".payment-form").reset();
  
  window.location='signup.html';
  
  // Done
    alert('Payment Successful!!...Enjoy Your ACE Tour of Ireland!')
}