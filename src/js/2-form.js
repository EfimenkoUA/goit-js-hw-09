const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const email = form.querySelector('input');

form.addEventListener('input', onFormValue);
form.addEventListener('submit', onFormSubmit);
examinationLocalStorage();


/*відстежуй на формі подію input і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".*/
function onFormValue(event) {
    if (event.target.name === 'email' || event.target.name === 'message') {
        // Отримання поточних значень полів форми
        const emailValue = document.querySelector('input').value.trim();
        const messageValue = document.querySelector('textarea').value.trim();

        // Зберігання об'єкта з поточними значеннями у локальному сховищі
        const feedbackFormState = {
            email: emailValue,
            message: messageValue,
        };

        // Збереження у локальному сховищі під ключем "feedback-form-state"
        localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
    }
}

function examinationLocalStorage() {
    const storedData = localStorage.getItem('feedback-form-state');

    if (storedData) {
        const feedbackFormState = JSON.parse(storedData);
        email.value = feedbackFormState.email;
        textarea.value = feedbackFormState.message;
    }
}

function onFormSubmit(event) {
    event.preventDefault();

    const emailValue = email.value.trim();
    const messageValue = textarea.value.trim();

    if (emailValue && messageValue) {
        const formData = {
            email: emailValue,
            message: messageValue,
        };
        console.log(formData);

        localStorage.removeItem('feedback-form-state');
        email.value = '';
        textarea.value = '';
    } else {
        alert('Будь ласка, заповніть обидва поля форми.');
    }
}
