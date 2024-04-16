/*** */
import { createNotification } from "../components/notification.js";
/*** */
const body = document.querySelector('body');
/*** */
const form = document.querySelector('#form');
/*** */
const emailInput = document.querySelector('#email-input');
const nameInput = document.querySelector('#name-input');
const passwordInput = document.querySelector('#password-input');
const confirmInput = document.querySelector('#confirm-input');

//regex
const NAME_REGEX =
    /^[A-Z\u00d1][a-zA-Z-ÿ\u00f1\u00d1áéíóú]+(\s*[A-Z\u00d1][a-zA-Z-ÿ\u00f1\u00d1áéíóú\s]*)$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//Validations
let nameValidation = false;
let emailValidation = false;
let passwordValidation = false;
let confirmValidation = false;
//eventos listener para validar y enviar
/***Input Email */
emailInput.addEventListener('input', e => {
    const emailValidation = EMAIL_REGEX.test(e.target.value);
    validation(emailValidation, emailInput);
});
/**** */
nameInput.addEventListener('input', e => {
    const nameValidation = NAME_REGEX.test(e.target.value);
    validation(nameValidation, nameInput);
});
/**** */
passwordInput.addEventListener('input', e => {
    const passwordValidation = PASSWORD_REGEX.test(e.target.value);
    confirmValidation = e.target.value === confirmInput.value;
    validation(passwordValidation, passwordInput);
    validation(confirmValidation, confirmInput);
});
/**** */
confirmInput.addEventListener('input', e => {
    confirmValidation = e.target.value === passwordInput.value;
    validation(confirmValidation, confirmInput);
});
//Function events
const validation = (validation, input) => {
    if (validation) {
        input.classList.remove('wrong');
        input.classList.remove('normal');
        input.classList.add('green');
        input.parentElement.children[2].classList.add('hide');
        input.parentElement.children[2].classList.remove('show');
    } else {
        input.classList.remove('green');
        input.classList.remove('normal');
        input.classList.add('red');
        input.parentElement.children[2].classList.add('show');
        input.parentElement.children[2].classList.remove('hide');
    }
    if (input.value === "") {
        input.classList.remove("red");
        input.classList.remove("green");
        input.classList.add("normal");
        input.parentElement.children[2].classList.add('hide');
        input.parentElement.children[2].classList.remove('show');
    }
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        }
        const { data } = await axios.post('/api/users', newUser);
        createNotification(false, data);
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        confirmInput.value = '';
        /** */
        nameInput.classList.remove("red");
        nameInput.classList.remove("green");
        nameInput.classList.add("normal");
        /*** */
        emailInput.classList.remove("red");
        emailInput.classList.remove("green");
        emailInput.classList.add("normal");
        /*** */
        passwordInput.classList.remove("red");
        passwordInput.classList.remove("green");
        passwordInput.classList.add("normal");
        /*** */
        confirmInput.classList.remove("red");
        confirmInput.classList.remove("green");
        confirmInput.classList.add("normal");
        /*** */
        validation(nameInput, false);
        validation(emailInput, false);
        validation(passwordInput, false);
        validation(confirmInput, false);
    } catch (error) {
        createNotification(true, error.response.data.error);
    }
});
