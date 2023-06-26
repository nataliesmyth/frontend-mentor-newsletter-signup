const signupForm = document.getElementById('signup-form');
const userEmail = document.getElementById('user-email');
const signUpPage = document.getElementById('signup-page');
const successPage = document.getElementById('success-page');
const dismiss = document.getElementById('dismiss')

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
    const email = signupForm.querySelector('#mail')
    const valid = isValidEntry(email.value);
    if (!valid) {
        return showErrors();
    }
    else if (valid) {
        updateSuccessMsg(email.value);
        toggleMainAndSuccess();
    }
});

dismiss.addEventListener('click', () => {
    toggleMainAndSuccess();
    updateSuccessMsg('');
})