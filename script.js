// Grab all student cards with the "hidden" class
const hiddenElements = document.querySelectorAll('.student-card.hidden');

// Create a new IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the card is visible
});

// Start observing each hidden card
hiddenElements.forEach(card => observer.observe(card));
