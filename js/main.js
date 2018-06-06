var inputs = document.querySelectorAll('input:not([type="submit"])');
// console.log(inputs);


// var submit = document.querySelector('input[type="submit"');
// var myForm = document.getElementById('form');
// // Disable the submit button by default
// var isSubmitDisabled = document.getElementById("submit-button");
// isSubmitDisabled.disabled = true;

// var fname = document.getElementById('fname');
// var lname = document.getElementById('lname');
// var email = document.getElementById('email');
// var phone = document.getElementById('phone');




// validateText(fname);
// validateText(lname);

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        var form = createFormObject();

        form.fname.isValid = validateText(form.fname, this);
        // form.fname.errorMessage = 'Must contain letters only';

        form.lname.isValid = validateText(form.lname);
        // form.lname.errorMessage = 'Must contain letters only';

        form.email.isValid = validateEmail(form.email);
        form.phone.isValid = validateNumber(form.phone, 15);
        // form.dob_month.isValid = validateNumber(form.dob_month, 2);
        // form.dob_day.isValid = validateNumber(form.dob_day, 2);
        // form.dob_year.isValid = validateNumber(form.dob_year, 4);

        // if (form.fname.isValid) {
        //     console.log('Its true, its true');
        // }

        console.log(form);
    });
}

// myForm.addEventListener('submit', function (event) {

//     event.preventDefault();

//     var form = createFormObject();

//     form.fname.isValid = validateText(form.fname);
//     form.lname.isValid = validateText(form.lname);
//     form.email.isValid = validateEmail(form.email);
//     form.phone.isValid = validateNumber(form.phone, 15);
//     form.dob_month.isValid = validateNumber(form.dob_month, 2);
//     form.dob_day.isValid = validateNumber(form.dob_day, 2);
//     form.dob_year.isValid = validateNumber(form.dob_year, 4);

//     console.log(form);
// });

// function createForm() {
//     for (var i = 0; i < inputs.length; i++) {
//         inputs[i].addEventListener('keyup', function () {
//             var form = createFormObject();
//             // console.log(form);
//         });
//     }

//     return form;
// }

// var form = createForm();



// var form = createFormObject();

// console.log(form);

// for (var i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('input', function (event) {
//         var inputValue = this.value;
//         console.log(inputValue.validity);
//         if (inputValue.validity) {
//             console.log('This Works')
//         }
//         console.log("------------------------------------------------------------------");
//     }, false);
// }