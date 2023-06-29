const signupForm = document.querySelector('#signup-form');
const userEmail = document.querySelector('#user-email');
const signUpPage = document.querySelector('#signup-page');
const successPage = document.querySelector('#success-pg');
const dismiss = document.querySelector('#dismiss')

function updateSuccessMsg(email) {
    userEmail.textContent = email;
}

function toggleMainAndSuccess() {
    signUpPage.classList.toggle('hidden');
    successPage.classList.toggle('hidden');
}

function isValidEntry(str) {
    const reg = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    return reg.test(str);
  }

function showErrors() {
    const errorMsg = document.getElementById('error-message');
    const input = document.getElementById('email');
    errorMsg.classList.remove('hidden');
    input.classList.add('error');
}

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm.querySelector('#email')
    const valid = isValidEntry(email.value); 
    if (!valid) {
        return showErrors();
    }
    if (valid) {
        updateSuccessMsg(email.value);
        toggleMainAndSuccess();
    }
});

dismiss.addEventListener('click', () => {
    toggleMainAndSuccess();
    updateSuccessMsg('');
})