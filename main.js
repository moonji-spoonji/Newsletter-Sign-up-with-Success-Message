const form = document.getElementById('form');
const thanks = document.getElementById('thanks');
const updateCard = document.getElementById('update-card');
// dismiss button
const dismiss = document.getElementById('dismiss');

function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // const data = Object.fromEntries(new FormData(e.target));
    
    // when the form is submitted, it is replaced by the Thanks for subscribing card 
    thanks.classList.toggle('hidden');
    updateCard.classList.toggle('hidden');
}

form.addEventListener('submit', handleSubmit);

// when dismiss message button is clicked, we are redirected to the original form
dismiss.addEventListener('click', function() {
    thanks.classList.toggle('hidden');    
    updateCard.classList.toggle('hidden');
});

