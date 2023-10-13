# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

Project's not finished yet so screenshot will be available once the project will be completed.


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
  I started, like any other project of mine, with de mobile design. Once it's complited I followed with the desktop design. I first did the HTML and CSS part and finished with JavaScript. 
  
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript


### What I learned

The challenge was to make the following message "Looks like this is not an email" appear if the text on the input was not a valid email, but I went a little further and made two messages. The first if the it wasn't a valid email and the second if the input was left empty.
I added as well a success function so when the inputs where correct the border color of the input case would change to green and the error message and icon would desapear.


```js
if (emailValue ===''){
        errorFor(email, 'Email cannot be empty');
    }else if (!validEmail(emailValue)){
        errorFor(email, 'Looks like this is not an email');
    }else{
        successFor(email);
    }
    and
function successFor(input){
    const formElement = input.parentElement;
    const small = formElement.querySelector('small');
    formElement.className = 'form-element success';
    const label = formElement.querySelector('label')
    label.style.display = "none";
    small.style.display= "none";
}

```


### Continued development

JavaScript part was the longest because I encountered many errors and bugs that took some time to solve. However I'm very happy to have complited this challenge it was very testing on my JS skills and I learned so much! 








