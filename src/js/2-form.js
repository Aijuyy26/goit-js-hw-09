document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
  
    
    const savedData = JSON.parse(localStorage.getItem('feedbackFormData')) || {};
    emailInput.value = savedData.email || '';
    messageInput.value = savedData.message || '';
  
    form.addEventListener('input', () => {
      
      localStorage.setItem('feedbackFormData', JSON.stringify({
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
      }));
    });
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      localStorage.removeItem('feedbackFormData');
      emailInput.value = '';
      messageInput.value = '';
  
      
      const formData = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
      };
      console.log(formData);
    });
  });
  