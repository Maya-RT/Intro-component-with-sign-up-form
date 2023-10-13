const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector(".button");
/*const label = document.querySelector("label")*/

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();
});


function validateInput() {
    
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === ''){
        errorFor(firstName, 'First Name cannot be empty');
        
    }else{
        successFor(firstName);
    }

    if (lastNameValue ===''){
        errorFor(lastName, 'Last Name cannot be empty');

    }else{
        successFor(lastName)
    }

    if (emailValue ===''){
        errorFor(email, 'Email cannot be empty');
    }else if (!validEmail(emailValue)){
        errorFor(email, 'Looks like this is not an email');
    }else{
        successFor(email);
    }

    if(passwordValue ===''){
        errorFor(password, 'Password cannot be empty');
        console.log(passwordValue);
    }else{
        successFor(password);
    }
}
function errorFor(input, message){
    const formElement = input.parentElement;
    const small = formElement.querySelector('small');
    const label = formElement.querySelector('label')
    formElement.className = 'form-element error';
    small.style.display = "block";
    small.innerHTML = message;
    label.style.display = "block";
}
function successFor(input){
    const formElement = input.parentElement;
    const small = formElement.querySelector('small');
    formElement.className = 'form-element success';
    const label = formElement.querySelector('label')
    label.style.display = "none";
    small.style.display= "none";
}
function validEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test
    (email)
}