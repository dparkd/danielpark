// Add event listeners to all hoverDivs
document.querySelectorAll('.research').forEach(div => {
    div.addEventListener('click', (event) => {
      const urlSrc = div.getAttribute('data-url'); 
      window.location.href = urlSrc;
    });
  });
