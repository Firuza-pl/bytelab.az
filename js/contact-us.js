  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload

    const loading = form.querySelector('.loading');
    const errorMsg = form.querySelector('.error-message');
    const sentMsg = form.querySelector('.sent-message');

    loading.style.display = 'block';
    errorMsg.style.display = 'none';
    sentMsg.style.display = 'none';

    // Send form via EmailJS
    emailjs.sendForm('service_60ydf29', 'template_l14jcdi', this)
      .then(function() {
        loading.style.display = 'none';
        sentMsg.style.display = 'block';
        form.reset();
      }, function(err) {
        loading.style.display = 'none';
        errorMsg.textContent = 'There was an error sending your message. Please try again.';
        errorMsg.style.display = 'block';
        console.error('EmailJS error:', err);
      });
  });