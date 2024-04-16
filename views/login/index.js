import { createNotification } from "../components/notification.js";
const form = document.querySelector('#form');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const errorText = document.querySelector('#error-text');

//form event
form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const user = {
            email: emailInput.value,
            password: passwordInput.value
        }
        await axios.post('/api/login', user);
        window.location.pathname = `/main/`;
    } catch (error) {
        createNotification(true, error.response.data.error);
    }
});