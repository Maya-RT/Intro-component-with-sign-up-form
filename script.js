const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector(".button");
const error = document.querySelector(".error");

form.addEventListener('submit', validate)
submit.addEventListener('click', validate)

function validate(e) {
    e.preventDefault()
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    console.log(firstNameValue)
    console.log(lastNameValue)
    console.log(emailValue)
    console.log(passwordValue)

    if (firstNameValue === ''){
        error.style.display ="block"
    }else{
        error.style.display="none"
    }
}