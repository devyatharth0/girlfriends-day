// Floating hearts handled via CSS background

// Reveal secret message toggle
const revealBtn = document.getElementById('revealBtn');
const hiddenMessage = document.getElementById('hiddenMessage');

revealBtn.addEventListener('click', () => {
  if (hiddenMessage.style.display === 'none' || hiddenMessage.style.display === '') {
    hiddenMessage.style.display = 'block';
    revealBtn.textContent = 'Hide Secret Message';
  } else {
    hiddenMessage.style.display = 'none';
    revealBtn.textContent = 'Click to Reveal Secret Message';
  }
});
