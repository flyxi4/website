// Toggle Dark Mode
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
toggleDarkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Like Button Functionality
document.querySelectorAll('.like-button').forEach(button => {
  button.addEventListener('click', () => {
    let likesCount = button.getAttribute('data-likes') || 0;
    likesCount++;
    button.setAttribute('data-likes', likesCount);
    button.textContent = `Like (${likesCount})`;
  });
});

// Share Button Functionality
document.querySelectorAll('.share-button').forEach(button => {
  button.addEventListener('click', () => {
    const url = button.getAttribute('data-url');
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: url
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch(console.error);
    } else {
      alert('Share feature not supported on this browser. Please copy the link: ' + url);
    }
  });
});

// Handle Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message!');
  contactForm.reset();
});

// Handle Comment Form Submission
const commentForm = document.getElementById('commentForm');
const commentsSection = document.getElementById('commentsSection');
commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const commentText = document.getElementById('comment').value;
  const commentElement = document.createElement('div');
  commentElement.textContent = commentText;
  commentsSection.appendChild(commentElement);
  commentForm.reset();
});
