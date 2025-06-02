//Configurations;
const CONTACT_FORM_CLASS = 'contact__form';
const MESSAGE_CONTAINER_CLASS = 'contact__form-message';

const contactForm = document.querySelector(`.${CONTACT_FORM_CLASS}`);

//Перевіряємо хтмл елемент, якщо нема - створюємо;
let messageContainer = document.querySelector(`.${MESSAGE_CONTAINER_CLASS}`);
if (!messageContainer) {
    messageContainer = document.createElement('div');
    messageContainer.className = MESSAGE_CONTAINER_CLASS;
    contactForm.appendChild(messageContainer)
}

//Валідація;
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}


function isValidPhone(phone) {
    const phonePattern = /^\+?(\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/;
    return phonePattern.test(phone);
}

function showMessage(message, type = 'success') {
    messageContainer.textContent = message;

}

//Submit
contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = contactForm.elements['name'].value.trim();
    const phone = contactForm.elements['phone'].value.trim();
    const email = contactForm.elements['email'].value.trim();
    const message = contactForm.elements['message'].value.trim();

    //Валідація;
    if (!name || !phone || !email) {
        showMessage('Please fill in all required fields: Name, Phone, Email', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email adress', 'error');
        return;
    }

    if (!isValidPhone(phone)) {
        showMessage('Please enter a valid phone number', 'error');
        return;
    }

    const formData = {
        name,
        phone,
        email,
        message,
    };

    try {
       
        const fetchResponse = await (fetch('/api-contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify(formData)
        }));

        if (!fetchResponse.ok) {
            throw new Error('Error submitting form');
        }
        const resultData = await fetchResponse.json()

        console.log('Form submitted successfully:', resultData);
        showMessage('Thank you! We will contact you soon', 'success');
        contactForm.reset();

    } catch (error) {
         console.error('Error:', error);
         showMessage('There was an error submitting the form', 'error');
    }
});
