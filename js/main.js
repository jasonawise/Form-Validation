var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var dob_month = document.getElementById('dob_month');
var dob_day = document.getElementById('dob_day');
var dob_year = document.getElementById('dob_year');
var zip = document.getElementById('zip');

validateText(fname, 'First Name must contaion only letters.');
validateText(lname, 'Last Name must contain only letters.');
validateEmail(email);
validateNumber(phone, 15, 'Plesae enter a valid phone number.');
validateNumber(dob_month, 2, 'Month must contain only numbers.');
validateNumber(dob_day, 2, 'Day must contain only numbers.');
validateNumber(dob_year, 4, 'Year must contain only numbers');
validateNumber(zip, 5, 'Zip must contain only numbers.');