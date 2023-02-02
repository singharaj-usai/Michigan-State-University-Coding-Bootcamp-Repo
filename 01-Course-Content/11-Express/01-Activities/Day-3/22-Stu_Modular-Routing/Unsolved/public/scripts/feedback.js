const feedbackForm = document.getElementById('feedback-form');

// Handle when a user submits feedback
feedbackForm
  .addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the feedback text from the DOM and assign it to a variable
    let feedback = document.getElementById('feedbackText').value;
    // Get the username text and add it to a variable
    let email = document.getElementById('feedbackUsername').value.trim();

    // Create an object with the username and feedback
    const newFeedback = {
      feedback,
      email,
      feedbackType: 'Complaint',
    };

    // Fetch POST request to the server
    fetch('api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.status);
        email = '';
        feedback = '';
      });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
