/**
 * Name: AERO VALIDATION
 * Version: 1.0
 * Desc: This is a custom validation library 
 */


/**
 * 
 * @description Checks to see if the input contains text
 * @param input -- field to validate
 * @returns isValid -- bool whether or not field is valid 
 * 
 */
const containsText = function (input) {
    var isValid = false;

    if (!containsNumbers(input)) {
        isValid = true;
        console.log('validateText is: ' + isValid)

    } else {
        console.log('validateText is: ' + isValid)
    }
    return isValid;
}

/**
 * 
 * @description Checks to see if the field value is a number
 * @param fieldValue 
 * @returns isNumber -- bool whether or not field is a number
 * 
 */
const containsNumbers = function (fieldValue) {
    var isNumber = true;
    var re = /^[A-Za-z]+$/;
    if (re.test(fieldValue)) {
        isNumber = false;
    } else {
        return isNumber;
    }

    return isNumber;
}

/**
 * 
 * @description Runs realtime validation on a text input
 * @param input  -- should be the input field to validate 
 * @param message --optional, allows you to send a custom error message to display
 * @returns none
 * 
 */
const validateText = function (input, message) {
    input.addEventListener("keyup", function () {
        if (containsText(input.value)) {
            removeErrorMessage(input);
        } else {
            // This checks if a message was passed if not it sets a default one
            if (message == null) {
                displayErrorMessage(input, 'Please Enter Only Text');
            } else {
                displayErrorMessage(input, message);
            }
        }
    })
}

/**
 * 
 * @description Validates for an email address using a regex
 * @param input -- email address 
 * @param message --optional, allows you to send a custom error message to display
 * @returns isEmail -- bool whether or not field is a email address
 * 
 */
const validateEmail = function (input, message) {
    // var isEmail = false;
    // var fieldValue = input.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    input.addEventListener("keyup", function () {
        if (re.test(input.value)) {
            removeErrorMessage(input);
        } else {
            // This checks if a message was passed if not it sets a default one
            if (message == null) {
                displayErrorMessage(input, 'Please Enter A Valid Email');
            } else {
                displayErrorMessage(input, message);
            }
        }
    })
}

/**
 * 
 * @description Validates for a Number only, allows you to add an optional numberlength to test for
 *              numbers that need a certain length, ex: Phone Numbers
 *              Requires a number length if you want to define a message.
 * @param field -- number to validate 
 * @param numberlength --optional, allows you to test for a certain number length
 * @param message --optional, allows you to send a custom error message to display
 * @returns isNumber -- bool is it a number and optionally does it match the number length
 * 
 */
const validateNumber = function (input, numberLength, message) {
    var length = input.value.toString().length

    input.addEventListener("keyup", function () {
        if (!containsNumbers(input.value) || input.value == null || input.value == "" || length > numberLength) {
            // This checks if a message was passed if not it sets a default one
            if (message == null) {
                displayErrorMessage(input, 'Must Contain Only Numbers');
            } else {
                displayErrorMessage(input, message);
            }
        } else {
            removeErrorMessage(input);
        }
    })
}

/**
 * 
 * @description Removes the error message if there is one present
 * @param input -- should be the input field to validate 
 * @returns none
 * 
 */
const removeErrorMessage = function (input) {
    var inputID = input.id;
    var errorDiv = inputID + '-error';
    var errorMessage = document.getElementById(errorDiv);
    input.classList.remove('input-error--message');
}

/**
 * 
 * @description Displays a error message if there is an error with the form
 * @param input -- should be the input field to validate 
 * @param message --optional, allows you to send a custom error message to display
 * @returns none
 * 
 */
const displayErrorMessage = function (input, message) {
    var inputID = input.id;
    var errorDiv = inputID + '-error';
    var errorMessage = document.getElementById(errorDiv);
    errorMessage.innerHTML = message;
    input.classList.add('input-error--message');
}