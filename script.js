// Rating function
function rate(stars) {
    var pageTitle = document.getElementById('pageTitle');
    if (stars < 5) {
        // Change the page title
        pageTitle.textContent = "How can we improve?";
        // Hide the review options
        document.getElementById('ratings').style.display = 'none';
        // Display the feedback form
        document.getElementById('feedback').style.display = 'block';
    } else {
        // Redirect to Google review page
        window.location.href = 'https://g.page/r/CR4Koahp2uHYEBM/review';
    }
}

// Allow submitting feedback when Enter key is pressed
document.getElementById('feedbackText').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitFeedback();
    }
});

// Submit feedback function
function submitFeedback() {
    var feedback = document.getElementById('feedbackText').value;
    // Here you can send feedback to the server or do whatever you want with it
    console.log('Feedback submitted:', feedback);
    document.getElementById('feedback').style.display = 'none'; // Hide the feedback form
    document.getElementById('feedbackConfirmation').style.display = 'block'; // Display the confirmation message

    // Change the page title to "Thank you"
    document.getElementById('pageTitle').textContent = "Thank you";
}

// Highlight stars when hovered over
function highlightStars(stars) {
    var starElements = document.getElementsByClassName('star');
    for (var i = 0; i < starElements.length; i++) {
        if (i < stars) {
            starElements[i].classList.add('highlighted');
        } else {
            starElements[i].classList.remove('highlighted');
        }
    }
}

// Reset stars to default state when mouse is moved away
function resetStars() {
    var starElements = document.getElementsByClassName('star');
    for (var i = 0; i < starElements.length; i++) {
        starElements[i].classList.remove('highlighted');
    }
}

