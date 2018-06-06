/**
 * 
 * @description Validates the form, if form is not valid it disables the submit button and shows error messages
 * @param none
 * @returns isValid -- bool whether or not form is valid 
 * 
 */
const validateForm = function (form) {
    // Gets all the inputs of the form that is not of type submit
    var inputs = document.querySelectorAll('input:not([type="submit"])');

    // Sets the default isValid bool
    var isValid = false;

    for (var i = 0; i < form.length; i++) {
        console.log("In validateForm: " + form[i].isValid);
    }
    return isValid;
}

/**
 * 
 * @description Creates a form object based on the form inputs from the page
 * @param none
 * @returns none
 * 
 */
const createFormObject = function () {
    // Gets all the inputs of the form that is not submit
    var inputs = document.querySelectorAll('input:not([type="submit"])');

    // Create an empty form object
    var form = {}

    // Loops through array and adds inputs from the form to the empty form object
    // Also, should run validation based on input type
    for (var i = 0; i < inputs.length; i++) {
        form[inputs[i].name] = {
            value: inputs[i].value
        };
        form[inputs[i].name].isValid = "";
    }
    return form;
}

/**
 * 
 * @description Validates the text field
 * @param input -- field to validate
 * @returns isValid -- bool whether or not field is valid 
 * 
 */
const validateText = function (input, currentField) {
    var isValid = false;
    var fieldValue = input.value;
    var fieldType = input.type;

    // console.log(currentField);

    if (!containsNumbers(fieldValue)) {
        isValid = true;
    } else {
        input.errorMessage = "Must Contain only letters."
    }
    // if (!isValid) {
    //     // console.log(input.errorMessage)
    // }
    return isValid;
}

/**
 * 
 * @description Validates for a Number only, allows you to add an optional numberlength to test for
 *              numbers that need a certain length, ex: Phone Numbers
 * @param field -- number to validate: also takes optional number length to test for a number with a 
 *              certain link
 * @returns isNumber -- bool is it a number and optionally does it match the number length
 * 
 */
const validateNumber = function (input, numberLength) {
    var isNumber;
    var fieldValue = input.value;
    var length = fieldValue.toString().length

    if (!containsNumbers(fieldValue) || fieldValue == null || fieldValue == "" || length > numberLength) {
        isNumber = false;
        input.errorMessage = "Must contain only numbers."
    } else {
        isNumber = true;
    }

    return isNumber;
}

/**
 * 
 * @description Validates for an email address using a regex
 * @param field -- email address 
 * @returns isEmail -- bool whether or not field is a email address
 * 
 */
const validateEmail = function (input) {
    var isEmail = false;
    var fieldValue = input.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(fieldValue)) {
        isEmail = true;
    } else {
        input.errorMessage = "Please enter a valid email address."
        return isEmail;
    }

    return isEmail;
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