function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
// Select the cursor element
const cursor = document.querySelector('.cursor');

// Update cursor position on mousemove
document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;

  // Update cursor position
  cursor.style.left = `${clientX}px`;
  cursor.style.top = `${clientY}px`;
});
