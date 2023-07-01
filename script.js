function submitForm(event) {
    event.preventDefault();
    // TODO: Perform form validation if needed
  
    // Display form submission status
    var formStatus = document.getElementById('form-status');
    formStatus.textContent = 'Thank you for contacting us. We will get back to you soon.';
    formStatus.style.color = 'green';
  
    // Reset the form fields
    event.target.reset();
  
    return false;
  }
  
  